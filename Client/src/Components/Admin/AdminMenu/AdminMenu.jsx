import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
function AdminMenu() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div class="lg:col-start-1 lg:col-span-3 border border-whitegrey">
      <div class="p-20px pt-5 lg:p-5 2xl:p-30px 2xl:pt-5 rounded-lg2 shadow-accordion dark:shadow-accordion-dark text-white dark:bg-whiteColor-dark">
        <h5 className="text-sm leading-1 font-semibold uppercase text-white dark:text-white-dark dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
          {user.user_first_name} {user.user_last_name}
        </h5>

        <ul>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/admin-dashboard"
              class="text-white hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </Link>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/Payments"
              className="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
            >
              {/* Credit Card Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-credit-card"
              >
                <rect x="1" y="4" width="22" height="16" rx="3" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              Payments
            </Link>
          </li>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark flex justify-between items-center">
            <Link
              to="/admin-employee"
              className="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
            >
              {/* User Add Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user-plus"
              >
                <path d="M16 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"></path>
                <path d="M12 14c-2 0-4 1-4 3v2h8v-2c0-2-2-3-4-3z"></path>
                <path d="M18 6h6M21 3v6"></path>
              </svg>
              Add Employee
            </Link>
          </li>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/videos"
              className="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-[1.8] flex gap-3 text-nowrap"
            >
              {/* Updated Film Reel Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-film"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2.18"
                  ry="2.18"
                ></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="7" x2="22" y2="7"></line>
                <line x1="2" y1="17" x2="22" y2="17"></line>
              </svg>
              Manage Videos
            </Link>
          </li>
          <li className="py-[10px] border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/admin-usersList"
              className="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-[1.8] flex gap-3 text-nowrap"
            >
              {/* User Icon for Manage Users */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Manage users
            </Link>
          </li>

          <li className="py-[10px] border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/Partners"
              className="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-[1.8] flex items-center gap-3 text-nowrap"
            >
              {/* New icon - Video Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-video"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              Partner Videos
            </Link>
          </li>
        </ul>
        <h5 class="text-sm leading-1 font-semibold uppercase text-white dark:text-white-dark  dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
          USER
        </h5>
        <ul>
          <li className="pt-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="#"
              className="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
            >
              {/* Log-out Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-out"
              >
                <path d="M17 11l4-4-4-4"></path>
                <path d="M3 15l4 4 4-4M3 4h10a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H3a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"></path>
              </svg>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
