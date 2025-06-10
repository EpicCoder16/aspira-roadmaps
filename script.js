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

// Add field-specific resources
const fieldResources = {
    STEM: {
        title: "STEM Opportunities",
        links: [
            { name: "NASA High School Internships", url: "https://intern.nasa.gov/", description: "Space and aeronautics research opportunities" },
            { name: "Research Science Institute (RSI)", url: "https://www.cee.org/programs/research-science-institute", description: "Summer research program at MIT" },
            { name: "Science Internship Program (SIP)", url: "https://ucsc-sip.org/", description: "UCSC research internships" },
            { name: "Google Science Fair", url: "https://www.googlesciencefair.com/", description: "International science competition" },
            { name: "NIH High School Programs", url: "https://www.training.nih.gov/programs/hs_student_resources", description: "Biomedical research opportunities" }
        ]
    },
    Healthcare: {
        title: "Healthcare & Medical Opportunities",
        links: [
            { name: "Stanford Medical Youth Science Program", url: "https://smysp.stanford.edu/", description: "Summer medical program" },
            { name: "NIH High School Summer Internship", url: "https://www.training.nih.gov/programs/hs-sip", description: "Biomedical research" },
            { name: "Local Hospital Volunteer Programs", url: "https://www.volunteermatch.org/search?l=&k=hospital", description: "Find hospital volunteering opportunities" },
            { name: "Red Cross Volunteer", url: "https://www.redcross.org/volunteer/become-a-volunteer.html", description: "Healthcare-related volunteering" }
        ]
    },
    Business: {
        title: "Business & Entrepreneurship Opportunities",
        links: [
            { name: "Junior Achievement", url: "https://www.juniorachievement.org/", description: "Business and entrepreneurship programs" },
            { name: "Goldman Sachs High School Programs", url: "https://www.goldmansachs.com/careers/students/programs/", description: "Finance exposure programs" },
            { name: "Young Entrepreneurs Academy", url: "https://yeausa.org/", description: "Start your own business" },
            { name: "NFTE Programs", url: "https://www.nfte.com/", description: "Entrepreneurship education" }
        ]
    },
    Arts: {
        title: "Arts & Creative Opportunities",
        links: [
            { name: "National YoungArts Foundation", url: "https://www.youngarts.org/", description: "Arts recognition and opportunities" },
            { name: "Scholastic Art & Writing Awards", url: "https://www.artandwriting.org/", description: "Recognition for creative work" },
            { name: "Summer Arts Programs Search", url: "https://www.teenlife.com/search?q=summer%20arts", description: "Find summer arts programs" },
            { name: "Getty Museum Internships", url: "https://www.getty.edu/education/college/multicultural/", description: "Museum experience" }
        ]
    },
    Technology: {
        title: "Technology & Computing Opportunities",
        links: [
            { name: "Microsoft High School Programs", url: "https://careers.microsoft.com/students/", description: "Tech industry exposure" },
            { name: "Girls Who Code Programs", url: "https://girlswhocode.com/programs/", description: "Coding programs for girls" },
            { name: "Code.org Projects", url: "https://code.org/learn", description: "Learn programming" },
            { name: "GitHub Student Developer Pack", url: "https://education.github.com/pack", description: "Free developer tools" }
        ]
    }
};

// Add internship and opportunity resources
const opportunityResources = {
    internships: {
        title: "Find Internships",
        links: [
            { name: "Chegg Internships", url: "https://www.internships.com/high-school", description: "High school internship database" },
            { name: "WayUp", url: "https://www.wayup.com/", description: "Entry-level jobs and internships" },
            { name: "LinkedIn Youth Opportunities", url: "https://www.linkedin.com/jobs/youth-jobs/", description: "Network for opportunities" },
            { name: "Indeed High School Jobs", url: "https://www.indeed.com/q-High-School-Student-jobs.html", description: "Job search platform" }
        ]
    },
    volunteer: {
        title: "Volunteer Opportunities",
        links: [
            { name: "VolunteerMatch", url: "https://www.volunteermatch.org/", description: "Find local opportunities" },
            { name: "DoSomething.org", url: "https://www.dosomething.org/us", description: "Youth volunteer campaigns" },
            { name: "United Way", url: "https://www.unitedway.org/get-involved/volunteer", description: "Community service" }
        ]
    },
    competitions: {
        title: "Academic Competitions",
        links: [
            { name: "Intel ISEF", url: "https://www.societyforscience.org/isef/", description: "International science fair" },
            { name: "Congressional App Challenge", url: "https://www.congressionalappchallenge.us/", description: "Coding competition" },
            { name: "National History Day", url: "https://www.nhd.org/", description: "History competition" },
            { name: "Poetry Out Loud", url: "https://www.poetryoutloud.org/", description: "Poetry competition" }
        ]
    }
};

