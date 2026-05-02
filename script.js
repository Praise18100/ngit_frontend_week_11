const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Style Sheets",
    b: "Cascading Style Sheets",
    c: "Creative Style System",
    d: "Colorful Style Sheets",
    correct: "b",
  },
  {
    question: "Which is used for web structure?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Python",
    correct: "a",
  },
  {
    question: "Which JavaScript library is used for building user interfaces?",
    a: "Angular",
    b: "Vue",
    c: "React",
    d: "Django",
    correct: "c",
  },
  {
    question:
      "Which framework is built on top of React for server-side rendering?",
    a: "Laravel",
    b: "Next.js",
    c: "Flask",
    d: "Spring",
    correct: "b",
  },
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("next");
const feedbackEl = document.getElementById("feedback");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("scoreText");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  if (currentQuiz >= quizData.length) {
    showResult();
    return;
  }

  const currentData = quizData[currentQuiz];

  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;

  feedbackEl.innerText = "";
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((el) => {
    el.checked = false;
  });
}

nextBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (!answer) {
    alert("Please select an answer before continuing!");
    return;
  }

  if (answer === quizData[currentQuiz].correct) {
    feedbackEl.innerText = "Correct! Well done.";
    feedbackEl.className = "correct";
    score++;
  } else {
    feedbackEl.innerText = "Wrong answer.";
    feedbackEl.className = "incorrect";
  }

  currentQuiz++;

  setTimeout(() => {
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  }, 800);
});

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("scoreText").innerText =
    `You scored ${score} out of ${quizData.length}!`;
}

function restartQuiz() {
  currentQuiz = 0;
  score = 0;

  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");

  loadQuiz();
}