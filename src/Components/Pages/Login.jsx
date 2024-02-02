import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import itemContext from "../Context/itemContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loggedUser, setLoggedUser } = useContext(itemContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(loggedUser) navigate("/");
    },[])
  const handleLogin = () => {
    // Validate inputs
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    const users = JSON.parse(localStorage.getItem("userecom")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("loggeduser", JSON.stringify(username));
      setLoggedUser( username );
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
