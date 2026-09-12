const questions = [
    {
        question: "Which HTTP method is commonly used to update an existing resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 2,
        explanation: "PUT is commonly used to update or replace an existing resource."
    },
    {
        question: "What does CRUD stand for?",
        options: [
            "Create, Read, Update, Delete",
            "Copy, Run, Update, Deploy",
            "Create, Run, Upload, Download",
            "Connect, Read, Use, Delete"
        ],
        answer: 0,
        explanation: "CRUD represents the four basic operations performed on persistent data: Create, Read, Update, and Delete."
    },
    {
        question: "Which database concept uniquely identifies a row?",
        options: ["Foreign Key", "Primary Key", "Index", "Constraint"],
        answer: 1,
        explanation: "A primary key uniquely identifies each row in a relational database table."
    },
    {
        question: "Which Git command downloads a repository for the first time?",
        options: ["git push", "git merge", "git clone", "git commit"],
        answer: 2,
        explanation: "git clone creates a local copy of a remote repository."
    },
    {
        question: "Which environment variable file is commonly used for configuration secrets?",
        options: [".config", ".settings", ".secret", ".env"],
        answer: 3,
        explanation: "A .env file is commonly used to store environment-specific configuration such as API keys and database credentials. It should normally not be committed when it contains secrets."
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0,
        explanation: "HTML stands for HyperText Markup Language and is used to structure content on the web."
    },
    {
        question: "Which database is NoSQL?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        answer: 2,
        explanation: "MongoDB is a NoSQL document-oriented database."
    },
    {
        question: "Which object stores data only for the duration of a browser session?",
        options: ["localStorage", "sessionStorage", "temporaryStorage", "cacheStorage"],
        answer: 1,
        explanation: "sessionStorage stores data for a page session and is generally cleared when the browser tab or session ends."
    },
    {
        question: "Which tool is primarily used for version control?",
        options: ["Git", "npm", "Docker", "Postman"],
        answer: 0,
        explanation: "Git is a distributed version control system used to track changes in source code."
    },
    {
        question: "What does CORS stand for?",
        options: [
            "Cross-Origin Resource Sharing",
            "Cross-Origin Request Security",
            "Client-Origin Resource System",
            "Cross-Object Request Sharing"
        ],
        answer: 0,
        explanation: "CORS stands for Cross-Origin Resource Sharing. It defines how browsers allow web pages to request resources from another origin."
    },
    {
        question: "Which storage mechanism is available in the browser?",
        options: ["localStorage", "serverStorage", "databaseStorage", "nodeStorage"],
        answer: 0,
        explanation: "localStorage is a browser storage mechanism that persists data across browser sessions until it is explicitly cleared."
    },
    {
        question: "What does HTTPS provide?",
        options: [
            "Faster JavaScript",
            "Encrypted communication",
            "Database storage",
            "CSS optimization"
        ],
        answer: 1,
        explanation: "HTTPS uses TLS to encrypt communication between the client and server."
    },
    {
        question: "What does SSR stand for?",
        options: [
            "Server-Side Rendering",
            "Secure Server Routing",
            "Static Server Response",
            "Server Storage Rendering"
        ],
        answer: 0,
        explanation: "SSR stands for Server-Side Rendering, where HTML is generated on the server before being sent to the client."
    },
    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.toObject()",
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()"
        ],
        answer: 1,
        explanation: "JSON.parse() converts a JSON-formatted string into a JavaScript value, commonly an object."
    },
    {
        question: "Which technology is commonly used to build interactive user interfaces?",
        options: ["React", "SQL", "Git", "Nginx"],
        answer: 0,
        explanation: "React is a JavaScript library commonly used to build interactive user interfaces."
    },
    {
        question: "Which HTTP status code is most appropriate when a request is valid but violates a business rule such as insufficient account balance?",
        options: ["200", "201", "400", "409"],
        answer: 3,
        explanation: "409 Conflict can be used when the request conflicts with the current state of the resource, such as a business rule conflict. Some APIs may use 422 for similar domain validation cases."
    },
    {
        question: 'Which HTTP status code means "Not Found"?',
        options: ["200", "301", "404", "500"],
        answer: 2,
        explanation: "HTTP 404 Not Found indicates that the requested resource could not be found."
    },
    {
        question: "Which HTTP method is commonly used to create a new resource in a REST API?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 1,
        explanation: "POST is commonly used to submit data to a resource and create a new resource."
    },
    {
        question: "An API returns HTTP status 500. What does it usually mean?",
        options: [
            "Successful request",
            "Client-side error",
            "Server-side error",
            "Page not found"
        ],
        answer: 2,
        explanation: "HTTP 500 Internal Server Error generally indicates an unexpected problem on the server."
    },
    {
        question: "What is the primary purpose of tokenization?",
        options: [
            "Increase database size",
            "Replace sensitive data with secure tokens",
            "Improve internet speed",
            "Compress files"
        ],
        answer: 1,
        explanation: "Tokenization replaces sensitive data with tokens that can be used in its place, reducing direct exposure of the original data."
    },
    {
        question: "Which file is commonly used to store environment variables like API keys and database credentials?",
        options: [".html", ".env", ".css", ".json"],
        answer: 1,
        explanation: "The .env file is commonly used for environment variables such as API keys and database credentials."
    },
    {
        question: "Which storage is generally cleared when the browser tab/session ends?",
        options: ["localStorage", "Cookies always", "Database", "sessionStorage"],
        answer: 3,
        explanation: "sessionStorage is associated with a page session and is generally cleared when that session ends."
    },
    {
        question: "Which HTTP method is generally idempotent?",
        options: ["POST", "PUT", "CONNECT", "PATCH"],
        answer: 1,
        explanation: "PUT is defined as idempotent: repeating the same request should have the same intended effect as making it once."
    },
    {
        question: "If an API returns 500, where should you primarily investigate?",
        options: ["Server/backend", "CSS", "Browser font", "HTML headings"],
        answer: 0,
        explanation: "A 500 status indicates a server-side error, so the backend, server logs, dependencies, or infrastructure are the primary places to investigate."
    },
    {
        question: "A user submits a login form. What should normally happen first?",
        options: [
            "The browser sends the form data for processing",
            "CSS creates a database",
            "HTML becomes JavaScript",
            "The monitor sends the data"
        ],
        answer: 0,
        explanation: "After the user submits the form, the client normally sends the submitted data to the appropriate server endpoint for authentication processing."
    },
    {
        question: "A React/Angular/Vue application changes data but the UI doesn't update. Which issue is most logically worth investigating first?",
        options: [
            "Whether state/data was updated in a way the framework detects",
            "Whether the monitor is connected",
            "Whether HTML supports JavaScript",
            "Whether the database uses SQL"
        ],
        answer: 0,
        explanation: "Reactive frameworks depend on state or data changes being performed in ways the framework can detect and render."
    },
    {
        question: "Why shouldn't you trust frontend validation alone?",
        options: [
            "Frontend can be bypassed",
            "CSS can be disabled",
            "HTML cannot contain forms",
            "Browsers don't support validation"
        ],
        answer: 0,
        explanation: "Client-side validation can be bypassed or manipulated, so important validation must also be performed on the server."
    },
    {
        question: "A frontend sends a request to /api/users/10. Which HTTP status code most appropriately indicates that the user doesn't exist?",
        options: ["200", "500", "201", "404"],
        answer: 3,
        explanation: "HTTP 404 Not Found is appropriate when the requested user resource does not exist."
    },
    {
        question: "If an API returns 200 but the UI shows nothing, what should you investigate first?",
        options: [
            "Frontend response handling/data mapping",
            "Monitor brightness",
            "CSS comments only",
            "Domain registration"
        ],
        answer: 0,
        explanation: "If the API returns 200, inspect the frontend response handling, data mapping, state update, and rendering logic."
    },
    {
        question: "Why is caching useful?",
        options: [
            "It can reduce repeated network requests and improve response time",
            "It always increases server load",
            "It removes authentication",
            "It converts HTTP to HTML"
        ],
        answer: 0,
        explanation: "Caching can reuse previously retrieved data or resources, reducing repeated network requests and improving performance."
    },
    {
        question: "A search box calls an API on every keystroke. What is the best optimization?",
        options: [
            "Increase image quality",
            "Debounce the API request",
            "Add more API calls",
            "Disable JavaScript"
        ],
        answer: 1,
        explanation: "Debouncing waits until the user pauses typing before sending the request, reducing unnecessary API calls."
    }
];

