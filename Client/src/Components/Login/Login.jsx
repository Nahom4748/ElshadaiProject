import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container mx-auto p-8 md:p-12 max-w-xl bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Login</h3>
        {error && (
          <div className="text-red-500 mb-4 text-center font-medium">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <FaUser className="text-gray-400 p-2" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full h-10 pl-2 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <FaLock className="text-gray-400 p-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full h-10 pl-2 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/create-account" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
