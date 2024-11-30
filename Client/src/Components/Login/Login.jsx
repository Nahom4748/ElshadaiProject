import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img_her2 from "../../assets/images/education/hero_shape2.png";
import img_her3 from "../../assets/images/education/hero_shape3.png";
import img_her4 from "../../assets/images/education/hero_shape4.png";
import img_her5 from "../../assets/images/education/hero_shape5.png";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [res, setRes] = useState();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/user/login",
        {
          email,
          password,
        }
      );

      const { user_token } = response.data.data;

      if (!user_token) {
        setError("Login failed: No token received");
        return;
      }

      localStorage.setItem("authToken", JSON.stringify(response.data.data));
      setRes(response.data);
      navigate("/"); // Redirect after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container mx-auto p-8 md:p-12 max-w-xl bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">Login</h3>
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/create-account" className="text-blue hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Username or Email
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <FaUser className="text-gray-400 p-2" />
              <input
                type="text"
                placeholder="Your username or email"
                className="w-full h-10 pl-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Password</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <FaLock className="text-gray-400 p-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full h-10 pl-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to="/reset-password" className="text-blue hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white bg-blue py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Animated decorative images */}
      <img
        loading="lazy"
        className="absolute right-10 top-32 animate-bounce w-10 h-10 opacity-75"
        src={img_her2}
        alt="Decorative Shape"
      />
      <img
        loading="lazy"
        className="absolute left-10 bottom-32 animate-spin-slow w-12 h-12 opacity-75"
        src={img_her3}
        alt="Decorative Shape"
      />
      <img
        loading="lazy"
        className="absolute right-1/3 top-10 animate-spin w-8 h-8 opacity-50"
        src={img_her4}
        alt="Decorative Shape"
      />
      <img
        loading="lazy"
        className="absolute left-1/4 bottom-10 animate-pulse w-12 h-12 opacity-50"
        src={img_her5}
        alt="Decorative Shape"
      />
    </section>
  );
}

export default Login;
