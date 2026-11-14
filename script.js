const questionElement = document.querySelector(".question");
const answersElement = document.querySelector("#answers");
const nextButton = document.querySelector("#next-question");
const resultElement = document.querySelector("#result");

console.log("Koppling till HTML är klar");

const questions = [
  {
    question: "Vad heter huvudstaden i Sverige?",
    answers: ["Göteborg", "Stockholm", "Malmö"],
    correctAnswer: "Stockholm",
  },
  {
    question: "Vilken är Sveriges största sjö?",
    answers: ["Vänern", "Vättern", "Mälaren"],
    correctAnswer: "Vänern",
  },
  {
    question: "Vilket är Sveriges nationaldjur?",
    answers: ["Varg", "Björn", "Älg"],
    correctAnswer: "Älg",
  }
];

let currentQuestionIndex = 0;
let score = 0;

console.log("Frågorna har laddats in");

nextButton.disabled = true;

function showQuestion() {
  answersElement.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  console.log("Visar en ny fråga på skärmen");

  nextButton.disabled = true;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");

    button.addEventListener("click", () => {
      console.log("Användaren klickade på ett svar");

      nextButton.disabled = false;

      if (answer === currentQuestion.correctAnswer) {
        score++;
        console.log("Svaret var rätt!");
      } else {
        console.log("Svaret var fel!");
      }
    });

    answersElement.appendChild(button);
  });
}

nextButton.addEventListener("click", () => {
  console.log("Användaren klickade på nästa-knappen");

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    console.log("Quizet är slut, visar resultat");

    questionElement.textContent = "Quizet är klart!";
    answersElement.innerHTML = "";

    resultElement.textContent = `Du fick ${score} av ${questions.length} rätt!`;
    resultElement.classList.remove("hide");

    nextButton.style.display = "none";
  }
});

showQuestion();