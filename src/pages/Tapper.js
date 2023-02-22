import React, { useState, useEffect } from "react";

function Tapper() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const clickBox = (event) => {
    event.preventDefault();
    if (!isActive) {
      toggle();
    }
    //if the timer is started, increment the count
    if (isActive) {
      setCount(count + 1);
    }
  };
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setCount(0);
    setSeconds(60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 60) {
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
          onClick={toggle}
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
