import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Login Account</h1>
      <form className="w-full max-w-sm mx-auto bg-white p-4 sm:p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            for="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="prodip@example.com"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            for="password"
          >
            Password
          </label>
          <div className="w-full flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus-within:border-indigo-500">
            <input
              className="outline-none w-full"
              type={isShow ? "text" : "password"}
              id="password"
              name="password"
              placeholder="******"
              required
            />
            {isShow ? (
              <FaEye
                onClick={() => setIsShow(false)}
                className="w-5 h-5 text-gray-400"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setIsShow(true)}
                className="w-5 h-5 text-gray-400"
              />
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="mr-2"
            />
            <label htmlFor="remember-me" className="text-gray-500">
              Remember me
            </label>
          </div>
          <button className="font-semibold">Forgot Password?</button>
        </div>
        <p className="h-6">
          {error && <small className="text-red-500">{error}</small>}
        </p>
        <button
          className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 mt-2 mb-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit"
        >
          Login
        </button>
        <hr />
        <p className="text-center mt-2">
          Don't you have an account yet?{" "}
          <span className="text-indigo-500 font-semibold underline underline-offset-2">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
