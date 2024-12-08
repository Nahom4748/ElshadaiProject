import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSpinner } from "react-icons/fa";
import { useAuth } from "../../Contexts/AuthContext";
import loginService from "../../Services/login.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setIsLogged } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    setLoading(true);
    setError(null);

    try {
      const response = await loginService.logIn(formData); // Using axios
      if (response.status === "success") {
        const userToken = response.data?.user_token;
        if (userToken) {
          localStorage.setItem("authToken", JSON.stringify(response.data));
          setIsLogged(true);
          setUser(response.data);
          navigate("/");
        }
      } else {
        setError(response.message || "Invalid credentials.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="container mx-auto p-8 md:p-12 max-w-md bg-white rounded-lg shadow-xl">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Login
        </h3>
        {error && (
          <div className="text-red-600 mb-4 text-center font-medium">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
              <FaUser className="text-gray-400 p-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full h-12 pl-2 text-gray-700 focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
              <FaLock className="text-gray-400 p-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full h-12 pl-2 text-gray-700 focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 bg-blue text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : "Log in"}
          </button>
        </form>
        {/* Forgot Password */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <Link
            to="/forgot-password"
            className="hover:underline hover:text-blue"
          >
            Forgot Password?
          </Link>
          <p>
            Don't have an account?{" "}
            <Link to="/create-account" className="text-indigo-600 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
