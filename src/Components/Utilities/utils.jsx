export let delay = 200;
export const PRIMARY_COLOR = "rgb(27, 216, 234)";
export const FINAL_COLOR = "rgb(15, 245, 70)";
export const POSITION_FINAL_COLOR = "rgb(183, 51, 245)";
export const COMPARE_COLOR = "blue";
export const SWAP_COLOR = "red";
export const MIN_COLOR = "rgb(255, 112, 31)";

export function randomNumberFrom(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}

export function changeDelay(val) {
  delay = val;
}

export function MakeDelay(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

export function disableAllButtons(bool) {
  document.getElementById("rangeSlider").disabled = bool;

  let btns = document.querySelectorAll(".btn");

  for (let i = 0; i < btns.length; i++) btns[i].disabled = bool;
}

export function Swap(x, y) {
  const temp = x.style.height;
  x.style.height = y.style.height;
  y.style.height = temp;
}
