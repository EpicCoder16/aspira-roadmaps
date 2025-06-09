// Quiz questions and options
const questions = [
    {
        question: "What subjects interest you the most?",
        options: [
            "Science and Mathematics",
            "Literature and Writing",
            "Arts and Music",
            "Technology and Computing",
            "Social Studies and History"
        ],
        multiple: true
    },
    {
        question: "How do you prefer to spend your free time?",
        options: [
            "Reading and researching",
            "Creating or building things",
            "Helping others",
            "Playing sports",
            "Organizing events"
        ],
        multiple: true
    },
    {
        question: "What are your career aspirations?",
        options: [
            "STEM fields (Science, Technology, Engineering, Mathematics)",
            "Arts and Entertainment",
            "Business and Entrepreneurship",
            "Healthcare and Medicine",
            "Education and Social Services"
        ],
        multiple: false
    },
    {
        question: "What type of college are you aiming for?",
        options: [
            "Ivy League/Top-tier Universities",
            "Other Competitive Private Universities",
            "Top Public Universities",
            "Liberal Arts Colleges",
            "State Universities"
        ],
        multiple: false
    },
    {
        question: "What is your target GPA range?",
        options: [
            "4.0+ (All As, multiple AP/IB courses)",
            "3.7-3.99 (Mostly As, some AP/IB courses)",
            "3.4-3.69 (Mix of As and Bs)",
            "3.0-3.39 (Mostly Bs)",
            "Below 3.0"
        ],
        multiple: false
    },
    {
        question: "Which standardized tests are you planning to take?",
        options: [
            "SAT and multiple SAT Subject Tests",
            "SAT and ACT both",
            "SAT only",
            "ACT only",
            "Undecided"
        ],
        multiple: false
    },
    {
        question: "What skills would you like to develop?",
        options: [
            "Leadership and Management",
            "Technical and Programming",
            "Creative and Artistic",
            "Communication and Public Speaking",
            "Research and Analysis"
        ],
        multiple: true
    },
    {
        question: "What type of summer activities interest you?",
        options: [
            "Academic Programs at Universities",
            "Research Internships",
            "Community Service Projects",
            "Sports Camps or Training",
            "Creative Arts Programs"
        ],
        multiple: true
    },
    {
        question: "How many AP/IB courses are you planning to take?",
        options: [
            "8+ courses throughout high school",
            "5-7 courses",
            "3-4 courses",
            "1-2 courses",
            "None"
        ],
        multiple: false
    },
    {
        question: "What are your leadership goals?",
        options: [
            "Found/Lead Multiple Organizations",
            "Hold Officer Positions in Clubs",
            "Captain of Sports Team",
            "Class Representative",
            "Prefer to Participate Without Leading"
        ],
        multiple: true
    }
];

