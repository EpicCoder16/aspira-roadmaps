auth.onAuthStateChanged(async user => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  document.getElementById('user-info').innerHTML = `<strong>User:</strong> ${user.email}`;
  const userEmailDiv = document.getElementById('user-email');
  if (userEmailDiv) {
    userEmailDiv.textContent = user.email;
    userEmailDiv.style.display = 'block';
  }
  const headerActions = document.querySelector('.header-actions');
  if (headerActions) headerActions.style.display = 'flex';
  loadRoadmap(user.uid);
});

// Hide user-email and header-actions if not logged in (on page load)
window.addEventListener('DOMContentLoaded', () => {
  const userEmailDiv = document.getElementById('user-email');
  if (userEmailDiv) userEmailDiv.style.display = 'none';
  const headerActions = document.querySelector('.header-actions');
  if (headerActions) headerActions.style.display = 'none';
});

function logout() {
  auth.signOut();
}

async function loadRoadmap(uid) {
  const doc = await db.collection('roadmaps').doc(uid).get();
  let milestones = [];
  if (doc.exists && doc.data().milestones) {
    milestones = doc.data().milestones;
  } else {
    document.getElementById('roadmap-dashboard').innerHTML = "No roadmap found. Complete the quiz to generate one!";
    document.getElementById('tracker').innerHTML = "";
    return;
  }
  renderRoadmap(milestones);
  renderTracker(milestones);
}

function groupMilestones(milestones) {
  const filtered = milestones.filter(m => !m.name.toLowerCase().includes('resources'));
  const grouped = {};
  filtered.forEach(m => {
    // Example: "Freshman Year - Academic: Maintain strong GPA (aim for 3.8+)"
    const match = m.name.match(/^(.+?)\s*-\s*(.+?):\s*(.+)$/);
    if (!match) return;
    let year = match[1].trim();
    let category = match[2].trim();
    const desc = match[3].trim();

    // If category is "Summer Activities", attach to previous year as a category
    if (category.toLowerCase().includes('summer')) {
      // Attach to the previous year if possible
      const yearOrder = ["Freshman Year", "Sophomore Year", "Junior Year", "Senior Year"];
      const idx = yearOrder.indexOf(year);
      if (idx > 0) year = yearOrder[idx - 1];
      category = "Summer Activities";
    }

    if (!grouped[year]) grouped[year] = {};
    if (!grouped[year][category]) grouped[year][category] = [];
    grouped[year][category].push({ ...m, desc });
  });
  return grouped;
}

function renderRoadmap(milestones) {
  const container = document.getElementById('roadmap-dashboard');
  const grouped = groupMilestones(milestones);
  const years = Object.keys(grouped);
  if (years.length === 0) {
    container.innerHTML = "<p>No milestones found.</p>";
    return;
  }

  // Tabs for years
  let tabsHtml = `<div class="tabs">`;
  years.forEach((year, i) => {
    tabsHtml += `<button class="tab-btn${i === 0 ? ' active' : ''}" onclick="showYear('${year}')">${year}</button>`;
  });
  tabsHtml += `</div>`;

  // Year sections
  let yearsHtml = '';
  years.forEach((year, i) => {
    yearsHtml += `<div class="year-section" id="year-${year.replace(/\s/g, '')}" style="${i === 0 ? '' : 'display:none;'}">`;
    const categories = Object.keys(grouped[year]);
    categories.forEach(category => {
      yearsHtml += `<h4>${category}</h4>`;
      grouped[year][category].forEach(milestone => {
        // Find the index in the original milestones array
        const idx = milestones.findIndex(m =>
          m.name === milestone.name
        );
        yearsHtml += `
          <div class="milestone-card">
            <span>${milestone.desc}</span>
            <select onchange="markMilestone(${idx}, this.value)">
              <option value="">Mark as...</option>
              <option value="successful" ${milestone.status === 'successful' ? 'selected' : ''}>Successful</option>
              <option value="unsuccessful" ${milestone.status === 'unsuccessful' ? 'selected' : ''}>Unsuccessful</option>
            </select>
            ${milestone.status === 'unsuccessful' && milestone.alternative ? `<span class="alt-text">Alternative: ${milestone.alternative}</span>` : ""}
          </div>
        `;
      });
    });
    yearsHtml += `</div>`;
  });

  container.innerHTML = tabsHtml + yearsHtml;
}

// Tab switching logic
window.showYear = function(year) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.year-section').forEach(sec => sec.style.display = 'none');
  document.querySelector(`.tab-btn[onclick="showYear('${year}')"]`).classList.add('active');
  document.getElementById('year-' + year.replace(/\s/g, '')).style.display = '';
};

