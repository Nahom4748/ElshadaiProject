import React from "react";
import { Link } from "react-router-dom";
function AdminMenu() {
  return (
    <div class="lg:col-start-1 lg:col-span-3 border border-whitegrey">
      <div class="p-30px pt-5 lg:p-5 2xl:p-30px 2xl:pt-5 rounded-lg2 shadow-accordion dark:shadow-accordion-dark text-white dark:bg-whiteColor-dark">
        <h5 class="text-sm leading-1 font-semibold uppercase text-white dark:text-white-dark dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
          WELCOME, MICLE OBEMA
        </h5>
        <ul>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="admin-dashboard.html"
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
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
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
                class="feather feather-credit-card"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Payments
            </Link>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark flex justify-between items-center">
            <Link
              to="/admin-employee"
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
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
                class="feather feather-user-plus"
              >
                <path d="M16 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M8 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              Add Employee
            </Link>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/videos"
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
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
                class="feather feather-play-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Videos
            </Link>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/admin-usersList"
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
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
                class="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              List of Users
            </Link>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="/Partners"
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
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
                class="feather feather-video"
              >
                <rect x="3" y="6" width="15" height="12" rx="2" ry="2"></rect>
                <polygon points="16 10 22 6 22 18 16 14 16 10"></polygon>
              </svg>
              Partners Videos
            </Link>
          </li>
        </ul>
        <h5 class="text-sm leading-1 font-semibold uppercase text-white dark:text-white-dark  dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
          USER
        </h5>
        <ul>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="admin-settings.html"
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
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
                class="feather feather-settings"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Settings
            </Link>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <Link
              to="#"
              class="text-white dark:text-white-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 items-center"
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
                class="feather feather-log-out"
              >
                <path d="M17 9l3-3-3-3"></path>
                <path d="M3 12h14"></path>
                <path d="M3 12l3 3-3 3"></path>
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
