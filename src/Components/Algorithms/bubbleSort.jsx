import React from "react";
import {
  delay,
  MakeDelay,
  disableAllButtons,
  Swap,
  COMPARE_COLOR,
  SWAP_COLOR,
  PRIMARY_COLOR,
  POSITION_FINAL_COLOR,
  FINAL_COLOR,
} from "../Utilities/utils";

export async function bubbleSort() {
  disableAllButtons(true);
  let arr = document.querySelectorAll(".element-bar");
  document.getElementById("bsort").className = "btndisabled";
  let n = arr.length;

  for (let pass = 0; pass < n; pass++) {
    for (let j = 0; j < n - pass - 1; j++) {
      arr[j].style.background = COMPARE_COLOR;
      arr[j + 1].style.background = COMPARE_COLOR;

      if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
        await MakeDelay(delay);
        arr[j].style.background = SWAP_COLOR;
        arr[j + 1].style.background = SWAP_COLOR;

        Swap(arr[j], arr[j + 1]);
      }

      await MakeDelay(delay);
      arr[j].style.background = PRIMARY_COLOR;
      arr[j + 1].style.background = PRIMARY_COLOR;
    }
    await MakeDelay(delay);

    arr[n - pass - 1].style.background = POSITION_FINAL_COLOR;
  }

  for (let i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = FINAL_COLOR;
  }

  document.getElementById("bsort").className = "btn";
  disableAllButtons(false);
}
