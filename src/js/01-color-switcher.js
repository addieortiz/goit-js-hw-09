const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerID = null;

startBtn.disabled = false;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

startBtn.addEventListener('click', onStart);

function onStop() {
  clearInterval(timerID);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

stopBtn.addEventListener('click', onStop);
