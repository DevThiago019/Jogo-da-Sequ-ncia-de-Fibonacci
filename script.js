const levels = [
    [1, 1, 2, 3, 5],
    [3, 5, 8, 13, 21],
    [8, 13, 21, 34, 55],
    [13, 21, 34, 55, 89],
    [21, 34, 55, 89, 144]
  ];
  let currentLevel = 0;
  
  function loadLevel() {
    document.getElementById("level").innerText = `Nível: ${currentLevel + 1}`;
    document.getElementById("sequence").innerText = `Sequência: ${levels[currentLevel].slice(0, -1).join(", ")}`;
    document.getElementById("answer").value = "";
    document.getElementById("message").innerText = "";
    document.body.style.backgroundColor = "#fff";
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correctAnswer = levels[currentLevel][levels[currentLevel].length - 1];
    const messageElement = document.getElementById("message");
  
    if (userAnswer === correctAnswer) {
      document.body.classList.add("correct");
      messageElement.innerText = "Parabéns! Você subiu para o próximo nível!";
      setTimeout(() => {
        document.body.classList.remove("correct");
        currentLevel++;
        if (currentLevel < levels.length) {
          loadLevel();
        } else {
          messageElement.innerText = "Você completou todos os níveis! Parabéns!";
        }
      }, 1500);
    } else {
      document.body.classList.add("wrong");
      messageElement.innerText = "Tente novamente!";
      setTimeout(() => {
        document.body.classList.remove("wrong");
        messageElement.innerText = "";
      }, 1500);
    }
  }  
  
  // Carrega o primeiro nível ao iniciar
  loadLevel();
  