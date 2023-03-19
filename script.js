//your code here
// Select the necessary elements from the DOM
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const timeDisplay = document.getElementById('time');

// Initialize the timer variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
// Disable pause and stop buttons initially
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
// Function to start the stopwatch
function start() {
	
  // Disable the start button and enable pause and stop buttons
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;

  // Start the timer
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    updateTime();
  }, 1000);
}

// Function to pause or continue the stopwatch
function pause() {
  // If the stopwatch is running, pause it and change the button text to "continue"
  if (interval) {
    clearInterval(interval);
    interval = null;
    pauseBtn.textContent = 'continue';
  } else { // If the stopwatch is paused, continue it and change the button text to "pause"
    start();
    pauseBtn.textContent = 'pause';
  }
}

// Function to stop the stopwatch
function stop() {
  // Reset the timer variables and update the time display
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTime();

  // Disable pause and stop buttons and enable start button
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  startBtn.disabled = false;

  // Stop the timer
  clearInterval(interval);
  interval = null;
  pauseBtn.textContent = 'pause';
}

// Function to update the time display
function updateTime() {
  // Format the time string as HH:MM:SS
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // Update the time display
  timeDisplay.textContent = timeString;
}

updateTime(); // call the updateTime function once to display the initial time

