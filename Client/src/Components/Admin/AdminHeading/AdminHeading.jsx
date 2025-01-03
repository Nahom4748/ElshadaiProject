import React from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import holybible from "../../../assets/images/logo/holy-bible.jpg";
import { useNavigate } from "react-router-dom";
function AdminHeading() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-primaryColor sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-2 md:p-6 rounded-lg">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            {/* Avatar/Profile Image */}
            <div className="overflow-hidden rounded-full w-16 h-16 border-4 border-white shadow-lg">
              <img
                src={holybible}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h5 className="text-sm font-medium opacity-90">Hello</h5>
              <h2 className="text-lg font-semibold">
                {user?.user_first_name} {user?.user_last_name}
              </h2>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-white text-primaryColor font-medium px-4 py-2 rounded-lg shadow-md border border-primaryColor hover:bg-primaryColor hover:text-white transition duration-300"
            >
              Logout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeading;
