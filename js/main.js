const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#curruent-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

const GAME_TIME = 5;

const API_URL = "https://random-word-api.herokuapp.com/word?number=100";

let score = 0;
let words = ["banana", "key", "car", "javascript", "junghee"];
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

init();

// function init() {
//   const res = fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => (words = data));
// }

async function init() {
  const res = await fetch(API_URL);
  const data = await res.json();
  words = data.filter((item) => item.length < 7);
  isReady = true;
}

wordInput.addEventListener("input", (e) => {
  const typedText = e.target.value;
  const currentText = currentWord.innerHTML;
  if (typedText.toUpperCase() === currentText.toUpperCase() && isReady) {
    addScore();
    setNewWord();
  }
});

function gameover() {
  console.log("gameover");
  clearInterval(timeInterval);
  isPlaying = false;
  timeInterval = null;
  score = 0;
}

function countDown() {
  console.log(time);
  time = time - 1;
  timeDisplay.innerText = time;
  if (time === 0) gameover();
}

function setNewWord() {
  time = GAME_TIME;

  wordInput.value = "";
  messageDisplay.innerText = "NowPlaying!!";
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randomIndex];

  if (!isPlaying) {
    timeInterval = setInterval(countDown, 1000);
    isPlaying = true;
  }
}

function addScore() {
  score = score + 1;
  scoreDisplay.innerText = score;
}
