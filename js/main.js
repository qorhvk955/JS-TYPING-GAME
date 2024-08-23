const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#curruent-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

let score = 0;
let words = ["banana", "key", "car", "javascript", "junghee"];

wordInput.addEventListener("input", (e) => {
  const typedText = e.target.value;
  const currentText = currentWord.innerHTML;
  if (typedText.toUpperCase() === currentText.toUpperCase()) {
    addScore();
    setNewWord();
  }
});

function setNewWord() {
  wordInput.value = "";
  messageDisplay.innerText = "NowPlaying!!";
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randomIndex];
}

function addScore() {
  score = score + 1;
  scoreDisplay.innerText = score;
}
