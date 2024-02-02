import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import itemContext from "../Context/itemContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loggedUser, setLoggedUser } = useContext(itemContext);
  useEffect(() => {
    if (loggedUser) navigate("/");
  }, []);
  const handleRegister = () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("userecom")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      alert("Username already exists. Please choose a different one.");
      return;
    }
    console.log(username, password);
    // Save user to local storage
    const newUser = { username, password };
    localStorage.setItem("userecom", JSON.stringify([...users, newUser]));
    navigate("/");
    alert("Registration successful!");
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
