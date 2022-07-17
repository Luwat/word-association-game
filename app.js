const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 2
    }, {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['nad', 'exotic'],
        correct: 2
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    },
]

let score = 0
let clicked = []

scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        
        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "$&"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })
        
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {

            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswer(questionButton, option, optionIndex + 1, question.correct))

            questionButtons.append(questionButton)
        })

        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    if (optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
    } else {
        score--
        scoreDisplay.textContent = score
    }

    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}