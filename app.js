const topAnim = document.querySelectorAll(".top");
const bottomAnim = document.querySelectorAll(".topNext");
const topC = document.querySelectorAll(".bottom");
const bottomC = document.querySelectorAll(".bottomNext");
const placeholder = document.querySelectorAll(".placeholder");
let minTim = parseInt(topC[3].innerText) + parseInt(topC[2].innerText * 60) - 1;
let hTim = parseInt(topC[3].innerText) + parseInt(topC[2].innerText * 60) + parseInt(topC[1].innerText * 3600) - 1;

const flipCard = async (index, number) => {
  topAnim[index].classList.add("topAnimation");
  bottomAnim[index].classList.add("topNextAnimation", "visibility");
  bottomC[index].classList.add("visibility");
  setTimeout(() => {
    changeValueMinSec(index, number);
    reset(index);
  }, 950);
};

const changeValueMinSec = async (index, number) => {
  if (topC[index].innerText === "0") {
    topAnim[index].innerText = number; // number
    topC[index].innerText = number;
    bottomAnim[index].innerText = number - 1; // number - 1
    bottomC[index].innerText = number - 1;
  } else if (topC[index].innerText === "1") {
    topAnim[index].innerText = 0;
    topC[index].innerText = 0;
    bottomAnim[index].innerText = number; // number
    bottomC[index].innerText = number;
  } else {
    topAnim[index].innerText = parseInt(topAnim[index].innerText - 1);
    topC[index].innerText = parseInt(topC[index].innerText - 1);
    bottomAnim[index].innerText = parseInt(bottomAnim[index].innerText - 1);
    bottomC[index].innerText = parseInt(bottomC[index].innerText - 1);
  }
};

const reset = async (index) => {
  topAnim[index].classList.remove("topAnimation");
  bottomAnim[index].classList.remove("topNextAnimation", "visibility");
  bottomC[index].classList.remove("visibility");
};

const initialize = async () => {
  flipCard(3, 59);
  if (topC[3].innerText === "1") {
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
