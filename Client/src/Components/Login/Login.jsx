// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUser, FaLock, FaSpinner } from "react-icons/fa";
// import { useAuth } from "../../Contexts/AuthContext";
// import loginService from "../../Services/login.service";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { setUser, setIsLogged } = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const formData = { email, password };
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await loginService.logIn(formData); // Using axios
//       if (response.status === "success") {
//         const userToken = response.data?.user_token;
//         if (userToken) {
//           localStorage.setItem("authToken", JSON.stringify(response.data));
//           setIsLogged(true);
//           setUser(response.data);
//           navigate("/");
//         }
//       } else {
//         setError(response.message || "Invalid credentials.");
//       }
//     } catch (err) {
//       setError(err.message || "An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
//       <div className="container mx-auto p-8 md:p-12 max-w-md bg-white rounded-lg shadow-xl">
//         <h3 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
//           Login
//         </h3>
//         {error && (
//           <div className="text-red-600 mb-4 text-center font-medium">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleLogin} className="space-y-6">
//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
//               <FaUser className="text-gray-400 p-3" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email"
//                 className="w-full h-12 pl-2 text-gray-700 focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           {/* Password Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Password
//             </label>
//             <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
//               <FaLock className="text-gray-400 p-3" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Your password"
//                 className="w-full h-12 pl-2 text-gray-700 focus:outline-none"
//                 required
//               />
//             </div>
//           </div>
//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 bg-blue text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? <FaSpinner className="animate-spin mr-2" /> : "Log in"}
//           </button>
//         </form>
//         {/* Forgot Password */}
//         <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
//           <Link
//             to="/forgot-password"
//             className="hover:underline hover:text-blue"
//           >
//             Forgot Password?
//           </Link>
//           <p>
//             Don't have an account?{" "}
//             <Link to="/create-account" className="text-indigo-600 underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;


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
