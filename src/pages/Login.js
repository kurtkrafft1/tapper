import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    login("123123123");
  };

  return (
    <div className="w-full h-full pt-32 flex justify-center">
      <div className="bg-gray-100 h-1/4 w-1/4 p-4">
        <h1 className="text-center mb-4 text-xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="mr-2">Username:</label>
            <input
              type="text"
              className="bg-transparent border-b border-black"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="mr-2">Password:</label>
            <input
              type="password"
              className="bg-transparent border-b border-black"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
