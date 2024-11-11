// // src/Page/RequestPasswordReset/RequestPasswordReset.jsx

// import React, { useState } from "react";
// import axios from "axios";

// function RequestPasswordReset() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleRequestReset = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/password-reset/request",
//         { email }
//       );
//       setMessage(response.data.message);
//       setError("");
//     } catch (error) {
//       setError("Failed to request password reset. Please try again.");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="container mx-auto p-8 max-w-md bg-white rounded-lg shadow-md">
//       <h2 className="text-center text-2xl font-bold">Request Password Reset</h2>
//       <form onSubmit={handleRequestReset} className="space-y-4 mt-4">
//         <label className="block">
//           <span className="text-gray-700">Email Address</span>
//           <input
//             type="email"
//             className="form-input mt-1 block w-full"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         {message && <div className="text-green-500">{message}</div>}
//         {error && <div className="text-red-500">{error}</div>}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//         >
//           Send Reset Link
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RequestPasswordReset;





// src/Page/RequestPasswordReset/RequestPasswordReset.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import img_her2 from "../../assets/images/education/hero_shape2.png";
// import img_her3 from "../../assets/images/education/hero_shape3.png";
// import img_her4 from "../../assets/images/education/hero_shape4.png";
// import img_her5 from "../../assets/images/education/hero_shape5.png";

// function RequestPasswordReset() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleRequestReset = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:6000/request", { email });
//       setMessage("A reset link has been sent to your email.");
//       setError("");
//     } catch (error) {
//       setError("Failed to send reset link. Please try again.");
//       setMessage("");
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="container mx-auto p-8 md:p-12 max-w-xl bg-white rounded-lg shadow-lg">
//         <div className="text-center mb-8">
//           <h3 className="text-3xl font-bold text-gray-800">
//             Request Password Reset
//           </h3>
//           <p className="text-gray-600">
//             Remember your password?{" "}
//             <Link to="/login" className="text-blue hover:underline">
//               Log In
//             </Link>
//           </p>
//         </div>

//         <form onSubmit={handleRequestReset} className="space-y-4">
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-2">Enter your Email</label>
//             <div className="flex items-center border rounded-lg overflow-hidden">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="w-full h-10 pl-2 text-gray-700 placeholder-gray-400 focus:outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           {message && <div className="text-green-500 mb-4">{message}</div>}
//           {error && <div className="text-red-500 mb-4">{error}</div>}

//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white bg-blue py-2 rounded-lg hover:bg-orange-600 transition duration-300"
//           >
//             Send Reset Link
//           </button>
//         </form>
//       </div>

//       {/* Animated decorative images */}
//       <img
//         loading="lazy"
//         className="absolute right-10 top-32 animate-bounce w-10 h-10 opacity-75"
//         src={img_her2}
//         alt="Decorative Shape"
//       />
//       <img
//         loading="lazy"
//         className="absolute left-10 bottom-32 animate-spin-slow w-12 h-12 opacity-75"
//         src={img_her3}
//         alt="Decorative Shape"
//       />
//       <img
//         loading="lazy"
//         className="absolute right-1/3 top-10 animate-spin w-8 h-8 opacity-50"
//         src={img_her4}
//         alt="Decorative Shape"
//       />
//       <img
//         loading="lazy"
//         className="absolute left-1/4 bottom-10 animate-pulse w-12 h-12 opacity-50"
//         src={img_her5}
//         alt="Decorative Shape"
//       />
//     </section>
//   );
// }

// export default RequestPasswordReset;



// src/Page/RequestPasswordReset/RequestPasswordReset.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function RequestPasswordReset() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleRequestReset = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/request", {
//         email,
//       });
//       setMessage("A reset link has been sent to your email.");
//       setError("");
//     } catch (error) {
//       console.error("Error:", error); // Log the error for more info
//       setError("Failed to send reset link. Please try again.");
//       setMessage("");
//     }

//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
//           Reset your password
//         </h3>
//         <p className="text-gray-600 text-center mb-4">
//           Remember your password?{" "}
//           <Link to="/login" className="text-blue hover:underline">
//             Log In
//           </Link>
//         </p>
//         <form onSubmit={handleRequestReset} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full p-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           {message && <p className="text-green-500">{message}</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue text-white rounded"
//           >
//            Reset your password
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default RequestPasswordReset;



// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function RequestPasswordReset() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state

//   const handleRequestReset = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when the request starts
//     try {
//       const response = await axios.post("http://localhost:5001/request", {
//         email,
//       });
//       setMessage("A reset link has been sent to your email.");
//       setError("");
//     } catch (error) {
//       console.error("Error:", error); // Log the error for more info
//       setError("Failed to send reset link. Please try again.");
//       setMessage("");
//     } finally {
//       setLoading(false); // Reset loading state after the request completes
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
//           Reset your password
//         </h3>
//         <p className="text-gray-600 text-center mb-4">
//           Remember your password?{" "}
//           <Link to="/login" className="text-blue hover:underline">
//             Log In
//           </Link>
//         </p>
//         <form onSubmit={handleRequestReset} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full p-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           {message && <p className="text-green-500">{message}</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue text-white rounded flex items-center justify-center"
//             disabled={loading} // Disable the button while loading
//           >
//             {loading ? (
//               <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
//             ) : (
//               "Reset your password"
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default RequestPasswordReset;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import passwordService from "../../Services/passwordService"

// function RequestPasswordReset() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRequestReset = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await passwordService.requestPasswordReset(email);
//       setMessage(response.message);
//       setError("");
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
//         <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Reset your password</h3>
//         <p className="text-gray-600 text-center mb-4">
//           Remember your password? <Link to="/login" className="text-blue hover:underline">Log In</Link>
//         </p>
//         <form onSubmit={handleRequestReset} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="w-full p-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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
//             {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div> : "Reset your password"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default RequestPasswordReset;





// components/RequestPasswordReset.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import passwordService from "../../Services/passwordService"
function RequestPasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await passwordService.requestPasswordReset(email);
      setMessage(response.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Request Password Reset</h3>
        <form onSubmit={handleRequestReset} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default RequestPasswordReset;
