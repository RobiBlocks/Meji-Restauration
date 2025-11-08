let questionNumber = 0;
let answers = [];

function newQuestion() {
  const question = quiz[questionNumber];

  document.querySelector("#question-number").innerText =
    "Frage: " + (questionNumber + 1);
  document.querySelector("#question").innerText = question.question;
  document.querySelector("#answer-a").innerText = question.answers[0];
  document.querySelector("#answer-b").innerText = question.answers[1];
  document.querySelector("#answer-c").innerText = question.answers[2];
  document.querySelector("#answer-d").innerText = question.answers[3];
}

function answer() {
  const input = document.querySelectorAll("#answers input");

  input.forEach((element) => {
    if (element.checked == true) {
      answers.push(element.value);
    }
  });

  questionNumber++;

  if (questionNumber === quiz.length) {
    evaluateAnswers();
  } else {
    newQuestion();
  }
}

function evaluateAnswers() {
  document.querySelector("#quiz-panel").style.display = "none";
  document.querySelector("#evaluation-panel").style.display = "flex";

  const parent = document.querySelector("#evaluation-panel div");

  for (let index = 0; index < quiz.length; index++) {
    let text = index + 1 + ") Die Frage war: " + quiz[index].question;
    const p = document.createElement("p");

    if (quiz[index].correct - 1 == answers[index]) {
      text += " Deine Anwort war richtig!";
      p.className = "correct";
    } else {
      text += " Deine Anwort war falsch!";
      p.className = "wrong";
    }
    text += " Die richtige Antwort ist: " + quiz[index].answers[quiz[index].correct - 1];
    
    p.innerText = text;
    parent.appendChild(p);
  }
}
