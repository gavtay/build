const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-stop-button');
const resetBtn = document.getElementById('reset-button');

let timerInterval;
let timerSeconds = 0;

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSeconds++;
        displayTime(timerSeconds);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    displayTime(timerSeconds);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