// Add specific summer programs by field
const summerPrograms = {
    STEM: {
        title: "Recommended STEM Summer Programs",
        links: [
            { 
                name: "MIT Research Science Institute (RSI)", 
                url: "https://www.cee.org/programs/research-science-institute",
                description: "Highly selective research program at MIT for rising seniors",
                yearRecommended: "Junior Summer"
            },
            { 
                name: "Stanford Institutes of Medicine Summer Research Program", 
                url: "https://simr.stanford.edu/",
                description: "8-week research program for rising seniors interested in medicine/bioscience",
                yearRecommended: "Junior Summer"
            },
            { 
                name: "Google Computer Science Summer Institute", 
                url: "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute",
                description: "3-week introduction to computer science for rising college freshmen",
                yearRecommended: "Senior Summer"
            },
            { 
                name: "Michigan Math and Science Scholars", 
                url: "https://mmss.umich.edu/",
                description: "2-week program for sophomores and juniors interested in STEM",
                yearRecommended: "Sophomore Summer"
            }
        ]
    },
    Business: {
        title: "Recommended Business Summer Programs",
        links: [
            { 
                name: "Wharton Global Youth Program", 
                url: "https://globalyouth.wharton.upenn.edu/summer-high-school-programs/",
                description: "Prestigious business program at Wharton for rising juniors and seniors",
                yearRecommended: "Junior Summer"
            },
            { 
                name: "Yale Young Global Scholars - Business Track", 
                url: "https://globalscholars.yale.edu/",
                description: "2-week intensive program covering business and leadership",
                yearRecommended: "Sophomore/Junior Summer"
            },
            { 
                name: "Babson Summer Study", 
                url: "https://www.babson.edu/academics/extended-education/high-school-programs/summer-study/",
                description: "Learn entrepreneurship at a top business school",
                yearRecommended: "Junior Summer"
            },
            { 
                name: "Berkeley Business Academy for Youth", 
                url: "https://haas.berkeley.edu/business-academy/",
                description: "2-week program introducing business concepts",
                yearRecommended: "Sophomore Summer"
            }
        ]
    },
    Arts: {
        title: "Recommended Arts Summer Programs",
        links: [
            { 
                name: "Rhode Island School of Design Pre-College", 
                url: "https://precollege.risd.edu/",
                description: "6-week intensive art program for high school students",
                yearRecommended: "Junior Summer"
            },
            { 
                name: "Interlochen Summer Arts Camp", 
                url: "https://www.interlochen.org/summer-arts-camp",
                description: "Prestigious summer arts program covering multiple disciplines",
                yearRecommended: "Any Summer"
            },
            { 
                name: "NYU Tisch Summer High School", 
                url: "https://tisch.nyu.edu/special-programs/high-school-programs",
                description: "Programs in various arts disciplines",
                yearRecommended: "Junior Summer"
            }
        ]
    },
    Healthcare: {
        title: "Recommended Healthcare Summer Programs",
        links: [
            { 
                name: "Penn Medicine Summer Program", 
                url: "https://www.pennmedicine.org/departments-and-centers/department-of-medicine/education-and-training/high-school-pipeline-program",
                description: "Medical research and shadowing program",
                yearRecommended: "Junior Summer"
            },
            { 
                name: "NIH Summer Internship Program", 
                url: "https://www.training.nih.gov/programs/hs-sip",
                description: "Research internship at the National Institutes of Health",
                yearRecommended: "Junior Summer"
            }
        ]
    }
};

