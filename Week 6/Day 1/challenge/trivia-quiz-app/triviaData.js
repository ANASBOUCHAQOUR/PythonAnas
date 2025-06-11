const triviaQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "Which country is home to the kangaroo?", answer: "Australia" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
    { question: "Which element has the chemical symbol 'O'?", answer: "Oxygen" }
];

let currentQuestionIndex = 0;
let score = 0;

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
}

const getCurrentQuestion = () => triviaQuestions[currentQuestionIndex];
const isQuizOver = () => currentQuestionIndex >= triviaQuestions.length;
const getCurrentIndex = () => currentQuestionIndex;
const incrementQuestion = () => currentQuestionIndex++;
const getScore = () => score;
const incrementScore = () => score++;

export {
    triviaQuestions,
    getCurrentQuestion,
    isQuizOver,
    currentQuestionIndex as currentQuestionIndex,
    incrementQuestion,
    getScore,
    incrementScore,
    resetQuiz,
};
  