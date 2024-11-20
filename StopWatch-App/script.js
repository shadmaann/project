
let startTime = 0;
let updatedTime = 0;
let difference = 0;
let interval;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);

function start() {
    if (!isRunning) {
        startTime = new Date().getTime() - difference;
        interval = setInterval(updateDisplay, 100);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(interval);
        difference = new Date().getTime() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(interval);
    display.textContent = '00:00:00';
    difference = 0;
    isRunning = false;
    laps.innerHTML = '';  // Clear lap times
}

function lap() {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.textContent = `Lap ${++lapCount}: ${display.textContent}`;
        lapTime.classList.add('lap');
        laps.appendChild(lapTime);
    }
}

function updateDisplay() {
    updatedTime = new Date().getTime() - startTime;
    const time = new Date(updatedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
