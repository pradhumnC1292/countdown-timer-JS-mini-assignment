let timerInterval;
let totalTimeInSeconds;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const message = document.getElementById("message");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  if (
    isNaN(minutes) ||
    isNaN(seconds) ||
    minutes < 0 ||
    seconds < 0 ||
    seconds > 59
  ) {
    message.textContent = "Please enter a valid time in MM:SS";
    return;
  }

  totalTimeInSeconds = minutes * 60 + seconds;

  if (totalTimeInSeconds <= 0) {
    message.textContent = "Please enter a valid time in MM:SS";
    return;
  }

  message.textContent = "";
  timerInterval = setInterval(countdown, 1000);
  startButton.disabled = true;
}

function countdown() {
  if (totalTimeInSeconds <= 0) {
    clearInterval(timerInterval);
    message.textContent = "Time is up!";
    startButton.disabled = false;
    return;
  }

  totalTimeInSeconds--;

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  minutesInput.value = String(minutes).padStart(2, "0");
  secondsInput.value = String(seconds).padStart(2, "0");
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  minutesInput.value = "00";
  secondsInput.value = "00";
  message.textContent = "Please enter a valid time in MM:SS";
}
