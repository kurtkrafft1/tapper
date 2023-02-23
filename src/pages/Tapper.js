import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Tapper() {
  const int = 30;
  const [seconds, setSeconds] = useState(int);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [highScores, setHighScores] = useLocalStorage("highScores", null);

  const clickBox = (event) => {
    event.preventDefault();
    if (!isDisabled) {
      if (!isActive) {
        toggle();
      }
      //if the timer is started, increment the count
      if (isActive) {
        setCount(count + 1);
      }
    }
  };
  function start() {
    toggle();
    setSeconds(int);
    setCount(0);
    setIsDisabled(false);
  }
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    addScore();
    setCount(0);
    setSeconds(int);
    setIsActive(false);
    setIsDisabled(false);
  }

  const addScore = () => {
    if (highScores === null || highScores.length === 0) {
      setHighScores([count]);
    } else {
      let arr = [...highScores, count].sort((a, b) => b - a);
      setHighScores(arr);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      setIsActive(false);
      setIsDisabled(true);
    } else if (!isActive && seconds !== int) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const countClasses =
    count < 10
      ? "select-none w-35 h-35 border border-black rounded py-2 px-8"
      : "select-none w-35 h-35 border border-black rounded p-2";

  return (
    <div className="p-4">
      <div className="flex flex-row items-center justify-center mb-8">
        <div className={countClasses} onClick={clickBox}>
          <div className="text-center">Click Me</div>
          <div className="h-full w-full flex flex-row items-center justify-center text-8xl font-bold">
            {count}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={start}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <div className="text-xl ml-4">{seconds}s</div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Tapper;
