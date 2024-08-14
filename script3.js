let startTime, updatedTime, difference, tInterval;
let running = false;
const timeDisplay = document.getElementById('time-display');
const startPauseBtn = document.getElementById('start-pause-btn');
const resetBtn = document.getElementById('reset-btn');

// Start/Pause button event listener
startPauseBtn.addEventListener('click', function() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 10);
        startPauseBtn.textContent = 'Pause';
        resetBtn.disabled = false;
        running = true;
    } else {
        clearInterval(tInterval);
        startPauseBtn.textContent = 'Start';
        running = false;
    }
});

// Reset button event listener
resetBtn.addEventListener('click', function() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    timeDisplay.textContent = '00:00:00.00';
    startPauseBtn.textContent = 'Start';
    resetBtn.disabled = true;
});

// Update time function
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
