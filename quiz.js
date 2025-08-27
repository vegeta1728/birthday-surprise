const quizData = [
  {
    question: "Where did our first talk happen? 💬",
    options: ["In 'dare time'", "Basic Electronics Lab", "At garden", "Canteen"],
    correct: 1,
    prize: "😘 A kiss"
  },
  {
    question: "Where was our first cheek kiss? 😚",
    options: ["During a movie", "Pushpa 2 (with matching clothes 💕)", "At garden", "Canteen"],
    correct: 1,
    prize: "🤗 A hug"
  },
  {
    question: "Where was our first hug? 🫂",
    options: ["In 'dare time' (___ date)", "Civil–Electrical pathway", "At garden", "Canteen"],
    correct: 1,
    prize: "😘 + 🤗 Combo (Hug + Kiss)"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(choice) {
  const q = quizData[currentQuestion];
  const feedback = document.getElementById("feedback");

  if (choice === q.correct) {
    feedback.innerText = Correct! 🎉 Prize: ${q.prize};
    feedback.style.color = "green";
  } else {
    feedback.innerText = "Oops 😜 Wrong answer! Penalty: tickle + no escape!";
    feedback.style.color = "red";
  }
  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "🎊 Quiz Finished! You’re the best, Bachu ❤";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  }
}

window.onload = loadQuestion;