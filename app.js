const topAnim = document.querySelectorAll(".top");
const bottomAnim = document.querySelectorAll(".topNext");
const topC = document.querySelectorAll(".bottom");
const bottomC = document.querySelectorAll(".bottomNext");
const placeholder = document.querySelectorAll(".placeholder");

const flipCard = async (index) => {
  placeholder[index].classList.remove("putOnTop");
  topAnim[index].classList.add("topAnimation");
  bottomAnim[index].classList.add("topNextAnimation", "visibility");
  bottomC[index].classList.add("visibility");
  setTimeout(() => {
    placeholder[index].classList.add("putOnTop");
    placeholder[index].innerText = placeholder[index].innerText - 1;
    changeValue(index);
    reset(index);
  }, 950);
};

const changeValue = async (index) => {
  topAnim[index].innerText = parseInt(topAnim[index].innerText - 1);
  topC[index].innerText = parseInt(topC[index].innerText - 1);
  bottomAnim[index].innerText = parseInt(bottomAnim[index].innerText - 1);
  bottomC[index].innerText = parseInt(bottomC[index].innerText - 1);
};

const reset = async (index) => {
  topAnim[index].classList.remove("topAnimation");
  bottomAnim[index].classList.remove("topNextAnimation", "visibility");
  bottomC[index].classList.remove("visibility");
  placeholder[index].classList.remove("putOnTop");
};

const initialize = async () => {
  flipCard(3);
};

// this sets off the timer
let time = setInterval(initialize, 1000);

function stopTime() {
  clearInterval(time);
}

// ------------------------------------------- //