// Club recommendations based on interests
const clubs = {
    "STEM": [
        {
            name: "Technology Student Association (TSA)",
            url: "https://tsaweb.org",
            description: "National organization for students engaged in STEM, offering competitions and leadership opportunities."
        },
        {
            name: "Robotics Club",
            url: "https://www.firstinspires.org",
            description: "Hands-on experience with robotics, programming, and engineering through competitions like FIRST Robotics."
        },
        {
            name: "Science Olympiad",
            url: "https://www.soinc.org",
            description: "Team-based competition covering various science disciplines with regional and national tournaments."
        },
        {
            name: "Computer Science Club",
            url: "https://code.org/learn",
            description: "Learn programming, participate in hackathons, and develop software projects."
        },
        {
            name: "Math Team",
            url: "https://www.mathleague.org",
            description: "Compete in mathematics competitions and develop advanced problem-solving skills."
        }
    ],
    "Arts": [
        {
            name: "National Art Honor Society",
            url: "https://www.arteducators.org/nahs",
            description: "Recognition and service opportunities for students excelling in art."
        },
        {
            name: "Drama Club",
            url: "https://www.educationaltheatreassociation.org",
            description: "Perform in plays, musicals, and develop theatrical skills."
        },
        {
            name: "Music Ensemble",
            url: "https://nafme.org",
            description: "Join band, orchestra, or choir for musical performance opportunities."
        },
        {
            name: "Creative Writing Club",
            url: "https://www.ywp.nanowrimo.org",
            description: "Develop writing skills and participate in writing competitions."
        },
        {
            name: "Photography Club",
            url: "https://psa-photo.org/index.php?youth-showcase",
            description: "Learn photography techniques and participate in photo contests."
        }
    ],
    "Leadership": [
        {
            name: "Future Business Leaders of America (FBLA)",
            url: "https://www.fbla-pbl.org",
            description: "Develop business and leadership skills through competitions and conferences."
        },
        {
            name: "Student Government",
            url: "https://www.natstuco.org",
            description: "Represent your peers and develop leadership skills through school governance."
        },
        {
            name: "Model United Nations",
            url: "https://www.nmun.org",
            description: "Simulate international diplomacy and develop public speaking skills."
        },
        {
            name: "Debate Team",
            url: "https://www.speechanddebate.org",
            description: "Compete in debate tournaments and develop argumentation skills."
        },
        {
            name: "DECA",
            url: "https://www.deca.org",
            description: "Prepare for careers in marketing, finance, and entrepreneurship."
        }
    ],
    "Service": [
        {
            name: "National Honor Society",
            url: "https://www.nhs.us",
            description: "Recognition for academic achievement and community service opportunities."
        },
        {
            name: "Key Club",
            url: "https://www.keyclub.org",
            description: "International service organization developing leadership through helping others."
        },
        {
            name: "Environmental Club",
            url: "https://www.nwf.org/eco-schools-usa",
            description: "Work on environmental conservation and sustainability projects."
        },
        {
            name: "Red Cross Club",
            url: "https://www.redcross.org/volunteer/volunteer-opportunities/volunteer-in-your-community/young-volunteers.html",
            description: "Support Red Cross missions and disaster preparedness."
        },
        {
            name: "Interact Club",
            url: "https://www.rotary.org/en/get-involved/interact-clubs",
            description: "Rotary-sponsored service club for young people."
        }
    ],
    "Athletics": [
        {
            name: "Varsity Sports Teams",
            url: "https://www.nfhs.org",
            description: "Compete in interscholastic sports at the highest school level."
        },
        {
            name: "Athletic Leadership Council",
            url: "https://www.captainsclub.org",
            description: "Develop leadership skills through sports and athletics."
        },
        {
            name: "Sports Medicine Club",
            url: "https://www.atyourownrisk.org",
            description: "Learn about sports medicine, injury prevention, and athletic training."
        },
        {
            name: "Intramural Sports",
            url: "https://www.nirsa.org",
            description: "Participate in recreational sports within your school."
        },
        {
            name: "Chess Club",
            url: "https://new.uschess.org/home/",
            description: "Develop strategic thinking through chess competitions."
        }
    ]
};

