// components/ResetPassword.js

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import passwordService from "../../Services/passwordService";

// function ResetPassword() {
//   const { token } = useParams();
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       const response = await passwordService.confirmPasswordReset(
//         token,
//         newPassword
//       );
//       setMessage(response.message);
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
//           Reset Password
//         </h3>
//         <form onSubmit={handleResetPassword} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 mb-2">New Password:</label>
//             <input
//               type="password"
//               placeholder="Enter new password"
//               className="w-full p-2 border rounded"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 mb-2">
//               Confirm New Password:
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm new password"
//               className="w-full p-2 border rounded"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           {message && <p className="text-green-500">{message}</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue text-white rounded flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Reset Password"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ResetPassword;


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import passwordService from "../../Services/passwordService"; // Adjust path if needed

function ResetPassword() {
  const location = useLocation(); // To get access to the location object
  const navigate = useNavigate();

  // Extract the token from the query string
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Invalid or expired token.");
    } else {
      console.log("Token received:", token); // Debugging the token
    }
  }, [token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await passwordService.confirmPasswordReset(
        token,
        newPassword
      );
      setMessage(response.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Reset Password
        </h3>
        <form onSubmit={handleResetPassword} className="space-y-4">
          {/* New Password Field */}
          <div>
            <label className="block text-gray-600 mb-2">New Password:</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm New Password Field */}
          <div>
            <label className="block text-gray-600 mb-2">
              Confirm New Password:
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Display messages */}
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue text-white rounded flex items-center justify-center"
            disabled={loading}
          >
            {loading ? "Processing..." : "Reset Password"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ResetPassword;