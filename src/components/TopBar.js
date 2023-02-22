import React from "react";
import { useAuth } from "../hooks/useAuth";

const TopBar = () => {
  const { authToken, logout } = useAuth();
  const classes = "flex w-full h-full flex-row justify-between items-center";

  const returnCorrectLoginLogout = () => {
    return authToken ? "Logout" : "";
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
  return (
    <div className="w-full h-20 bg-gray-200 px-4">
      <div className={returnHeaderClasses()}>
        <div className="text-3xl font-bold">Tapper</div>
        <div className="flex flex-row">
          <button
            className="text-3xl font-bold hover:cursor-pointer"
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
