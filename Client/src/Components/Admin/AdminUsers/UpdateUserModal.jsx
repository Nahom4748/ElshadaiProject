// import React, { useState } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";

// const UserModal = ({ user, onClose, onSave }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle save button click

//   const handleSave = async (userId, userData) => {
//     const token = "your-access-token"; // Get this from your auth state or context
//     try {
//       const response = await userService.updateUser(userId, userData, token);
//       if (response.success) {
//         console.log("User updated successfully!");
//         // Optionally refresh user data or provide feedback
//       } else {
//         console.error("Failed to update user:", response.message);
//       }
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };


//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <input
//           type="text"
//           name="first_name"
//           value={updatedUser.first_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="last_name"
//           value={updatedUser.last_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Last Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={updatedUser.email || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           name="phone_number"
//           value={updatedUser.phone_number || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Phone Number"
//         />
//         <input
//           type="text"
//           name="city"
//           value={updatedUser.city || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="City"
//         />
//         <input
//           type="text"
//           name="country"
//           value={updatedUser.country || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Country"
//         />
//         <input
//           type="text"
//           name="user_id"
//           value={updatedUser.user_id || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="User ID"
//         />
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white py-2 px-4 rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;


// import React, { useState } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";

// const UserModal = ({ user, onClose, onSave }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle save button click
//   const handleSave = async () => {
//     const token = "your-access-token"; // Get this from your auth state or context
//     setIsLoading(true);
//     try {
//       const response = await userService.updateUser(
//         updatedUser.user_id,
//         updatedUser,
//         token
//       );
//       if (response.success) {
//         console.log("User updated successfully!");
//         onClose(); // Close modal after saving
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to update user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error updating user. Please try again.");
//       console.error("Error updating user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   //handle delete user
//   const handleDelete = async () => {
//     const token = "your-access-token"; // Get this from your auth state or context
//     setIsLoading(true);
//     try {
//       const response = await userService.deleteUser(user.user_id, token);
//       if (response.success) {
//         console.log("User deleted successfully!");
//         onClose(); // Close modal after saving
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to delete user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error deleting user. Please try again.");
//       console.error("Error deleting user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <input
//           type="text"
//           name="first_name"
//           value={updatedUser.first_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="last_name"
//           value={updatedUser.last_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Last Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={updatedUser.email || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           name="phone_number"
//           value={updatedUser.phone_number || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Phone Number"
//         />
//         <input
//           type="text"
//           name="city"
//           value={updatedUser.city || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="City"
//         />
//         <input
//           type="text"
//           name="country"
//           value={updatedUser.country || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Country"
//         />
//         <input
//           type="text"
//           name="user_id"
//           value={updatedUser.user_id || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="User ID"
//         />
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white py-2 px-4 rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;



// import React, { useState } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";

