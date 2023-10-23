
// Define your questions and answers
const questions = [
  { question: "Name the popoular JavaScript library used mainly for DOM Manipulation?", answer: "jQuery" },
  { question: "What does HTML stand for?", answer: "Hyper Text Markup Language" },
  { question: "A Javascript data type that represents a true or false value is called a what?", answer: "Boolean" },
  { question: "In order to target specific HTML elements in CSS you use...?", answer: "Selectors" },
  { question: "The open-source front-end framework for web development designed by Twitter is named what?", answer: "Bootstrap" },
  // Add more questions here
];

for (let i = 0; i < questions.length; i++) {
  const question = questions[i].question;
  const answer = questions[i].answer;
  
  // Do something with the question and answer, for example:
  console.log(`Question ${i + 1}: ${question}`);
  console.log(`Answer ${i + 1}: ${answer}`);
}
// Other variables
let score = 0; // Player's score
let timeLeft = 60; // Initial time limit

function startQuiz() {
  // Start the timer
  const timer = setInterval(function () {
    timeLeft--;
    if (timeLeft <= 0) {
      endGame();
      clearInterval(timer);
    }
  }, 1000);

  // Show the first question
  showQuestion(0);
}

function showQuestion(questionIndex) {
  const currentQuestion = questions[questionIndex];
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = ''; // Clear the container if there are any previous questions

  // Display the question to the user
  const questionElement = document.createElement('p');
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);

  // Create an input field for the user to answer
  const answerInput = document.createElement('input');
  answerInput.type = 'text'; // You can change the input type as needed
  answerInput.placeholder = 'Your answer';
  questionContainer.appendChild(answerInput);

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  questionContainer.appendChild(submitButton);

  // Add an event listener to the submit button
  submitButton.addEventListener('click', function () {
    // Get the user's answer from the input field
    const userAnswer = answerInput.value;

    // Check if the user's answer is correct
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      score++; // Increase the score for a correct answer
      document.getElementById('score').textContent = score;
    } else {
      timeLeft -= 10; // Subtract time for an incorrect answer
    }

    // Show the next question or end the game
    if (questionIndex < questions.length - 1) {
      showQuestion(questionIndex + 1);
    } else {
      endGame();
    }
  });
}

function endGame() {
  // Display the final score
  // Allow the user to save initials and score
  saveScore();
}

function saveScore() {
  // Implement a way to save the player's initials and score
}

// Start the quiz when the start button is clicked
document.getElementById('start-button').addEventListener('click', startQuiz);