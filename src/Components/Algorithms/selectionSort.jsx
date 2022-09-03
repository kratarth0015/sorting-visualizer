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
  MIN_COLOR,
} from "../Utilities/utils";

export async function selectionSort() {
  disableAllButtons(true);

  let arr = document.querySelectorAll(".element-bar");

  document.getElementById("ssort").className = "btndisabled";

  let n = arr.length;

  let i, j, min_idx;

  for (i = 0; i < n; i++) {
    min_idx = i;

    for (j = i + 1; j < n; j++) {
      arr[min_idx].style.background = MIN_COLOR;
      arr[j].style.background = COMPARE_COLOR;

      if (parseInt(arr[j].style.height) < parseInt(arr[min_idx].style.height)) {
        arr[min_idx].style.background = PRIMARY_COLOR;
        await MakeDelay(delay);
        min_idx = j;
      } else {
        await MakeDelay(delay);
        arr[j].style.background = PRIMARY_COLOR;
      }
    }

    if (min_idx !== i) {
      arr[min_idx].style.background = SWAP_COLOR;
      arr[i].style.background = SWAP_COLOR;

      await MakeDelay(delay);
      arr[min_idx].style.background = PRIMARY_COLOR;
      arr[i].style.background = PRIMARY_COLOR;

      Swap(arr[min_idx], arr[i]);
    }

    await MakeDelay(delay);
    arr[i].style.background = POSITION_FINAL_COLOR;
  }

  for (i = 0; i < n; i++) {
    await MakeDelay(delay);
    arr[i].style.background = FINAL_COLOR;
  }
  document.getElementById("ssort").className = "btn";
  disableAllButtons(false);
}