// Add specific club progression paths
const clubProgressions = {
    STEM: {
        title: "Recommended STEM Club Progression",
        paths: [
            {
                club: "Science Olympiad",
                progression: [
                    { year: "Freshman", goal: "Join team and participate in 2-3 events" },
                    { year: "Sophomore", goal: "Specialize in specific events and aim for regional medals" },
                    { year: "Junior", goal: "Lead study sessions and compete at state level" },
                    { year: "Senior", goal: "Team captain or event leader, mentor younger members" }
                ]
            },
            {
                club: "Robotics Club",
                progression: [
                    { year: "Freshman", goal: "Join FIRST Robotics team, learn basic programming/building" },
                    { year: "Sophomore", goal: "Lead a sub-team (programming, mechanical, electrical)" },
                    { year: "Junior", goal: "Competition team leader, develop team strategy" },
                    { year: "Senior", goal: "Team captain, manage project timeline and resources" }
                ]
            }
        ]
    },
    Business: {
        title: "Recommended Business Club Progression",
        paths: [
            {
                club: "FBLA (Future Business Leaders of America)",
                progression: [
                    { year: "Freshman", goal: "Join FBLA and participate in one competitive event" },
                    { year: "Sophomore", goal: "Compete in multiple events, join a committee" },
                    { year: "Junior", goal: "Run for chapter officer position, aim for state competition" },
                    { year: "Senior", goal: "Chapter President or State Officer, national competition" }
                ]
            },
            {
                club: "DECA",
                progression: [
                    { year: "Freshman", goal: "Join and learn about business competitions" },
                    { year: "Sophomore", goal: "Compete in regional events, take on project lead role" },
                    { year: "Junior", goal: "Officer position, mentor new members, state competition" },
                    { year: "Senior", goal: "Chapter leadership, international competition" }
                ]
            }
        ]
    },
    Arts: {
        title: "Recommended Arts Club Progression",
        paths: [
            {
                club: "National Art Honor Society",
                progression: [
                    { year: "Freshman", goal: "Join and participate in art exhibitions" },
                    { year: "Sophomore", goal: "Lead art workshops, organize exhibitions" },
                    { year: "Junior", goal: "Officer position, curate school gallery" },
                    { year: "Senior", goal: "President, organize community art events" }
                ]
            }
        ]
    },
    Leadership: {
        title: "Recommended Leadership Club Progression",
        paths: [
            {
                club: "Student Government",
                progression: [
                    { year: "Freshman", goal: "Class representative or committee member" },
                    { year: "Sophomore", goal: "Committee chair or class officer" },
                    { year: "Junior", goal: "Executive board position" },
                    { year: "Senior", goal: "Student Body President or Vice President" }
                ]
            }
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

    // Add next button in a separate container if it's a multiple choice question
    if (questionData.multiple) {
        // Remove existing next button container if it exists
        const existingNextButton = document.querySelector('.next-button-container');
        if (existingNextButton) {
            existingNextButton.remove();
        }
        
        const nextButtonContainer = document.createElement('div');
        nextButtonContainer.className = 'next-button-container';
        
        const nextButton = document.createElement('button');
        nextButton.className = 'btn';
        nextButton.textContent = 'Next';
        nextButton.onclick = () => nextQuestion();
        
        nextButtonContainer.appendChild(nextButton);
        document.getElementById('quiz-section').appendChild(nextButtonContainer);
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

    // Only remove the next button container if we're actually moving to the next question
    const nextButtonContainer = document.querySelector('.next-button-container');
    if (nextButtonContainer) {
        nextButtonContainer.remove();
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

// Add OpenRouter integration
async function getAIRecommendations(userResponses) {
    try {
        // Build the prompt string using student responses
        const userPrompt = `Based on the following student responses, recommend the most suitable clubs, activities, and opportunities. Consider all aspects of their interests and goals:

${questions.map((q, i) => `${q.question}
Answer: ${userAnswers[i].map(idx => q.options[idx]).join(', ')}`).join('\n\n')}

Please provide recommendations in this exact JSON format:
{
    "categories": [
        {
            "name": "Category Name",
            "clubs": [
                {
                    "name": "Club Name",
                    "description": "Club Description",
                    "url": "Optional URL"
                }
            ],
            "explanation": "Why this category fits the student"
        }
    ]
}`;

        // Secure call to your Edge Function instead of OpenRouter directly
        const response = await fetch('/api/ask-ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: userPrompt })
        });

        const data = await response.json();

        if (!data || !data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
            console.error('Invalid response format from AI:', data);
            return null;
        }

        // Extract JSON content from AI response
        const responseText = data.choices[0].message.content;
        const jsonStart = responseText.indexOf('{');
        const jsonEnd = responseText.lastIndexOf('}') + 1;

        if (jsonStart === -1 || jsonEnd <= jsonStart) {
            console.error('No valid JSON found in response:', responseText);
            return null;
        }

        const jsonStr = responseText.slice(jsonStart, jsonEnd);

        try {
            const parsed = JSON.parse(jsonStr);
            if (!parsed || !parsed.categories || !Array.isArray(parsed.categories)) {
                console.error('Invalid JSON structure:', parsed);
                return null;
            }
            return parsed;
        } catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            return null;
        }

    } catch (error) {
        console.error('Error getting AI recommendations:', error);
        return null;
    }
}


// Update the generateRecommendations function
async function generateRecommendations() {
    // Try to get AI-powered recommendations first
    const aiRecommendations = await getAIRecommendations(userAnswers);
    
    if (aiRecommendations && aiRecommendations.categories && aiRecommendations.categories.length > 0) {
        return aiRecommendations.categories;
    }
    
    // Fall back to basic recommendations if AI fails
    const interests = {
        STEM: 0,
        Arts: 0,
        Leadership: 0,
        Service: 0,
        Athletics: 0
    };

    // Enhanced scoring system using all questions
    userAnswers.forEach((answer, questionIndex) => {
        answer.forEach(optionIndex => {
            // Subject interests (Q0)
            if (questionIndex === 0) {
                if (optionIndex === 0 || optionIndex === 3) interests.STEM += 2;
                if (optionIndex === 1 || optionIndex === 2) interests.Arts += 2;
                if (optionIndex === 4) interests.Service += 1;
            }
            // Free time (Q1)
            else if (questionIndex === 1) {
                if (optionIndex === 0) interests.STEM += 1;
                if (optionIndex === 1) interests.STEM += 1;
                if (optionIndex === 2) interests.Service += 2;
                if (optionIndex === 3) interests.Athletics += 2;
                if (optionIndex === 4) interests.Leadership += 2;
            }
            // Career aspirations (Q2)
            else if (questionIndex === 2) {
                if (optionIndex === 0) interests.STEM += 3;
                if (optionIndex === 1) interests.Arts += 3;
                if (optionIndex === 2) interests.Leadership += 3;
                if (optionIndex === 3) {
                    interests.STEM += 2;
                    interests.Service += 1;
                }
                if (optionIndex === 4) interests.Service += 3;
            }
            // Skills to develop (Q6)
            else if (questionIndex === 6) {
                if (optionIndex === 0) interests.Leadership += 2;
                if (optionIndex === 1) interests.STEM += 2;
                if (optionIndex === 2) interests.Arts += 2;
                if (optionIndex === 3) interests.Leadership += 1;
                if (optionIndex === 4) interests.STEM += 1;
            }
            // Summer activities (Q7)
            else if (questionIndex === 7) {
                if (optionIndex === 0) interests.STEM += 1;
                if (optionIndex === 1) interests.STEM += 1;
                if (optionIndex === 2) interests.Service += 2;
                if (optionIndex === 3) interests.Athletics += 1;
                if (optionIndex === 4) interests.Arts += 2;
            }
            // Leadership goals (Q9)
            else if (questionIndex === 9) {
                if (optionIndex === 0 || optionIndex === 1) interests.Leadership += 3;
                if (optionIndex === 2) interests.Athletics += 2;
                if (optionIndex === 3) interests.Leadership += 1;
            }
        });
    });

    // Sort interests by score and get top categories
    const topCategories = Object.entries(interests)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([category]) => ({
            name: category,
            clubs: clubs[category] || [],
            explanation: `Based on your responses, you show a strong interest in ${category.toLowerCase()} activities.`
        }));

    return topCategories;
}

// Update showResults to handle async recommendations and errors
async function showResults() {
    try {
        // Hide quiz section and show results section
        const quizSection = document.getElementById('quiz-section');
        const resultsSection = document.getElementById('results-section');
        
        if (!quizSection || !resultsSection) {
            throw new Error('Required sections not found in DOM');
        }
        
        quizSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        
        // Show loading state
        const resultsContainer = document.querySelector('.results-container');
        if (!resultsContainer) {
            throw new Error('Results container not found');
        }
        
        resultsContainer.innerHTML = '<div class="loading">Generating your personalized recommendations...</div>';
        
        // Get recommendations and roadmap
        const recommendations = await generateRecommendations();
        const roadmap = generateRoadmap();
        
        if (!recommendations || !Array.isArray(recommendations) || recommendations.length === 0) {
            throw new Error('Failed to generate valid recommendations');
        }
        
        // Initialize the results container with required structure
        resultsContainer.innerHTML = `
            <div id="recommended-clubs">
                <h3>Recommended Clubs & Organizations</h3>
                <div id="clubs-list"></div>
            </div>
            <div id="roadmap">
                <h3>Your 4-Year Roadmap</h3>
                <div id="roadmap-content"></div>
            </div>
        `;
        
        // Display results
        displayClubRecommendations(recommendations);
        displayRoadmap(roadmap);
        
    } catch (error) {
        console.error('Error showing results:', error);
        const resultsContainer = document.querySelector('.results-container');
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <div class="error-message">
                    <h3>Oops! Something went wrong</h3>
                    <p>We encountered an error while generating your recommendations. Please try again.</p>
                    <button onclick="restartQuiz()" class="btn">Start Over</button>
                </div>
            `;
        }
    }
}

// Fix the restart quiz function
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('welcome-section').classList.remove('hidden');
    document.getElementById('welcome-section').classList.add('active');
    
    // Clear any error messages or results
    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.innerHTML = `
        <div id="recommended-clubs">
            <h3>Recommended Clubs & Organizations</h3>
            <div id="clubs-list"></div>
        </div>
        <div id="roadmap">
            <h3>Your 4-Year Roadmap</h3>
            <div id="roadmap-content"></div>
        </div>
    `;
}

// Generate 4-year roadmap based on answers
function generateRoadmap() {
    const collegeType = questions[3].options[userAnswers[3][0]];
    const careerPath = questions[2].options[userAnswers[2][0]];
    const isIvyLeagueTrack = collegeType === "Ivy League/Top-tier Universities";

    // Determine relevant programs, clubs, and field resources based on career path
    let relevantSummerPrograms;
    let relevantClubPaths;
    let relevantFieldResources;
    
    if (careerPath.includes("STEM")) {
        relevantSummerPrograms = summerPrograms.STEM;
        relevantClubPaths = clubProgressions.STEM;
        relevantFieldResources = fieldResources.STEM;
    } else if (careerPath.includes("Business")) {
        relevantSummerPrograms = summerPrograms.Business;
        relevantClubPaths = clubProgressions.Business;
        relevantFieldResources = fieldResources.Business;
    } else if (careerPath.includes("Arts")) {
        relevantSummerPrograms = summerPrograms.Arts;
        relevantClubPaths = clubProgressions.Arts;
        relevantFieldResources = fieldResources.Arts;
    } else if (careerPath.includes("Healthcare")) {
        relevantSummerPrograms = summerPrograms.Healthcare;
        relevantClubPaths = clubProgressions.STEM; // Healthcare students often benefit from STEM clubs
        relevantFieldResources = fieldResources.Healthcare;
    } else if (careerPath.includes("Technology")) {
        relevantSummerPrograms = summerPrograms.STEM;
        relevantClubPaths = clubProgressions.STEM;
        relevantFieldResources = fieldResources.Technology;
    } else {
        // Default resources if no specific match
        relevantSummerPrograms = summerPrograms.STEM;
        relevantClubPaths = clubProgressions.Leadership;
        relevantFieldResources = fieldResources.STEM;
    }

    const roadmap = {
        "Freshman Year": {
            "Academic": [
                "Take challenging core classes",
                "Maintain strong GPA (aim for 3.8+)",
                isIvyLeagueTrack ? "Take 1-2 AP/Honors classes" : "Consider taking an AP/Honors class",
                "Start building strong study habits",
                "Keep detailed records of achievements"
            ],
            "Club Involvement": [
                "Join 2-3 clubs aligned with your interests",
                "Focus on active participation and learning",
                "Document all activities and achievements",
                "Attend club meetings regularly and volunteer for committees"
            ],
            "Resources": [
                relevantClubPaths,
                opportunityResources.volunteer
            ]
        },
        "Summer After Freshman Year": {
            "Recommended Activities": [
                "Attend introductory summer programs",
                "Start standardized test prep",
                "Volunteer in your field of interest",
                "Develop relevant skills through online courses"
            ],
            "Resources": [
                relevantSummerPrograms,
                resources.satPrep,
                opportunityResources.volunteer
            ]
        },
        "Sophomore Year": {
            "Academic": [
                isIvyLeagueTrack ? "Take 2-3 AP/Honors classes" : "Take 1-2 AP/Honors classes",
                "Maintain high GPA",
                "Take PSAT for practice",
                "Start SAT/ACT preparation"
            ],
            "Club Leadership": [
                "Take on committee roles in your main clubs",
                "Start leading small projects or initiatives",
                "Document leadership experiences",
                "Mentor new club members"
            ],
            "Resources": [
                relevantClubPaths,
                resources.satPrep,
                opportunityResources.competitions
            ]
        },
        "Summer After Sophomore Year": {
            "Recommended Programs": [
                "Apply to selective summer programs in your field",
                "Gain relevant work or volunteer experience",
                "Start a personal project",
                "Continue test prep"
            ],
            "Resources": [
                relevantSummerPrograms,
                relevantFieldResources,
                opportunityResources.internships
            ].filter(Boolean) // Filter out any undefined resources
        },
        "Junior Year": {
            "Academic": [
                isIvyLeagueTrack ? "Take 4-5 AP classes" : "Take 2-3 AP classes",
                "Take SAT/ACT (multiple times if needed)",
                "Maintain excellent grades",
                "Consider subject-specific competitions"
            ],
            "Leadership": [
                "Run for officer positions in your clubs",
                "Lead major club initiatives or projects",
                "Organize events or competitions",
                "Build strong relationships with club advisors"
            ],
            "Resources": [
                relevantClubPaths,
                opportunityResources.competitions,
                resources.essays
            ]
        },
        "Summer After Junior Year": {
            "Recommended Programs": [
                "Attend prestigious summer programs in your field",
                "Secure relevant internships",
                "Complete significant projects",
                "Prepare college applications"
            ],
            "Resources": [
                relevantSummerPrograms,
                relevantFieldResources,
                resources.essays
            ].filter(Boolean)
        },
        "Senior Year": {
            "Leadership Legacy": [
                "Hold top leadership positions in clubs",
                "Mentor younger students",
                "Create sustainable club initiatives",
                "Document achievements for college applications"
            ],
            "College Applications": [
                "Submit early applications if applicable",
                "Complete regular decision applications",
                "Apply for scholarships",
                "Maintain strong grades and involvement"
            ],
            "Resources": [
                resources.essays,
                resources.scholarships
            ]
        }
    };

    return roadmap;
}

// Display club recommendations
function displayClubRecommendations(recommendations) {
    try {
        const clubsList = document.getElementById('clubs-list');
        if (!clubsList) {
            throw new Error('Clubs list container not found');
        }
        
        let html = '';
        
        recommendations.forEach(category => {
            html += `
                <div class="clubs-category">
                    <h4>${category.name || 'Unnamed Category'}</h4>
            `;
            
            if (category.explanation) {
                html += `<p class="category-explanation">${category.explanation}</p>`;
            }
            
            if (category.clubs && Array.isArray(category.clubs) && category.clubs.length > 0) {
                category.clubs.forEach(club => {
                    html += `
                        <div class="club-item">
                            <h5>${club.name}</h5>
                            ${club.description ? `<p class="club-description">${club.description}</p>` : ''}
                            ${club.url ? `<a href="${club.url}" class="club-link" target="_blank">Learn More</a>` : ''}
                        </div>
                    `;
                });
            } else if (clubs[category.name]) {
                clubs[category.name].forEach(club => {
                    html += `
                        <div class="club-item">
                            <h5>${club.name}</h5>
                            ${club.description ? `<p class="club-description">${club.description}</p>` : ''}
                            ${club.url ? `<a href="${club.url}" class="club-link" target="_blank">Learn More</a>` : ''}
                        </div>
                    `;
                });
            }
            
            html += '</div>';
        });
        
        clubsList.innerHTML = html;
    } catch (error) {
        console.error('Error displaying club recommendations:', error);
        throw error; // Propagate error to be handled by showResults
    }
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
                        ${items.filter(Boolean).map(resourceCategory => {
                            if (!resourceCategory) return '';
                            if (resourceCategory.paths) {
                                // Display club progression paths
                                return `
                                    <div class="resource-category">
                                        <h6>${resourceCategory.title}</h6>
                                        ${resourceCategory.paths.map(path => `
                                            <div class="club-progression">
                                                <h7>${path.club}</h7>
                                                <ul class="progression-list">
                                                    ${path.progression
                                                        .filter(prog => prog.year === year.split(' ')[0])
                                                        .map(prog => `
                                                            <li class="progression-item">
                                                                <span class="progression-goal">${prog.goal}</span>
                                                            </li>
                                                        `).join('')}
                                                </ul>
                                            </div>
                                        `).join('')}
                                    </div>
                                `;
                            } else if (resourceCategory.links) {
                                // Display regular resources
                                return `
                                    <div class="resource-category">
                                        <h6>${resourceCategory.title}</h6>
                                        <ul class="resource-links">
                                            ${resourceCategory.links.map(link => `
                                                <li>
                                                    <a href="${link.url}" target="_blank" class="resource-link">${link.name}</a>
                                                    ${link.description ? `
                                                        <p class="resource-description">
                                                            ${link.description}
                                                            ${link.yearRecommended ? `<br><strong>Best for:</strong> ${link.yearRecommended}` : ''}
                                                        </p>
                                                    ` : ''}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                `;
                            }
                            return '';
                        }).join('')}
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

// Function to download PDF
async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set font
    doc.setFont("helvetica");
    
    // Draw decorative header background
    doc.setFillColor(52, 152, 219, 0.1); // Light blue
    doc.rect(0, 0, 220, 40, "F");

    // Add logo
    const logoImg = document.querySelector('aspiradarkmode.png');
    if (logoImg) {
        try {
            // Create a temporary canvas to convert the image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = logoImg.naturalWidth;
            canvas.height = logoImg.naturalHeight;
            ctx.drawImage(logoImg, 0, 0);
            
            // Convert canvas to base64 and add to PDF
            const logoData = canvas.toDataURL('image/png');
            // Calculate dimensions to maintain aspect ratio
            const logoWidth = 80; // Width in PDF units (mm)
            const aspectRatio = logoImg.naturalHeight / logoImg.naturalWidth;
            const logoHeight = logoWidth * aspectRatio;
            
            // Center the logo horizontally
            const pageWidth = 210; // A4 width in mm
            const xPosition = (pageWidth - logoWidth) / 2;
            
            doc.addImage(logoData, 'PNG', xPosition, 5, logoWidth, logoHeight);
        } catch (error) {
            console.error('Error adding logo to PDF:', error);
        }
    }
    
    // Add title
    doc.setFontSize(24);
    doc.setTextColor(41, 128, 185); // Blue
    doc.setFont("helvetica", "bold");
    const title = "Aspira Roadmap";
    // Get the width of the text to center it
    const titleWidth = doc.getStringUnitWidth(title) * doc.getFontSize() / doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    doc.text(title, titleX, 35);
    
    // Reset font
    doc.setFont("helvetica", "normal");
    
    // Add subtitle with current date
    doc.setFontSize(12);
    doc.setTextColor(100);
    const date = new Date().toLocaleDateString();
    doc.text(`Generated on ${date}`, 20, 45);
    
    // Draw a road graphic
    function drawRoad(y) {
        // Road base
        doc.setFillColor(189, 195, 199); // Gray
        doc.rect(30, y, 150, 4, "F");
        
        // Road markings
        doc.setFillColor(255, 255, 255); // White
        for (let x = 30; x < 180; x += 10) {
            doc.rect(x, y + 1.5, 5, 1, "F");
        }
        
        // Draw small circles at start and end
        doc.setFillColor(46, 204, 113); // Green
        doc.circle(30, y + 2, 3, "F"); // Start circle
        doc.setFillColor(231, 76, 60); // Red
        doc.circle(180, y + 2, 3, "F"); // End circle
    }
    
    // Draw initial road
    drawRoad(55);
    
    // Add recommended clubs section
    doc.setFontSize(16);
    doc.setTextColor(41, 128, 185); // Blue
    doc.text("Recommended Clubs & Organizations", 20, 70);
    
    // Get recommended clubs
    const recommendations = await generateRecommendations();
    let yPos = 80;
    
    recommendations.forEach(category => {
        doc.setFontSize(14);
        doc.setTextColor(52, 73, 94); // Dark gray-blue
        doc.text(category.name || category, 25, yPos);
        yPos += 7;
        
        if (category.clubs) {
            category.clubs.forEach(club => {
                doc.setFontSize(12);
                doc.setTextColor(44, 62, 80); // Darker blue-gray
                doc.text(`• ${club.name}`, 30, yPos);
                yPos += 5;
                
                // Add description in smaller, gray text
                doc.setFontSize(10);
                doc.setTextColor(127, 140, 141); // Gray
                const descriptionLines = doc.splitTextToSize(club.description, 150);
                descriptionLines.forEach(line => {
                    doc.text(line, 35, yPos);
                    yPos += 4;
                });
                yPos += 2;
            });
        } else if (clubs[category]) {
            clubs[category].forEach(club => {
                doc.setFontSize(12);
                doc.setTextColor(44, 62, 80); // Darker blue-gray
                doc.text(`• ${club.name}`, 30, yPos);
                yPos += 5;
                
                // Add description in smaller, gray text
                doc.setFontSize(10);
                doc.setTextColor(127, 140, 141); // Gray
                const descriptionLines = doc.splitTextToSize(club.description, 150);
                descriptionLines.forEach(line => {
                    doc.text(line, 35, yPos);
                    yPos += 4;
                });
                yPos += 2;
            });
        }
        
        // Add explanation if available
        if (category.explanation) {
            doc.setFontSize(10);
            doc.setTextColor(52, 152, 219); // Blue
            const explanationLines = doc.splitTextToSize(category.explanation, 150);
            explanationLines.forEach(line => {
                doc.text(line, 30, yPos);
                yPos += 4;
            });
        }
        
        yPos += 5;
    });
    
    // Add roadmap section with new page and road graphic
    doc.addPage();
    drawRoad(35);
    yPos = 50;
    
    doc.setFontSize(16);
    doc.setTextColor(41, 128, 185); // Blue
    doc.text("4-Year Roadmap", 20, yPos);
    yPos += 10;
    
    // Get roadmap data
    const roadmap = generateRoadmap();
    
    // Add each year's information
    Object.entries(roadmap).forEach(([year, categories]) => {
        // Add new page if needed
        if (yPos > 250) {
            doc.addPage();
            drawRoad(35);
            yPos = 50;
        }
        
        // Year heading with custom color
        doc.setFontSize(14);
        doc.setTextColor(230, 126, 34); // Orange
        doc.text(year, 20, yPos);
        yPos += 7;
        
        Object.entries(categories).forEach(([category, items]) => {
            if (category !== "Resources") {
                doc.setFontSize(12);
                doc.setTextColor(52, 73, 94); // Dark gray-blue
                doc.text(category, 25, yPos);
                yPos += 5;
                
                if (Array.isArray(items)) {
                    items.forEach(item => {
                        const lines = doc.splitTextToSize(`• ${item}`, 170);
                        lines.forEach(line => {
                            doc.setFontSize(10);
                            doc.setTextColor(44, 62, 80); // Dark blue-gray
                            doc.text(line, 30, yPos);
                            yPos += 4;
                        });
                    });
                    yPos += 3;
                }
            }
        });
        yPos += 7;
    });
    
    // Add decorative footer
    doc.setFillColor(52, 152, 219, 0.1); // Light blue
    doc.rect(0, 270, 220, 30, "F");
    
    // Add footer text
    doc.setFontSize(10);
    doc.setTextColor(41, 128, 185); // Blue
    doc.text("Generated by Aspira", 20, 285);
    doc.setTextColor(127, 140, 141); // Gray
    doc.text("Your guide to academic success!", 20, 290);
    
    // Save the PDF
    doc.save("aspira-roadmap.pdf");
}