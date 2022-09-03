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

// My Approch

// async function partition(arr, s, e) {
//   let pi = arr[e];

//   await MakeDelay(delay);

//   arr[e].style.background = MIN_COLOR; // Current pivot element

//   let i = s - 1;

//   for (let j = s; j <= e - 1; j++) {
//     arr[j].style.background = COMPARE_COLOR;

//     if (parseInt(arr[j].style.height) < parseInt(pi.style.height)) {
//       i++;
//       arr[i].style.background = COMPARE_COLOR;

//       await MakeDelay(delay);

//       Swap(arr[j], arr[i]);

//       await MakeDelay(delay);

//       arr[j].style.background = SWAP_COLOR;
//       arr[i].style.background = SWAP_COLOR;
//     } else {
//       await MakeDelay(delay);
//       arr[j].style.background = PRIMARY_COLOR;
//       continue;
//     }
//     await MakeDelay(delay);
//     arr[j].style.background = PRIMARY_COLOR;
//     arr[i].style.background = PRIMARY_COLOR;
//   }

//   arr[e].style.background = PRIMARY_COLOR; // Pivot to original color

//   await MakeDelay(delay);

//   Swap(arr[i + 1], arr[e]);
//   await MakeDelay(delay);

//   arr[i + 1].style.background = POSITION_FINAL_COLOR;

//   return i + 1;
// }

// Other Approach

async function partition(ele, s, e) {
  var n = randomNumberFrom(s, e);
  Swap(ele[n], ele[e]);

  await MakeDelay(delay);
  ele[e].style.background = MIN_COLOR; // current pivot color

  var m = s;
  var pivot = e;

  for (var i = s; i < e; i++) {
    ele[i].style.background = COMPARE_COLOR;
    if (parseInt(ele[i].style.height) < parseInt(ele[pivot].style.height)) {
      ele[m].style.background = COMPARE_COLOR;
      await MakeDelay(delay);

      Swap(ele[i], ele[m]);

      await MakeDelay(delay);
      ele[i].style.background = SWAP_COLOR;
      ele[m].style.background = SWAP_COLOR;
      if (m !== s) {
        ele[m - 1].style.background = PRIMARY_COLOR;
      }

      m += 1;
    }
    await MakeDelay(delay);
    ele[i].style.background = PRIMARY_COLOR;
    ele[m].style.background = PRIMARY_COLOR;
  }

  ele[e].style.background = PRIMARY_COLOR; // pivot to orginal color
  await MakeDelay(delay);
  Swap(ele[m], ele[pivot]);
  await MakeDelay(delay);
  ele[m].style.background = POSITION_FINAL_COLOR;

  return m;
}

async function quickSortHelper(arr, s, e) {
  if (s >= e) {
    if (s === e) {
      await MakeDelay(delay);
      arr[s].style.background = POSITION_FINAL_COLOR;
    }
    return;
  }

  let pi = await partition(arr, s, e);

  await quickSortHelper(arr, s, pi - 1);
  await quickSortHelper(arr, pi + 1, e);

  return;
}

export async function quickSort() {
  disableAllButtons(true);
  document.getElementById("qsort").className = "btndisabled";

  let arr = document.querySelectorAll(".element-bar");
  let n = arr.length;

  await quickSortHelper(arr, 0, n - 1);

  for (let i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = FINAL_COLOR;
  }

  disableAllButtons(false);
  document.getElementById("qsort").className = "btn";
}
