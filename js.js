const minusButtonBr = document.getElementById("minusBr");
const plusButtonBr = document.getElementById("plusBr");
const inputBr = document.getElementById("inputLenghthBreak");

const minusButtonSes = document.getElementById("minusSes");
const plusButtonSes = document.getElementById("plusSes");
const inputSes = document.getElementById("inputLenghthSession");

const userInputSession = document.getElementById("inputSession");
const startTimer = document.getElementById("timerStart");

const timerBt = document.getElementById("timer");
const secondsTimer = document.getElementById("second");
const minutesTimer = document.getElementById("minutes");

const done = document.getElementById("done");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

const statusTimer = document.getElementById("status");
const changeMood = document.getElementsByClassName("changeMood");

let isInterval = false;
let isIntervalBr = false;
let isOnPlay = false;
let isOnBreak = false;
let min = 1;
let sec = 0;


// buttons + -
let inputBrValue = inputBr.innerHTML;
minusButtonBr.addEventListener("click", () => {
  // event.preventDefault();
  if (inputBrValue < 2) {
    const currentValue = Number(inputBrValue);
    inputBrValue = currentValue;
    inputBr.innerHTML = inputBrValue;
    userInputSession.innerHTML = inputBrValue;
  } else {
    const currentValue = Number(inputBrValue);
    inputBrValue = currentValue - 1;
    inputBr.innerHTML = inputBrValue;
    userInputSession.innerHTML = inputBrValue;
    reset();
  }
});

plusButtonBr.addEventListener("click", () => {
  // event.preventDefault();
  const currentValue = Number(inputBrValue);
  inputBrValue = currentValue + 1;
  inputBr.innerHTML = inputBrValue;
  userInputSession.innerHTML = inputBrValue;
  reset();
});

let inputSesValue = inputSes.innerHTML;
minusButtonSes.addEventListener("click", () => {
  // event.preventDefault();
  if (inputSesValue < 2) {
    const currentValue = Number(inputSesValue);
    inputSesValue = currentValue;
    inputSes.innerHTML = inputSesValue;
    userInputSession.innerHTML = inputSesValue;
  } else {
    const currentValue = Number(inputSesValue);
    inputSesValue = currentValue - 1;
    inputSes.innerHTML = inputSesValue;
    userInputSession.innerHTML = inputSesValue;
    reset();
  }
});

plusButtonSes.addEventListener("click", () => {
  // event.preventDefault();
  const currentValue = Number(inputSesValue);
  inputSesValue = currentValue + 1;
  inputSes.innerHTML = inputSesValue;
  userInputSession.innerHTML = inputSesValue;
  reset();
});

timerBt.addEventListener("click", () => {
  isOnPlay = true;
  if (!isInterval) {
    isInterval = true;
    min = inputSesValue;
    intervalTimer = setInterval(updateTimer, 1000);
  }
});

//TIMER
function updateTimer() {
  

  if (isOnPlay) {
    userInputSession.innerHTML = "";
    if (min >= 0 && sec >= 0) {
      sec = sec < 10 ? "0" + sec : sec;
      minutesTimer.innerHTML = `${min} : ${sec}`;
      sec -= 1;
      if (sec == -1) {
        sec = 59;
        min -= 1;
      }
    } else {
      isOnBreak = !isOnBreak;
      isOnBreak ? (min = inputBrValue) : (min = inputSesValue);
      if (isOnBreak) {
        min = inputBrValue;
        statusTimer.innerHTML = "BREAK";
        timerBt.classList.remove("btn-outline-danger");
        timerBt.classList.add("btn-outline-success");
        
  
        
      } else {
        min = inputSesValue;
        statusTimer.innerHTML = "SESSION";
        timerBt.classList.remove("btn-outline-success");
        timerBt.classList.add("btn-outline-danger");
      }
      sec = 0;
    }
  }
}

let startMinutes = inputSesValue;
let time = startMinutes * 60;

let startMinutesBr = inputBrValue;
let timeBr = startMinutesBr * 60;


pause.addEventListener("click", () => {
  isOnPlay = !isOnPlay;
});

restart.addEventListener("click", () => {
  reset();
});

function reset() {
  isOnPlay = false;
  minutesTimer.innerHTML = ``;
  userInputSession.innerHTML = inputSesValue
  isOnBreak = false;
  min = inputSesValue;
  sec = 0;
}