const questionCounter = document.getElementById("question-counter");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const checkButton = document.getElementById("check-btn");
const nextButton = document.getElementById("next-btn");

const quizCard = document.querySelector(".quiz-card");
const resultsCard = document.getElementById("results");
const finalScore = document.getElementById("final-score");
const finalPercentage = document.getElementById("final-percentage");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const restartButton = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;
let answered = false;
let selectedAnswer = null;

function renderQuestion() {
    const question = questions[currentQuestion];

    questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    scoreElement.textContent = `Score: ${score}`;

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressElement.style.width = `${progress}%`;

    questionTitle.textContent = question.question;
    answersContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer";
        button.dataset.index = index;
        button.setAttribute("role", "radio");
        button.setAttribute("aria-checked", "false");

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = String.fromCharCode(65 + index);

        button.append(letter, document.createTextNode(option));

        button.addEventListener("click", () => selectAnswer(button, index));

        answersContainer.appendChild(button);
    });

    feedbackElement.hidden = true;
    feedbackElement.className = "feedback";
    feedbackElement.innerHTML = "";

    checkButton.hidden = false;
    checkButton.disabled = true;

    nextButton.hidden = true;

    answered = false;
    selectedAnswer = null;
}

function selectAnswer(button, index) {
    if (answered) return;

    document.querySelectorAll(".answer").forEach((answer) => {
        answer.classList.remove("selected");
        answer.setAttribute("aria-checked", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-checked", "true");

    selectedAnswer = index;
    checkButton.disabled = false;
}

function checkAnswer() {
    if (selectedAnswer === null || answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const answerButtons = document.querySelectorAll(".answer");
    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) {
        score++;
    }

    answerButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.answer) {
            button.classList.add("correct");
        }

        if (index === selectedAnswer && index !== question.answer) {
            button.classList.add("incorrect");
        }
    });

    feedbackElement.hidden = false;
    feedbackElement.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;

    const title = isCorrect ? "✓ Correct!" : "✕ Incorrect";

    feedbackElement.innerHTML = `
        <span class="feedback-title">${title}</span>
        <span>${question.explanation}</span>
    `;

    scoreElement.textContent = `Score: ${score}`;

    checkButton.hidden = true;
    nextButton.hidden = false;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "See Results";
    }
}

function nextQuestion() {
    if (!answered) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        return;
    }

    showResults();
}

function showResults() {
    const incorrect = questions.length - score;
    const percentage = Math.round((score / questions.length) * 100);

    quizCard.hidden = true;
    resultsCard.hidden = false;

    finalScore.textContent = `${score} / ${questions.length}`;
    finalPercentage.textContent = `${percentage}%`;
    correctCount.textContent = score;
    incorrectCount.textContent = incorrect;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedAnswer = null;

    quizCard.hidden = false;
    resultsCard.hidden = true;

    renderQuestion();
}

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();
