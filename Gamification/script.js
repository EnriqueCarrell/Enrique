let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "What is the main principle of gamification in communication?",
        options: ["Engagement", "Competition", "Rewards", "Feedback"],
        answer: "A"
    },
    {
        question: "Which of the following is NOT a common gamification element?",
        options: ["Points", "Badges", "Leaderboards", "Reports"],
        answer: "D"
  
    },
    {
        question: "What is the purpose of using gamification in communication?",
        options: ["To confuse the audience", "To decrease user participation", "To increase user engagement", "To limit communication"],
        answer: "C"
    },
    {
        question: "Which of the following is an example of gamification in social media?",
        options: ["Likes and shares", "Intrusive advertisements", "Spamming followers", "Ignoring comments"],
        answer: "A"
    },
    {
        question: "What motivates users to engage with gamified content?",
        options: ["Boredom", "Fear of punishment", "Lack of interest", "Desire for rewards"],
        answer: "D"
    },
    {
        question: "What is a common gamification strategy for increasing user participation?",
        options: ["Setting clear goals", "Hiding information", "Ignoring feedback", "Creating barriers"],
        answer: "A"
    },
    {
        question: "Which of the following is NOT a benefit of gamification in communication?",
        options: ["Increased engagement", "Decreased motivation", "Enhanced learning", "Improved retention"],
        answer: "B"
    },
    {
        question: "What role does feedback play in gamification?",
        options: ["It confuses users", "It discourages users from participating", "It provides guidance and encouragement", "It limits user interaction"],
        answer: "C"
    },
    {
        question: "What is the purpose of using badges in gamification?",
        options: ["To signify achievement", "To decrease user motivation", "To increase complexity", "To reduce engagement"],
        answer: "A"
    },
    {
        question: "Which of the following is NOT a characteristic of effective gamification?",
        options: ["Transparency", "Relevance", "Complexity", "Feedback"],
        answer: "C"
    },
    {
        question: "What is the term used to describe the process of applying game design principles to non-game contexts?",
        options: ["Simulation", "Gamification", "Gambling", "Competition"],
        answer: "B"
    },
    {
        question: "What motivates users to complete challenges in gamification?",
        options: ["Lack of interest", "Desire for achievement", "Fear of failure", "Indifference"],
        answer: "B"
    },
    {
        question: "Which of the following is an example of gamification in education?",
        options: ["Awarding badges for completing tasks", "Punishing students for mistakes", "Ignoring student progress", "Decreasing challenge levels"],
        answer: "A"
    },
    {
        question: "What is the purpose of using progress bars in gamification?",
        options: ["To discourage participation", "To confuse users", "To track user progress", "To limit engagement"],
        answer: "C"
    },
    {
        question: "Which of the following is NOT a common gamification technique?",
        options: ["Simplicity", "Feedback loops", "Social elements", "Rewards"],
        answer: "A"
    },
    {
        question: "What role does competition play in gamification?",
        options: ["It limits user interaction", "It discourages collaboration", "It motivates users to excel", "It decreases user engagement"],
        answer: "B"
    },
    {
        question: "What is the purpose of using levels in gamification?",
        options: ["To indicate progression", "To confuse users", "To decrease motivation", "To reduce engagement"],
        answer: "A"
    },
    {
        question: "Which of the following is NOT a benefit of gamification?",
        options: ["Increased motivation", "Decreased engagement", "Enhanced learning", "Improved retention"],
        answer: "B"
    },
    {
        question: "What motivates users to earn virtual rewards in gamification?",
        options: ["Boredom", "Fear of criticism", "Lack of interest", "Desire for recognition"],
        answer: "D"
    },
    {
        question: "What is a common gamification strategy for fostering user engagement?",
        options: ["Limiting feedback", "Avoiding interaction", "Providing challenges", "Increasing complexity"],
        answer: "C"
    }

];

function displayQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const resultContainer = document.getElementById('result');
    const currentQuestionObj = questions[currentQuestion];

    questionContainer.textContent = `${currentQuestion + 1}. ${currentQuestionObj.question}`;

    optionsContainer.innerHTML = '';
    currentQuestionObj.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        button.addEventListener('click', () => checkAnswer(String.fromCharCode(65 + index)));
        optionsContainer.appendChild(button);
    });

    resultContainer.textContent = '';
}

function checkAnswer(answer) {
    const currentQuestionObj = questions[currentQuestion];
    const resultContainer = document.getElementById('result');

    if (answer === currentQuestionObj.answer) {
        score++;
        resultContainer.textContent = 'Correct!';
    } else {
        resultContainer.textContent = 'Incorrect. Try again!';
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.createElement('div');
    const aboutLink = document.createElement('a');
    const restartButton = document.createElement('button');

    quizContainer.innerHTML = '';

    if (score === questions.length) {
        resultContainer.textContent = `Congratulations! You scored ${score} out of ${questions.length} questions. You're a gamification expert!`;
    } else {
        resultContainer.textContent = `You scored ${score} out of ${questions.length} questions.`;
    }

    aboutLink.textContent = "Learn more about Gamification";
    aboutLink.href = "https://api.macmillanenglish.com/fileadmin/user_upload/Blog_and_Resources/Blogs_and_articles/Macmillan-Education_Gamification.PDF";
    aboutLink.style.display = "block";
    aboutLink.style.marginTop = "20px";

    restartButton.textContent = "Reload the Page to Take The Quiz Again";
    restartButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        displayQuestion();
    });

    resultContainer.appendChild(restartButton);
    quizContainer.appendChild(resultContainer);
    quizContainer.appendChild(aboutLink);
}

// The rest of the JavaScript code remains the same...



displayQuestion();
