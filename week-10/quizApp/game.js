const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const category = document.getElementById("category");
const scoreBoardText = document.getElementById("scoreBoard");
const progressBarFull = document.getElementById("progressBarFull");
const userNameContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");
const quizBox = document.getElementById("quizBox");

let currentQuestion = {};
let acceptingAnsers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions;
let userName;

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

const getURL = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
     let category = urlParams.get("category");
     let difficulty = urlParams.get("difficulty");
     userName = urlParams.get("userId");
     if(!userName) {
        return window.location.assign("index.html");
     }
     updateUserName(userName);
     let url = `https://opentdb.com/api.php?amount=${MAX_QUESTIONS}&type=multiple`
     if(category != 'any' && category != null){
      url += `&category=${category}`;
     }
     if(difficulty != 'any' && difficulty != null){
      url += `&difficulty=${difficulty}`;
     }
     return url;
}

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    loader.classList.add('d-none');
    quizBox.classList.remove('d-none');
};

const updateUserName = (user) => {
    userNameContainer.innerText = user;
}

const getQuestions = async () => {
   let apiResponse = await fetch(getURL());
   let apiResponseJson = await apiResponse.json(); 
   questions =  apiResponseJson.results.map( quizData => {
        const formattedQuizData = {
            question : quizData.question
        };
        const answerChoices = [...quizData.incorrect_answers]
        formattedQuizData.answer = Math.floor(Math.random() * 3) + 1;
        answerChoices.splice(formattedQuizData.answer -1, 0, quizData.correct_answer);
        answerChoices.forEach((choice,index)=> {
            formattedQuizData["choice" + (index+1)] = choice;
        });
        formattedQuizData.category = quizData.category
        return formattedQuizData
   });
   startGame();
}

getNewQuestion = () => {
    if(availableQuestions.length ===0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("quizResult",`${userName}~${score}`);
        return window.location.assign("scores.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;
    category.innerHTML = currentQuestion.category;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex, 1);
    acceptingAnsers = true;
};


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnsers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        let classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
            updateScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000)
       
    })
});

updateScore = num => {
    score += num;
    scoreBoardText.innerText = score;
}

getQuestions();




