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
            <a
              href="admin-dashboard.html"
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
            </a>
          </li>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <a
              href="admin-profile.html"
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
                class="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              My Profile
            </a>
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
                class="feather feather-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Add Employee
            </Link>
          </li>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <a
              href="admin-course.html"
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
                class="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Courses
            </a>
          </li>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <a
              href="admin-reviews.html"
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
                class="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Reviews
            </a>
          </li>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <a
              href="admin-quiz-attempts.html"
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
                class="feather feather-help-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Quiz Attempts
            </a>
          </li>
        </ul>
        <h5 class="text-sm leading-1 font-semibold uppercase text-white dark:text-white-dark  dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
          USER
        </h5>
        <ul>
          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <a
              href="admin-settings.html"
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
            </a>
          </li>

          <li class="py-10px border-b border-whitegrey dark:border-whitegrey-dark">
            <a
              href="#"
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
                class="feather feather-volume-1"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
