let score = 0;
let current = 0;

const questions = [
  {
    img: "imagens/banho.jpg",
    question: "Você vai tomar banho. O que faz?",
    options: [
      { text: "Banho de 20 minutos 🚿", value: -1 },
      { text: "Banho de 5 minutos ⏱️", value: 2 },
      { text: "Deixa água aberta", value: -2 }
    ]
  },
  {
    img: "imagens/tv.jpg",
    question: "A TV está ligada sem ninguém assistindo.",
    options: [
      { text: "Deixa ligada 📺", value: -2 },
      { text: "Desliga 🔌", value: 2 },
      { text: "Modo econômico 🌙", value: 1 }
    ]
  },
  {
    img: "imagens/dentes.jpg",
    question: "Escovando os dentes:",
    options: [
      { text: "Água aberta 💧", value: -2 },
      { text: "Fecha torneira", value: 2 },
      { text: "Usa copo", value: 2 }
    ]
  },
  {
    img: "imagens/clima.jpg",
    question: "Dia quente em casa:",
    options: [
      { text: "Ar-condicionado 24h ⚡", value: -2 },
      { text: "Ventilação natural", value: 2 },
      { text: "Ventilador o dia todo", value: 1 }
    ]
  }
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("img").src = q.img;
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  document.getElementById("feedback").innerText = "";

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt.text;

    div.onclick = () => {
      score += opt.value;
      document.getElementById("score").innerText = score;

      if (opt.value > 0) {
        document.getElementById("feedback").innerText = "🌱 Boa escolha!";
      } else {
        document.getElementById("feedback").innerText = "⚠️ Tente economizar mais!";
      }
    };

    optionsDiv.appendChild(div);
  });
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    document.querySelector(".card").innerHTML =
      `<h2>🎉 Fim do jogo!</h2><p>Pontuação final: ${score}</p>`;
    return;
  }

  loadQuestion();
}

loadQuestion();
