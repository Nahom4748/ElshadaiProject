import React from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle, FaHome } from "react-icons/fa";

function StudentHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // To get the current path

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavigateHome = () => {
    navigate("/student-dashboard"); // Navigate to /student-dashboard
  };

  return (
    <header className="bg-primaryColor text-white shadow-lg py-4 px-6 max-w-4xl mx-auto flex justify-between items-center rounded-lg sticky top-4 z-50">
      {/* Left Section: Welcome Message */}
      <div className="flex items-center gap-4">
        <FaUserCircle size={40} className="text-gray-100" />
        <div>
          <h1 className="text-xl font-semibold tracking-wide">Welcome</h1>
          <span className="capitalize text-sm text-gray-200">
            {user?.user_first_name && user?.user_last_name
              ? `${user.user_first_name} ${user.user_last_name}`
              : "Student"}
          </span>
        </div>
      </div>

      {/* Right Section: Navigation Buttons */}
      <div className="flex items-center gap-4">
        {/* Show Home button only when the path is not /student-dashboard */}
        {location.pathname !== "/student-dashboard" && (
          <button
            onClick={handleNavigateHome}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaHome size={20} />
            Home
          </button>
        )}
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <FaSignOutAlt size={20} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default StudentHeader;
