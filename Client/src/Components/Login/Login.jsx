import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaSpinner,
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from "../../Contexts/AuthContext";
import loginService from "../../Services/login.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      const response = await loginService.logIn(formData);
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl mx-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-blue-600">Please sign in to continue</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 rounded-lg flex items-center gap-2 text-red-700">
            <FaExclamationCircle className="flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400 group-focus-within:text-blue-600 transition-colors">
                <FaUser className="w-5 h-5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400 group-focus-within:text-blue-600 transition-colors">
                <FaLock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 rounded-lg border border-blue-100 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-400 hover:text-blue-600 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-blue-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-blue-300 text-blue-600 focus:ring-blue-600"
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-primaryColor transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-600 bg-primaryColor disabled:bg-blue-400 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <FaSpinner className="animate-spin" />
                <span>Signing In...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-sm text-blue-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/create-account"
              className="font-semibold text-blue-600 hover:text-primaryColor transition-colors"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