// Resource links object
const resources = {
    satPrep: {
        title: "SAT Preparation Resources",
        links: [
            { name: "Khan Academy Official SAT Prep", url: "https://www.khanacademy.org/sat" },
            { name: "College Board Practice Tests", url: "https://www.collegeboard.org/sat/practice" },
            { name: "SAT Study Schedule Templates", url: "https://blog.prepscholar.com/sat-study-schedules" }
        ]
    },
    actPrep: {
        title: "ACT Preparation Resources",
        links: [
            { name: "ACT Official Study Guide", url: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation" },
            { name: "Free ACT Practice Tests", url: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html" }
        ]
    },
    projectIdeas: {
        title: "Personal Project Resources",
        links: [
            { name: "Science Fair Project Ideas", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas" },
            { name: "Community Service Project Guide", url: "https://www.dosomething.org/us/campaigns" },
            { name: "Coding Project Ideas", url: "https://www.codecademy.com/projects" }
        ]
    },
    summerPrograms: {
        title: "Summer Program Directories",
        links: [
            { name: "Johns Hopkins CTY", url: "https://cty.jhu.edu/summer" },
            { name: "Stanford Pre-Collegiate", url: "https://spcs.stanford.edu/programs" },
            { name: "College Summer Program Directory", url: "https://www.teenlife.com/category/summer/" }
        ]
    },
    research: {
        title: "Research Opportunity Resources",
        links: [
            { name: "Science Research Guidelines", url: "https://www.sciencebuddies.org/science-fair-projects/science-projects" },
            { name: "Find Research Opportunities", url: "https://www.pathwaystoscience.org/" },
            { name: "High School Research Programs", url: "https://www.google.com/search?q=high+school+research+programs" }
        ]
    },
    competitions: {
        title: "Academic Competitions",
        links: [
            { name: "Science Olympiad", url: "https://www.soinc.org/" },
            { name: "Math Competitions", url: "https://www.maa.org/math-competitions" },
            { name: "Academic Competition Directory", url: "https://www.academiccompetitions.org/" }
        ]
    },
    essays: {
        title: "College Essay Resources",
        links: [
            { name: "Common App Essay Guide", url: "https://www.commonapp.org/apply/essay-prompts" },
            { name: "College Essay Examples", url: "https://www.collegeessayguy.com/" },
            { name: "Essay Writing Tips", url: "https://www.khanacademy.org/college-careers-more/college-admissions/applying-to-college/admissions-essays" }
        ]
    },
    scholarships: {
        title: "Scholarship Resources",
        links: [
            { name: "FastWeb Scholarship Search", url: "https://www.fastweb.com/" },
            { name: "Scholarships.com", url: "https://www.scholarships.com/" },
            { name: "College Board Scholarship Search", url: "https://bigfuture.collegeboard.org/scholarship-search" }
        ]
    }
};

let currentQuestion = 0;
let userAnswers = [];

// Initialize the quiz
function startQuiz() {
    document.getElementById('welcome-section').classList.remove('active');
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('quiz-section').classList.add('active');
    showQuestion();
}

// Display current question
function showQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById('question').textContent = questionData.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index, questionData.multiple);
        optionsContainer.appendChild(button);
    });

    // Add next button if it's a multiple choice question
    if (questionData.multiple) {
        const nextButton = document.createElement('button');
        nextButton.className = 'btn';
        nextButton.textContent = 'Next';
        nextButton.onclick = () => nextQuestion();
        optionsContainer.appendChild(nextButton);
    }

    updateProgress();
}

// Handle option selection
function selectOption(index, multiple) {
    const options = document.querySelectorAll('.option');
    
    if (!multiple) {
        userAnswers[currentQuestion] = [index];
        nextQuestion();
    } else {
        if (!userAnswers[currentQuestion]) {
            userAnswers[currentQuestion] = [];
        }
        
        const answer = userAnswers[currentQuestion];
        const position = answer.indexOf(index);
        
        if (position === -1) {
            answer.push(index);
            options[index].classList.add('selected');
        } else {
            answer.splice(position, 1);
            options[index].classList.remove('selected');
        }
    }
}

// Move to next question or show results
function nextQuestion() {
    if (!userAnswers[currentQuestion]) {
        alert('Please select at least one option!');
        return;
    }

    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Update progress bar with text
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;
    
    // Update or create progress text
    let progressText = document.querySelector('.progress-text');
    if (!progressText) {
        progressText = document.createElement('div');
        progressText.className = 'progress-text';
        document.getElementById('progress-bar').appendChild(progressText);
    }
    progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Generate and display results
function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    
    const recommendations = generateRecommendations();
    const roadmap = generateRoadmap();
    
    displayClubRecommendations(recommendations);
    displayRoadmap(roadmap);
}

// Generate club recommendations based on answers
function generateRecommendations() {
    const interests = {
        STEM: 0,
        Arts: 0,
        Leadership: 0,
        Service: 0,
        Athletics: 0
    };

    // Analyze answers to determine interests
    userAnswers.forEach((answer, questionIndex) => {
        answer.forEach(optionIndex => {
            switch(questionIndex) {
                case 0: // Subjects
                    if (optionIndex === 0 || optionIndex === 3) interests.STEM++;
                    if (optionIndex === 1 || optionIndex === 2) interests.Arts++;
                    break;
                case 1: // Free time
                    if (optionIndex === 1) interests.STEM++;
                    if (optionIndex === 2) interests.Service++;
                    if (optionIndex === 3) interests.Athletics++;
                    if (optionIndex === 4) interests.Leadership++;
                    break;
                case 2: // Career
                    if (optionIndex === 0) interests.STEM += 2;
                    if (optionIndex === 1) interests.Arts += 2;
                    if (optionIndex === 2) interests.Leadership += 2;
                    break;
                case 3: // Skills
                    if (optionIndex === 0) interests.Leadership++;
                    if (optionIndex === 1) interests.STEM++;
                    if (optionIndex === 2) interests.Arts++;
                    break;
            }
        });
    });

    // Sort interests by score
    const sortedInterests = Object.entries(interests)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([category]) => category);

    return sortedInterests;
}

