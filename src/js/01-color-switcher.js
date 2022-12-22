const refs = {
    body: document.body,
    btnStart: document.getElementById("data-start"),
    btnStop: document.getElementById("data-stop"),
}

const INTERVAL_DELAY = 1000;
let intervalId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', onBtnStop);



function changeColor() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, INTERVAL_DELAY);
    refs.btnStart.disabled = true;
};

function onBtnStop() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
}




