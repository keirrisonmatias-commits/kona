let score = 0;
let current = 0;

const questions = [
  {
    question: "Você vai tomar banho. O que faz?",
    options: [
      { text: "Banho de 20 minutos 🚿", value: -1 },
      { text: "Banho de 5 minutos 🚿⏱️", value: 2 },
      { text: "Deixa água correndo", value: -2 }
    ]
  },
  {
    question: "A TV está ligada sem ninguém assistindo. O que faz?",
    options: [
      { text: "Deixa ligada 📺", value: -2 },
      { text: "Desliga a TV 🔌", value: 2 },
      { text: "Coloca modo economia 🌙", value: 1 }
    ]
  },
  {
    question: "Vai escovar os dentes?",
    options: [
      { text: "Deixa a torneira aberta 💧", value: -2 },
      { text: "Fecha a torneira enquanto escova", value: 2 },
      { text: "Usa copo de água", value: 2 }
    ]
  },
  {
    question: "Dia quente em casa:",
    options: [
      { text: "Ar-condicionado 24h ⚡", value: -2 },
      { text: "Abre janelas e usa ventilação natural", value: 2 },
      { text: "Liga ventilador o dia todo", value: 1 }
    ]
  }
];

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.value);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(value) {
  score += value;
  document.getElementById("score").innerText = score;
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    document.getElementById("game-box").innerHTML =
      `<h2>🎉 Fim do jogo!</h2><p>Sua pontuação final foi: <strong>${score}</strong></p>`;
    return;
  }

  loadQuestion();
}

// inicia o jogo
loadQuestion();
