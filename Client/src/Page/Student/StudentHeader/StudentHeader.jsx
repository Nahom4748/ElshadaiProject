import React, { useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle, FaHome, FaBars } from "react-icons/fa";

function StudentHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavigateHome = () => {
    navigate("/student-dashboard");
  };

  return (
    <header className="bg-primaryColor text-white shadow-lg py-4 px-6 max-w-4xl mx-auto flex justify-between items-center rounded-lg sticky top-4 z-50">
      {/* Left Section: Welcome Message */}
      <div className="flex items-center gap-3">
        <FaUserCircle size={38} className="text-gray-100" />
        <div>
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
            Welcome
          </h1>
          <span className="capitalize text-xs sm:text-sm text-gray-300">
            {user?.user_first_name && user?.user_last_name
              ? `${user.user_first_name} ${user.user_last_name}`
              : "Student"}
          </span>
        </div>
      </div>

      {/* Right Section: Navigation */}
      <div className="hidden sm:flex items-center gap-4">
        {location.pathname !== "/student-dashboard" && (
          <button
            onClick={handleNavigateHome}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <FaHome size={18} />
            <span>Home</span>
          </button>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
        >
          <FaSignOutAlt size={18} />
          <span>Logout</span>
        </button>
      </div>

      {/* Dropdown for Small Screens */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full shadow-md transition-all duration-300"
        >
          <FaBars size={22} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg w-40">
            <ul className="flex flex-col py-2">
              {location.pathname !== "/student-dashboard" && (
                <li>
                  <button
                    onClick={handleNavigateHome}
                    className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-200 transition-all duration-300"
                  >
                    <FaHome size={18} className="text-green-600" />
                    <span>Home</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-200 transition-all duration-300"
                >
                  <FaSignOutAlt size={18} className="text-red-600" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default StudentHeader;