// Generate 4-year roadmap based on answers
function generateRoadmap() {
    const collegeType = questions[3].options[userAnswers[3][0]];
    const targetGPA = questions[4].options[userAnswers[4][0]];
    const isIvyLeagueTrack = collegeType === "Ivy League/Top-tier Universities";
    const isHighAchiever = targetGPA.startsWith("4.0+") || targetGPA.startsWith("3.7-3.99");

    const roadmap = {
        "Summer Before Freshman Year": {
            "Academic Preparation": [
                "Review algebra and geometry concepts",
                "Start reading classical literature",
                "Consider taking a summer enrichment course",
                isIvyLeagueTrack && "Prepare for honors/advanced placement classes"
            ].filter(Boolean),
            "Planning": [
                "Research high school's available AP/Honors courses",
                "Plan freshman year course schedule",
                "Identify potential extracurricular activities",
                isIvyLeagueTrack && "Research summer programs for following years"
            ].filter(Boolean),
            "Resources": [
                resources.projectIdeas,
                resources.summerPrograms
            ]
        },
        "Freshman Year": {
            "Academic": [
                "Take challenging core classes",
                "Maintain strong GPA (aim for 3.8+)",
                isIvyLeagueTrack ? "Take 1-2 AP/Honors classes" : "Consider taking an AP/Honors class",
                "Start building strong study habits",
                "Keep detailed records of achievements"
            ],
            "Extracurricular": [
                "Join 2-3 clubs that match your interests",
                "Try out for sports teams if interested",
                "Start community service",
                isIvyLeagueTrack && "Begin developing leadership roles",
                "Document all activities and hours"
            ].filter(Boolean),
            "College Prep": [
                "Meet with guidance counselor to plan 4-year schedule",
                "Research summer programs and internships",
                "Start building relationships with teachers",
                isIvyLeagueTrack && "Consider SAT Subject Test preparation",
                "Begin exploring college options"
            ].filter(Boolean)
        },
        "Summer After Freshman Year": {
            "Academic": [
                "Take an enrichment course at a local college",
                "Start SAT/ACT prep",
                isIvyLeagueTrack && "Prepare for upcoming AP courses",
                "Read extensively from college preparatory lists"
            ].filter(Boolean),
            "Activities": [
                "Volunteer or community service",
                "Attend academic or sports camps",
                "Start a personal project",
                isIvyLeagueTrack && "Consider research opportunities"
            ].filter(Boolean),
            "Resources": [
                resources.satPrep,
                resources.actPrep,
                resources.projectIdeas,
                resources.research
            ]
        },
        "Sophomore Year": {
            "Academic": [
                isIvyLeagueTrack ? "Take 2-3 AP/Honors classes" : "Take 1-2 AP/Honors classes",
                "Maintain high GPA",
                "Take PSAT for practice",
                "Consider SAT Subject Tests in completed courses",
                "Start SAT/ACT preparation"
            ],
            "Extracurricular": [
                "Take leadership roles in clubs",
                "Continue community service",
                "Participate in competitions",
                isIvyLeagueTrack && "Start unique personal projects",
                "Document achievements and hours"
            ].filter(Boolean),
            "College Prep": [
                "Research colleges and admission requirements",
                "Attend college fairs",
                "Plan summer activities",
                "Update college planning portfolio",
                isIvyLeagueTrack && "Research summer programs at top universities"
            ].filter(Boolean)
        },
        "Summer After Sophomore Year": {
            "Academic": [
                isIvyLeagueTrack ? "Attend selective summer programs" : "Attend summer programs",
                "Continue SAT/ACT prep",
                "Prepare for junior year AP courses",
                "Consider taking summer college courses"
            ],
            "Activities": [
                "Internship or research opportunity",
                "Leadership programs",
                "Volunteer work",
                isIvyLeagueTrack && "Start significant community initiative"
            ].filter(Boolean)
        },
        "Junior Year": {
            "Academic": [
                isIvyLeagueTrack ? "Take 4-5 AP classes" : "Take 2-3 AP classes",
                "Take SAT/ACT (multiple times if needed)",
                "Take SAT Subject Tests",
                "Maintain excellent grades",
                "Consider academic competitions"
            ],
            "Extracurricular": [
                "Hold leadership positions",
                "Focus on significant achievements",
                "Lead major projects or initiatives",
                "Continue consistent involvement",
                isIvyLeagueTrack && "Aim for state/national recognition"
            ].filter(Boolean),
            "College Prep": [
                "Start college essays",
                "Research scholarships",
                "Visit colleges",
                "Prepare college application portfolio",
                "Meet with college counselor regularly"
            ],
            "Resources": [
                resources.satPrep,
                resources.actPrep,
                resources.competitions,
                resources.essays,
                resources.scholarships
            ]
        },
        "Summer After Junior Year": {
            "Academic": [
                "Finalize standardized testing",
                "Work on college essays",
                isIvyLeagueTrack ? "Selective summer programs/research" : "Summer programs/internships",
                "Prepare for senior year courses"
            ],
            "College Applications": [
                "Complete common application",
                "Finalize college list",
                "Work on supplemental essays",
                "Prepare activity resume",
                "Plan early decision/action strategy"
            ]
        },
        "Senior Year Fall": {
            "Academic": [
                "Maintain strong grades (avoid senioritis)",
                "Complete remaining AP courses",
                "Finish any remaining SAT Subject Tests",
                isIvyLeagueTrack && "Consider academic research projects"
            ].filter(Boolean),
            "Applications": [
                "Submit early applications (if applicable)",
                "Complete regular decision applications",
                "Request teacher recommendations",
                "Send test scores and transcripts",
                "Apply for scholarships"
            ],
            "Extracurricular": [
                "Continue leadership roles",
                "Complete major projects",
                "Document achievements",
                "Mentor younger students"
            ]
        },
        "Senior Year Spring": {
            "Academic": [
                "Maintain strong grades",
                "Complete AP exams",
                "Document any new achievements",
                "Prepare for college transition"
            ],
            "College Planning": [
                "Review college decisions",
                "Compare financial aid packages",
                "Make final college choice",
                "Apply for additional scholarships",
                "Plan summer transition activities"
            ]
        }
    };

    return roadmap;
}

