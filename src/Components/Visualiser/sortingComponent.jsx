import React, { useState, useEffect } from "react";
import "./sortingComponent.css";
import {
  randomNumberFrom,
  delay,
  PRIMARY_COLOR,
  changeDelay,
} from "../Utilities/utils";
import { bubbleSort } from "../Algorithms/bubbleSort";
import { selectionSort } from "../Algorithms/selectionSort";
import { insertionSort } from "../Algorithms/insertionSort";
import { quickSort } from "../Algorithms/quickSort";
import { mergeSort } from "../Algorithms/mergeSort";

function SortingComponent() {
  const [arr, setArr] = useState([]);
  const [arrSize, setArrSize] = useState(50);
  const [width, setWidth] = useState(9);

  const resetArr = () => {
    let arr = [];

    for (let i = 0; i < arrSize; i++) {
      arr.push(randomNumberFrom(8, 500));
    }
    setArr(arr);
  };

  useEffect(() => resetArr, []);

  const setArraySizeHelper = (val) => {
    console.log(val);

    if (val > 100) setWidth(2);
    else if (val > 80) setWidth(5);
    else if (val > 70) setWidth(7);
    else if (val > 60) setWidth(10);
    else if (val > 50) setWidth(15);
    else if (val > 40) setWidth(19);
    else if (val > 30) setWidth(25);
    else if (val > 20) setWidth(33);
    else if (val > 10) setWidth(40);
    else setWidth(60);

    setArrSize(val);
    resetArr();
  };

  return (
    <div>
      <div className="sideNavbar">
        <h3>Sorting Visualizer</h3>
        <label className="sliderLabel">
          Array Size
          <br />
          <input
            type="range"
            id="rangeSlider"
            min="5"
            max="200"
            value={arrSize}
            onChange={(e) => setArraySizeHelper(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="sliderLabel">
          Delay
          <br />
          <input
            type="range"
            min="10"
            max="300"
            onChange={(e) => changeDelay(e.target.value)}
          />
        </label>
        <br />
        <br />
        <div>
          <button className="btn" onClick={resetArr}>
            Generate Array
          </button>
          <br />
          <button className="btn" id="msort" onClick={mergeSort}>
            Merge Sort
          </button>
          <br />
          <button className="btn" id="qsort" onClick={quickSort}>
            Quick Sort
          </button>
          <br />
          <button className="btn" id="bsort" onClick={bubbleSort}>
            Bubble Sort
          </button>
          <br />
          <button className="btn" id="ssort" onClick={selectionSort}>
            Selection Sort
          </button>
          <br />
          <button className="btn" id="isort" onClick={insertionSort}>
            Insertion Sort
          </button>
        </div>
      </div>

      <div id="legend">
        <div className="color" id="primary"></div>
        <span>Primary</span>

        <div className="color" id="final"></div>
        <span>Final</span>

        <div className="color" id="pos-final"></div>
        <span>Position-Final</span>

        <div className="color" id="compare"></div>
        <span>Compare</span>

        <div className="color" id="swap"></div>
        <span>Swap</span>

        <div className="color" id="min"></div>
        <span>Min</span>
      </div>

      <div className="array">
        {arr.map((ele, idx) => (
          <div
            className="element-bar"
            key={idx}
            style={{
              height: `${ele}px`,
              width: `${width}px`,
              backgroundColor: PRIMARY_COLOR,
              WebkitTransition: `background-color ${delay}ms linear`,
              msTransition: `background-color ${delay}ms linear`,
              transition: `background-color ${delay}ms linear`,
              transition: `${delay}ms`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SortingComponent;
