import React from "react";
import {
  randomNumberFrom,
  delay,
  MakeDelay,
  disableAllButtons,
  Swap,
  COMPARE_COLOR,
  SWAP_COLOR,
  PRIMARY_COLOR,
  POSITION_FINAL_COLOR,
  FINAL_COLOR,
  MIN_COLOR,
} from "../Utilities/utils";

let n;

function gap(g) {
  if (g <= 1) return 0;

  return parseInt(Math.ceil(g / 2.0));
}

async function inPlaceMerge(arr, s, e) {
  let g = gap(e - s + 1);

  for (let i = s; i <= e; i++) {
    await MakeDelay(20);
    arr[i].style.background = COMPARE_COLOR;
  }

  for (g; g > 0; g = gap(g)) {
    for (let i = s; i + g <= e; i++) {
      let j = i + g;
      arr[i].style.background = COMPARE_COLOR;
      arr[j].style.background = COMPARE_COLOR;
      await MakeDelay(delay);
      if (parseInt(arr[i].style.height) > parseInt(arr[j].style.height)) {
        arr[i].style.background = SWAP_COLOR;
        arr[j].style.background = SWAP_COLOR;
        await MakeDelay(delay);
        Swap(arr[i], arr[j]);
      }
      await MakeDelay(delay);
      if (e === n && s === 0) {
        arr[i].style.background = POSITION_FINAL_COLOR;
        arr[j].style.background = POSITION_FINAL_COLOR;
      } else {
        arr[j].style.background = PRIMARY_COLOR;
        arr[i].style.background = PRIMARY_COLOR;
      }
    }
  }
}

async function mergeSortHelper(arr, l, r) {
  if (l >= r) return;

  let mid = l + parseInt((r - l) / 2);

  await mergeSortHelper(arr, l, mid);
  await mergeSortHelper(arr, mid + 1, r);
  await inPlaceMerge(arr, l, r);

  return;
}

export async function mergeSort() {
  disableAllButtons(true);
  document.getElementById("msort").className = "btndisabled";

  let arr = document.querySelectorAll(".element-bar");

  n = arr.length;

  await mergeSortHelper(arr, 0, n - 1);

  for (let i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = FINAL_COLOR;
  }

  disableAllButtons(false);
  document.getElementById("msort").className = "btn";
}