// Display club recommendations
function displayClubRecommendations(recommendations) {
    const clubsList = document.getElementById('clubs-list');
    clubsList.innerHTML = '';

    recommendations.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.innerHTML = `
            <h4>${category}</h4>
            <div class="clubs-category">
                ${clubs[category].map(club => `
                    <div class="club-item">
                        <a href="${club.url}" target="_blank" class="club-link">${club.name}</a>
                        <p class="club-description">${club.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        clubsList.appendChild(categoryElement);
    });
}

// Display roadmap
function displayRoadmap(roadmap) {
    const roadmapContent = document.getElementById('roadmap-content');
    roadmapContent.innerHTML = '';

    Object.entries(roadmap).forEach(([year, categories]) => {
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';
        
        let yearHTML = `<h4>${year}</h4>`;
        
        Object.entries(categories).forEach(([category, items]) => {
            if (category === "Resources") {
                yearHTML += `
                    <div class="resources-section">
                        <h5>Helpful Resources</h5>
                        ${items.map(resourceCategory => `
                            <div class="resource-category">
                                <h6>${resourceCategory.title}</h6>
                                <ul class="resource-links">
                                    ${resourceCategory.links.map(link => `
                                        <li><a href="${link.url}" target="_blank" class="resource-link">${link.name}</a></li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                yearHTML += `
                    <div class="category">
                        <h5>${category}</h5>
                        <ul>
                            ${Array.isArray(items) ? items.map(item => `<li>${item}</li>`).join('') : ''}
                        </ul>
                    </div>
                `;
            }
        });
        
        yearSection.innerHTML = yearHTML;
        roadmapContent.appendChild(yearSection);
    });
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('welcome-section').classList.remove('hidden');
    document.getElementById('welcome-section').classList.add('active');
} 