const topAnim = document.querySelectorAll(".top");
const bottomAnim = document.querySelectorAll(".topNext");
const topC = document.querySelectorAll(".bottom");
const bottomC = document.querySelectorAll(".bottomNext");
const placeholder = document.querySelectorAll(".placeholder");

const changeSeconds = async () => {
  topAnim[3].classList.add("topAnimation");
  bottomAnim[3].classList.add("topNextAnimation");
  setTimeout(() => {
    placeholder[3].classList.add("putOnTop");
    placeholder[0].classList.add("putOnTop");
    placeholder[0].innerText = "0";
  }, 1000);
};

const changeValSeconds = () => {
  return parseInt((topAnim[3].value = topAnim[3].value - 1));
};

changeSeconds();