// const UserModal = ({ user, onClose, onSave }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle save button click
//   const handleSave = async () => {
//     const token = "your-access-token"; // Get this from your auth state or context
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.updateUser(
//         updatedUser.user_id,
//         updatedUser,
//         token
//       );
//       if (response.success) {
//         console.log("User updated successfully!");
//         onClose(); // Close modal after saving
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to update user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error updating user. Please try again.");
//       console.error("Error updating user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle delete user
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this user?"
//     );
//     if (!confirmDelete) return;

//     const token = "your-access-token"; // Get this from your auth state or context
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.deleteUser(user.user_id, token);
//       if (response.success) {
//         console.log("User deleted successfully!");
//         onClose(); // Close modal after deletion
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to delete user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error deleting user. Please try again.");
//       console.error("Error deleting user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <input
//           type="text"
//           name="first_name"
//           value={updatedUser.first_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="last_name"
//           value={updatedUser.last_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Last Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={updatedUser.email || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           name="phone_number"
//           value={updatedUser.phone_number || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Phone Number"
//         />
//         <input
//           type="text"
//           name="city"
//           value={updatedUser.city || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="City"
//         />
//         <input
//           type="text"
//           name="country"
//           value={updatedUser.country || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Country"
//         />
//         <input
//           type="text"
//           name="user_id"
//           value={updatedUser.user_id || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="User ID"
//         />
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white py-2 px-4 rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//           <button
//             onClick={handleDelete}
//             className="bg-red-500 text-white py-2 px-4 rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? "Deleting..." : "Delete"}
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;


// import React, { useState } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";

// const UserModal = ({ user,actionType,onDelete, onClose, onSave }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle save button click
//   const handleSave = async () => {
//     const token = "your-access-token"; // Replace with your actual token retrieval logic
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.updateUser(
//         updatedUser.user_id,
//         updatedUser,
//         token
//       );
//       if (response.success) {
//         console.log("User updated successfully!");
//         onClose(); // Close modal after saving
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to update user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error updating user. Please try again.");
//       console.error("Error updating user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle delete user
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this user?"
//     );
//     if (!confirmDelete) return;

//     const token = "your-access-token"; // Replace with your actual token retrieval logic
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.deleteUser(user.user_id, token);
//       if (response.success) {
//         console.log("User deleted successfully!");
//         onClose(); // Close modal after deletion
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to delete user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error deleting user. Please try again.");
//       console.error("Error deleting user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <input
//           type="text"
//           name="first_name"
//           value={updatedUser.first_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="First Name"
//         />
//         <input
//           type="text"
//           name="last_name"
//           value={updatedUser.last_name || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Last Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={updatedUser.email || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           name="phone_number"
//           value={updatedUser.phone_number || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Phone Number"
//         />
//         <input
//           type="text"
//           name="city"
//           value={updatedUser.city || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="City"
//         />
//         <input
//           type="text"
//           name="country"
//           value={updatedUser.country || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="Country"
//         />
//         <input
//           type="text"
//           name="user_id"
//           value={updatedUser.user_id || ""}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//           placeholder="User ID"
//         />
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white py-2 px-4 rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//           <button
//             onClick={handleDelete}
//             className="bg-red-500 text-white py-2 px-4 rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? "Deleting..." : "Delete"}
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;



// import React, { useState } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";

// const UserModal = ({ user, actionType, onDelete, onClose, onSave }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle save button click
//   const handleSave = async () => {
//     const token = "your-access-token"; // Replace with actual token retrieval logic
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.updateUser(
//         updatedUser.user_id,
//         updatedUser,
//         token
//       );
//       if (response.success) {
//         console.log("User updated successfully!");
//         onClose();
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to update user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error updating user. Please try again.");
//       console.error("Error updating user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle delete user
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this user?"
//     );
//     if (!confirmDelete) return;

//     const token = "your-access-token"; // Replace with actual token retrieval logic
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.deleteUser(user.user_id, token);
//       if (response.success) {
//         console.log("User deleted successfully!");
//         onClose(); // Close modal after deletion
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to delete user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error deleting user. Please try again.");
//       console.error("Error deleting user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">
//           {actionType === "view" ? "User Details" : "Edit User"}
//         </h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}

//         {actionType === "edit" ? (
//           <>
//             <input
//               type="text"
//               name="first_name"
//               value={updatedUser.first_name || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="First Name"
//             />
//             <input
//               type="text"
//               name="last_name"
//               value={updatedUser.last_name || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Last Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={updatedUser.email || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="phone_number"
//               value={updatedUser.phone_number || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Phone Number"
//             />
//             <input
//               type="text"
//               name="city"
//               value={updatedUser.city || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="City"
//             />
//             <input
//               type="text"
//               name="country"
//               value={updatedUser.country || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Country"
//             />
//           </>
//         ) : (
//           <p>Are you sure you want to delete this user?</p>
//         )}

//         <div className="modal-actions flex justify-between mt-4">
//           {actionType === "view" ? (
//             <button
//               onClick={handleDelete}
//               className="bg-red-500 text-white py-2 px-4 rounded"
//               disabled={isLoading}
//             >
//               {isLoading ? "Deleting..." : "Delete"}
//             </button>
//           ) : (
//             <button
//               onClick={handleSave}
//               className="bg-green-500 text-white py-2 px-4 rounded"
//               disabled={isLoading}
//             >
//               {isLoading ? "Saving..." : "Save"}
//             </button>
//           )}
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;

// import React, { useState } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";

// const UserModal = ({ user, actionType, onDelete, onClose, onSave }) => {
//   const [updatedUser, setUpdatedUser] = useState({ ...user });
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle save button click
//   const handleSave = async () => {
//     const token = "your-access-token"; // Replace with actual token retrieval logic
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.updateUser(
//         updatedUser.user_id,
//         updatedUser,
//         token
//       );
//       if (response.success) {
//         console.log("User updated successfully!");
//         onClose();
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to update user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error updating user. Please try again.");
//       console.error("Error updating user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle delete user
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this user?"
//     );
//     if (!confirmDelete) return;

//     const token = "your-access-token"; // Replace with actual token retrieval logic
//     setIsLoading(true);
//     setError(null); // Clear previous errors
//     try {
//       const response = await userService.deleteUser(user.user_id, token);
//       if (response.success) {
//         console.log("User deleted successfully!");
//         onClose(); // Close modal after deletion
//         onSave(); // Optional: trigger a parent callback if needed
//       } else {
//         setError("Failed to delete user. Please try again.");
//       }
//     } catch (error) {
//       setError("Error deleting user. Please try again.");
//       console.error("Error deleting user:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">
//           {actionType === "view" ? "User Details" : "Edit User"}
//         </h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}

//         {actionType === "edit" ? (
//           <>
//             <input
//               type="text"
//               name="first_name"
//               value={updatedUser.first_name || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="First Name"
//             />
//             <input
//               type="text"
//               name="last_name"
//               value={updatedUser.last_name || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Last Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={updatedUser.email || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="phone_number"
//               value={updatedUser.phone_number || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Phone Number"
//             />
//             <input
//               type="text"
//               name="city"
//               value={updatedUser.city || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="City"
//             />
//             <input
//               type="text"
//               name="country"
//               value={updatedUser.country || ""}
//               onChange={handleChange}
//               className="border p-2 w-full mb-2"
//               placeholder="Country"
//             />
//           </>
//         ) : (
//           <p>Are you sure you want to delete this user?</p>
//         )}

//         <div className="modal-actions flex justify-between mt-4">
//           {actionType === "view" ? (
//             <button
//               onClick={handleDelete}
//               className="bg-red-500 text-white py-2 px-4 rounded"
//               disabled={isLoading}
//             >
//               {isLoading ? "Deleting..." : "Delete"}
//             </button>
//           ) : (
//             <button
//               onClick={handleSave}
//               className="bg-green-500 text-white py-2 px-4 rounded"
//               disabled={isLoading}
//             >
//               {isLoading ? "Saving..." : "Save"}
//             </button>
//           )}
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white py-2 px-4 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;


import React, { useState } from "react";
import userService from "../../../Page/Admin/Usersfetch.service";

const UserModal = ({ user, actionType, onDelete, onClose, onSave }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes for editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save button click
  const handleSave = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await userService.updateUser(
        updatedUser.user_id,
        updatedUser
      );
      if (response.success === true) {
        onClose();
        onSave();
      } else {
        setError("Failed to update user. Please try again.");
      }
    } catch (error) {
      setError("Error updating user. Please try again.");
      console.error("Error updating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete user
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await userService.deleteUser(user.user_id);
      if (response.success) {
        onClose();
        onSave();
      } else {
        setError("Failed to delete user. Please try again.");
      }
    } catch (error) {
      setError("Error deleting user. Please try again.");
      console.error("Error deleting user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {actionType === "view" ? "User Details" : "Edit User"}
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {actionType === "view" ? (
          // Display user details as text for viewing
          <>
            <p>
              <strong>First Name:</strong> {user.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {user.last_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phone_number}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Country:</strong> {user.country}
            </p>
            <p>
              <strong>Role:</strong> {user.company_role_name}
            </p>
          </>
        ) : (
          // Editable form for "edit" action
          <>
            <input
              type="text"
              name="first_name"
              value={updatedUser.first_name || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              value={updatedUser.last_name || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone_number"
              value={updatedUser.phone_number || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="city"
              value={updatedUser.city || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="City"
            />
            <input
              type="text"
              name="country"
              value={updatedUser.country || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Country"
            />
            <input
              type="text"
              name="Role"
              value={updatedUser.company_role_name || ""}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              placeholder="Role"
            />
          </>
        )}

        <div className="modal-actions flex space-x-4 mt-4">
          {actionType === "edit" && (
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="bg-green-500 text-white p-2 rounded"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          )}
          {actionType === "delete" && (
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="bg-red-500 text-white p-2 rounded"
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

