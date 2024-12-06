import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaTrash, FaTimes } from "react-icons/fa"; // Import icons
import userService from "../../../Page/Admin/Usersfetch.service";

const UserModal = ({ user, actionType, onDelete, onClose, onSave }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Student" },
    { id: 4, name: "Partner" },
  ];

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: name === "company_role_id" ? parseInt(value) : value,
    }));
  };

  // Update user details
  const handleSave = async () => {
    if (!updatedUser.user_id) return;

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await userService.updateUser(
        updatedUser.user_id,
        updatedUser
      );
      if (response.success) {
        setSuccessMessage("User updated successfully.");
        onSave();
        navigate("/admin-usersList");
      } else {
        setError(
          response.message || "Failed to update user. Please try again."
        );
      }
    } catch (error) {
      setError(error.message || "Error updating user. Please try again.");
      console.error("Detailed error message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete user
  const handleDelete = async () => {
    if (!updatedUser.user_id) return;

    if (!window.confirm("Are you sure you want to delete this user?")) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await userService.deleteUser(updatedUser.user_id);
      if (response.success) {
        onDelete();
        navigate("/admin-usersList");
      } else {
        setError(
          response.message || "Failed to delete user. Please try again."
        );
      }
    } catch (error) {
      setError(error.message || "Error deleting user. Please try again.");
      console.error("Detailed error message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
        {/* Dynamic heading based on action type */}
        <h2 className="text-xl font-bold mb-4">
          {actionType === "view"
            ? "User Details"
            : actionType === "edit"
            ? "Edit User"
            : "Delete User"}
        </h2>

        {/* Success and error messages */}
        {successMessage && (
          <p className="text-green-900 mb-2">{successMessage}</p>
        )}
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {isLoading ? (
          <div className="flex justify-center items-center mb-4">
            <div className="loader rounded-full border-t-4 border-blue-500 w-8 h-8 animate-spin"></div>
            <span className="ml-2 text-blue-500">Loading...</span>
          </div>
        ) : (
          <>
            {actionType === "delete" || actionType === "view" ? (
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
                  <strong>Role:</strong>{" "}
                  {roles.find((role) => role.id === user.company_role_id)
                    ?.name || "Unknown"}
                </p>
              </>
            ) : (
              <>
                {/* Editable fields for edit */}
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
                  type="text"
                  name="email"
                  value={updatedUser.email || ""}
                  disabled
                  className="border p-2 w-full mb-2 bg-gray-200 text-gray-700 cursor-not-allowed"
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
                <select
                  name="company_role_id"
                  value={updatedUser.company_role_id || ""}
                  onChange={handleChange}
                  className="border p-2 w-full mb-2"
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </>
        )}

        {/* Modal actions */}
        <div className="modal-actions flex space-x-4 mt-4">
          {actionType === "edit" && (
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center bg-green-500 text-white p-2 rounded"
            >
              <FaSave className="mr-2" /> Save
            </button>
          )}
          {actionType === "delete" && (
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="flex items-center bg-red-500 text-white p-2 rounded"
            >
              <FaTrash className="mr-2" /> Delete
            </button>
          )}
          <button
            onClick={onClose}
            className="flex items-center bg-gray-500 text-white p-2 rounded"
          >
            <FaTimes className="mr-2" /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
