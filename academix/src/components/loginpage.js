import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ setCurrentPage }) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if (email === "" || password.length < 6) {
    setError("Invalid credentials. Please try again.");
  } else {
    setError("");
    alert("Login successful!");
    navigate("/dashboard"); // Redirect to Dashboard
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Sign in to your account
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Or{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            create a new account
          </a>
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@example.com"
              required
              className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
              className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring focus:ring-blue-200"
            />
            <small className="text-gray-500">Password must be at least 6 characters</small>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-200"
          >
            Sign In
          </button>

          <button
            type="button"
            className="w-full mt-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200"
            onClick={() => setCurrentPage("home")}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
