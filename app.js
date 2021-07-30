const topCard = document.querySelectorAll(".top");
const topNext = document.querySelectorAll(".topNext");
const bottom = document.querySelectorAll(".bottom");
const bottomNext = document.querySelectorAll(".bottomNext");
const topShadow = document.querySelectorAll(".topShadow");
const bottomShadow = document.querySelectorAll(".bottomShadow");
let minTim = parseInt(bottom[3].innerText) + parseInt(bottom[2].innerText * 60) - 1;
let hTim = parseInt(bottom[3].innerText) + parseInt(bottom[2].innerText * 60) + parseInt(bottom[1].innerText * 3600) - 1;

const flipCard = async (index, number) => {
  topCard[index].classList.add("topAnimation");
  topNext[index].classList.add("topNextAnimation", "visibility");
  bottomNext[indexCheck(index)].classList.add("visibility");
  // SHADOWS BELOW
  bottomShadow[index].classList.add("shadowBottom");
  topShadow[index].classList.add("shadowTop", "visibility");
  setTimeout(() => {
    changeValueMinSec(index, number);
    reset(index);
  }, 950);
};

const changeValueMinSec = async (index, number) => {
  if (bottom[indexCheck(index)].innerText === "0") {
    topCard[index].innerText = number; // number
    bottom[indexCheck(index)].innerText = number;
    bottomShadow[index].innerText = number;
    topNext[index].innerText = number - 1; // number - 1
    bottomNext[indexCheck(index)].innerText = number - 1;
    topShadow[index].innerText = number - 1;
  } else if (bottom[indexCheck(index)].innerText === "1") {
    topCard[index].innerText = 0;
    bottom[indexCheck(index)].innerText = 0;
    bottomShadow[index].innerText = 0;
    topNext[index].innerText = number; // number
    bottomNext[indexCheck(index)].innerText = number;
    topShadow[index].innerText = number;
  } else {
    topCard[index].innerText = parseInt(topCard[index].innerText - 1);
    bottom[indexCheck(index)].innerText = parseInt(bottom[indexCheck(index)].innerText - 1);
    bottomShadow[index].innerText = parseInt(bottomShadow[index].innerText - 1);
    topNext[index].innerText = parseInt(topNext[index].innerText - 1);
    bottomNext[indexCheck(index)].innerText = parseInt(bottomNext[indexCheck(index)].innerText - 1);
    topShadow[index].innerText = parseInt(topShadow[index].innerText - 1);
  }
};
const indexCheck = (index) => {
  if (index === 0) {
    return 0;
  } else {
    return index * 2;
  }
};

const reset = async (index) => {
  topCard[index].classList.remove("topAnimation");
  topNext[index].classList.remove("topNextAnimation", "visibility");
  bottomNext[indexCheck(index)].classList.remove("visibility");
  // SHADOWS BELOW
  bottomShadow[index].classList.remove("shadowBottom");
  topShadow[index].classList.remove("shadowTop", "visibility");
};

const initialize = async () => {
  flipCard(3, 59);
  if (bottom[6].innerText === "1") {
    flipCard(2, 59);
  }
  if (minTim === 0) {
    flipCard(1, 23);
    minTim = 3600;
  }
  if (hTim === 0) {
    flipCard(0, 8);
    hTim = 86400;
  }
  minTim--;
  hTim--;
};

// this sets off the timer
let time = setInterval(initialize, 1000);

function stopTime() {
  clearInterval(time);
}
