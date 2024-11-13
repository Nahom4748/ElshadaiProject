// // src/Page/ResetPassword/ResetPassword.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function ResetPassword() {
//   const { token } = useParams();
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:6000/confirm",
//         {
//           token,
//           newPassword,
//         }
//       );
//       setMessage(response.data.message);
//       setError("");
//       navigate("/login"); // Redirect to login after successful reset
//     } catch (error) {
//       setError("Failed to reset password. Please try again.");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="container mx-auto p-8 max-w-md bg-white rounded-lg shadow-md">
//       <h2 className="text-center text-2xl font-bold">Reset Password</h2>
//       <form onSubmit={handleResetPassword} className="space-y-4 mt-4">
//         <label className="block">
//           <span className="text-gray-700">New Password</span>
//           <input
//             type="password"
//             className="form-input mt-1 block w-full"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </label>
//         {message && <div className="text-green-500">{message}</div>}
//         {error && <div className="text-red-500">{error}</div>}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//         >
//           Reset Password
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ResetPassword;


// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function ResetPassword() {
//   const { token } = useParams();
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:6000/confirm", {
//         token,
//         newPassword,
//       });
//       setMessage(response.data.message);
//       setError("");
//       navigate("/login");
//     } catch (error) {
//       setError(
//         error.response?.data?.message ||
//           "Failed to reset password. Please try again."
//       );
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       <h3>Reset Password</h3>
//       <form onSubmit={handleResetPassword}>
//         <label>New Password:</label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Reset Password</button>
//       </form>
//       {message && <p>{message}</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default ResetPassword;





// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

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
//     try {
//       // Use the correct backend URL here
//       const response = await axios.post("http://localhost:3000/confirm", {
//         token,
//         newPassword,
//       });
//       setMessage(response.data.message);
//       setError("");
//       setTimeout(() => navigate("/login"), 2000); // Navigate to login after a short delay
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to reset password.");
//       setMessage("");
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
//             disabled={loading}
//             className="w-full py-2 bg-blue text-white rounded hover:bg-blue-600 transition"
//           >
//             {loading ? "Resetting..." : "Reset Password"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ResetPassword;





// // components/ResetPassword.js

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import passwordService from "../../Services/passwordService"

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
//     try {
//       const response = await passwordService.confirmPasswordReset(token, newPassword);
//       setMessage(response.message);
//       setError("");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (error) {
//       setError(error.message);
//       setMessage("");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Reset Password</h3>
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
//             <label className="block text-gray-600 mb-2">Confirm New Password:</label>
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
//             {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div> : "Reset Password"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ResetPassword;




// components/ResetPassword.js

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import passwordService from "../../Services/passwordService"

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await passwordService.confirmPasswordReset(token, newPassword);
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
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Reset Password</h3>
        <form onSubmit={handleResetPassword} className="space-y-4">
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
          <div>
            <label className="block text-gray-600 mb-2">Confirm New Password:</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
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
