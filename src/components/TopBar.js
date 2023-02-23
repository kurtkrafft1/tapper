import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const TopBar = () => {
  const { authToken, logout } = useAuth();
  const classes = "flex w-full h-full flex-row justify-between items-center";
  const navigate = useNavigate();

  const returnCorrectLoginLogout = () => {
    return authToken ? "Logout" : "";
  };
  const returnCorrectHighScore = () => {
    return authToken ? "High Scores" : "";
  };

  const returnHeaderClasses = () => {
    return authToken
      ? classes
      : "flex w-full h-full flex-row justify-center items-center";
  };
  const logoutClicked = (event) => {
    event.preventDefault();
    if (authToken) logout();
  };
  const highScoresClicked = (event) => {
    event.preventDefault();
    if (authToken) navigate("/highscores");
  };
  const tapperClicked = (event) => {
    event.preventDefault();
    if (authToken) navigate("/");
  };

  return (
    <div className="w-full h-20 bg-gray-200 px-4">
      <div className={returnHeaderClasses()}>
        <button onClick={tapperClicked} className="text-3xl font-bold">
          Tapper
        </button>
        <div className="flex flex-row">
          <button
            className="text-3xl font-bold hover:cursor-pointer mr-4 hover:text-gray-700"
            onClick={highScoresClicked}
          >
            {returnCorrectHighScore()}
          </button>
          <button
            className="text-3xl font-bold hover:cursor-pointer hover:text-gray-700"
            onClick={logoutClicked}
          >
            {returnCorrectLoginLogout()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