function saveRoadmapToFirestore(roadmap) {
  const user = auth.currentUser;
  if (!user) return;
  // Flatten roadmap into milestones array
  const milestones = [];
  Object.entries(roadmap).forEach(([year, categories]) => {
    Object.entries(categories).forEach(([category, items]) => {
      if (Array.isArray(items)) {
        items.forEach(item => {
          milestones.push({ name: `${year} - ${category}: ${item}`, status: "", alternative: "" });
        });
      }
    });
  });
  db.collection('roadmaps').doc(user.uid).set({ milestones });
}

window.markMilestone = async function(idx, status) {
  const user = auth.currentUser;
  const doc = await db.collection('roadmaps').doc(user.uid).get();
  if (!doc.exists) return;
  const milestones = doc.data().milestones || [];
  milestones[idx].status = status;
  if (status === 'unsuccessful') {
    // Show loading message while generating alternative
    const milestoneCards = document.querySelectorAll('.milestone-card');
    if (milestoneCards[idx]) {
      let altSpan = milestoneCards[idx].querySelector('.alt-text');
      if (!altSpan) {
        altSpan = document.createElement('span');
        altSpan.className = 'alt-text';
        milestoneCards[idx].appendChild(altSpan);
      }
      altSpan.textContent = 'Creating custom alternatives...';
    }
    milestones[idx].alternative = await generateAlternative(milestones[idx].name);
  } else {
    milestones[idx].alternative = '';
  }
  await db.collection('roadmaps').doc(user.uid).set({ milestones });
  renderRoadmap(milestones);
  renderTracker(milestones);
};

function renderTracker(milestones) {
  const total = milestones.length;
  const successful = milestones.filter(m => m.status === 'successful').length;
  const unsuccessful = milestones.filter(m => m.status === 'unsuccessful').length;
  const percent = total ? Math.round((successful / total) * 100) : 0;
  document.getElementById('tracker').innerHTML = `
    <h3>Progress Tracker</h3>
    <p>Completed: ${percent}%</p>
    <p>Successful: ${successful}</p>
    <p>Unsuccessful: ${unsuccessful}</p>
  `;
}

// Improved alternative generator with OpenRouter AI integration
async function generateAlternative(milestoneName) {
  // Try OpenRouter AI first
  try {
    const prompt = `You are an expert high school counselor. A student was unable to complete the following milestone: "${milestoneName}". In 100-120 words, speak directly to the student (use 'you') and suggest a realistic, actionable alternative or workaround that would still help them stand out for college admissions. Be specific and practical. Do not refer to 'the student' or 'they'; use 'you' throughout.`;
    const response = await fetch('/api/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    // Try to extract a direct suggestion from the AI response
    let suggestion = '';
    if (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      suggestion = data.choices[0].message.content.trim();
    }
    if (suggestion) {
      // Remove any leading 'Alternative:' or similar
      return suggestion.replace(/^Alternative\s*[:\-]?\s*/i, '');
    }
  } catch (e) {
    // If API fails, fall back to pattern matching
    console.error('AI alternative fetch failed:', e);
  }
  // Fallback pattern-matching logic
  const lower = milestoneName.toLowerCase();
  if (lower.includes('join 2-3 clubs')) {
    return "Start your own club or organization, or join a community/nonprofit group outside of school.";
  }
  if (lower.includes('leadership') || lower.includes('officer position')) {
    return "Seek leadership roles in community organizations, online groups, or start a project where you can demonstrate leadership skills.";
  }
  if (lower.includes('gpa') || lower.includes('grades')) {
    return "Focus on improving study habits, seek tutoring, or take online courses to boost your academic record.";
  }
  if (lower.includes('volunteer') || lower.includes('community service')) {
    return "Look for virtual volunteering, start your own service project, or help a local nonprofit.";
  }
  if (lower.includes('summer program')) {
    return "Pursue online summer programs, internships, or independent research projects if formal programs are unavailable.";
  }
  if (lower.includes('standardized test')) {
    return "Try alternative standardized tests, or focus on strengthening other parts of your application (projects, essays, etc.).";
  }
  if (lower.includes('club meetings')) {
    return "Engage with clubs virtually, participate in online forums, or collaborate on group projects remotely.";
  }
  if (lower.includes('personal project')) {
    return "Team up with friends for a group project, or contribute to open-source/community initiatives.";
  }
  // Default fallback
  return "Try a different approach or seek opportunities outside of school for: " + milestoneName;
}