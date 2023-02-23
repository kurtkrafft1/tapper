import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function HighScores() {
  const [highScores, setHighScores] = useLocalStorage("highScores", []);

  const specialClasses = (index) => {
    if (index + 1 < 4) {
      return "text-2xl font-bold text-blue-500 animate-pulse";
    }
    return "text-2xl font-bold";
  };

  const buildScores = () => {
    if (highScores.length > 0) {
      return highScores.map((score, index) => {
        return (
          <div className="flex flex-row w-1/6 items-center justify-between mb-2">
            <div className={specialClasses(index)}>{index + 1}</div>
            <div className={specialClasses(index)}>{score}</div>
          </div>
        );
      });
    }
    return (
      <div className="text-2xl font-bold text-gray-400 mb-4">
        No High Scores Yet
      </div>
    );
  };

  const clearScores = () => {
    setHighScores([]);
  };
  return (
    <div className="p-4">
      <div className="flex flex-row items-center justify-center mb-8 text-2xl font-bold underline">
        High Scores
      </div>
      <div className="flex flex-col items-center justify-center">
        {buildScores()}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="underline" onClick={clearScores}>
          Clear Scores
        </button>
      </div>
    </div>
  );
}

export default HighScores;
