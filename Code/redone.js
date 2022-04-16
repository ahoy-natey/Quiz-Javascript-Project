var timer = document.querySelector(".timer")
var start = document.querySelector("#startButton")
var questionbox = document.querySelector("#questionbox")
var questionCardHead = document.querySelector(".questionClass")
var answerCardHead = document.querySelector(".button-blocks")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var target = btn1, btn2, btn3, btn4
var currentQIndex = 0;
var timeLeft = 60;
var score = timeLeft
var scoreData = localStorage.getItem('score')
var stage2 = document.querySelector(".scorearea")
var congrats = document.querySelector('.pg2banner')

var qandA = [
    {
        questions: 'What is your favorite cheese?',
        answers: ["Manchego", "Blue", "Cheddar", "Pizza"
        ],
        solution: 0
    },
    {
        questions: 'What is your favorite color?',
        answers: ["Blue", "Red", "Yellow", "Pink"
        ],
        solution: 1
    },
    {
        questions: 'What is your favorite movie?',
        answers: ["Cars", "Cars", "Cars", "Cars"],
        solution: 2

    },
    {
        questions: 'What is your favorite animal?',
        answers: ["Dog", "Cat", "Rat", "Hat"
        ],
        solution: 3
    }
]


// ---------------------------Code START------------------------------------------
// List of Tasks:
// 1. Fix document.body to be wrapper
// 2. Store to local storage, stop timer, score = timeLeft


start.addEventListener("click", startgame);



function time() {

    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft


        if (timeLeft === 0) {
            clearInterval(timeInterval);

        }

        if (currentQIndex > qandA.length - 1)
            clearInterval(timeInterval)

    }, 1000);

}


function startgame() {
    time();
    questionbox.classList.remove('hide');
    displayQuestionAnswer();
    start.style.display = "none"
}



// This function does not work
function displayQuestionAnswer() {
    console.log(currentQIndex)

    if (currentQIndex > qandA.length - 1) {

        return clearButton()
    }
    var question = qandA[currentQIndex]
    questionCardHead.textContent = question.questions
    buttonArray = []
    answerCardHead.innerHTML = ""


    for (i = 0; i < qandA[currentQIndex].answers.length; i++) {
        var button = document.createElement("button")
        button.textContent = qandA[currentQIndex].answers[i]
        button.setAttribute("data-index", i)
        buttonArray.push(button)
        console.log(buttonArray[i])
        answerCardHead.appendChild(buttonArray[i])
    }



};

function clearButton() {
    answerCardHead.innerHTML = ""
    stage2.classList.remove('hide')
    questionCardHead.classList.add('hide')




};
answerCardHead.addEventListener('click', function (event) {
    console.log(parseInt(event.target.getAttribute("data-index")) === qandA[currentQIndex].solution)
    if (parseInt(event.target.getAttribute("data-index")) === qandA[currentQIndex].solution) {


        currentQIndex++
        displayQuestionAnswer();
        console.log("Correct")

    }




    else {
        timeLeft -= 5
        currentQIndex++
        displayQuestionAnswer();
        console.log("incorrect")
    }


})



// CODE FOR INDEX2 BEGINS
var submit = document.querySelector(".submit")
var initialForm = document.querySelector(".initialform")
var finalscorelist = document.querySelector('.finalscorelist')
var initials = JSON.parse(localStorage.getItem('score')) || []
// JSON.stringify



var list = document.createElement("div");


submit.addEventListener("click", function (scoreData) {
    // console.log(initialForm.value)
    var userScore = [
        {
            initials: initialForm.value,
            score: timeLeft
        },
    ]

    console.log("Hello")

    userScore.push({initials: initialForm.value, score: timeLeft})
    localStorage.setItem('score', JSON.stringify(initials))
    console.log(userScore)
    console.log(localStorage.setItem('score', JSON.stringify(initials)))
    for (i = 0; i <= initials; i++) {
        finalscorelist.append(initials);
        console.log(userScore)
        console.log(localStorage.setItem('score', JSON.stringify(initials)))
        congrats.textContent=localStorage.setItem('score', JSON.stringify(initials))
    }
})