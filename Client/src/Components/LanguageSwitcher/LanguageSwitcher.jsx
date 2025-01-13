import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa"; // Icon for the button

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Track current language

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
    setCurrentLanguage(lng); // Update current language in state
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <FaGlobe className="mr-2 text-white text-lg" />
        <span className="hidden sm:block">Language</span>
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 bg-white dark:bg-gray-800 shadow-xl rounded-lg w-44 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <ul className="py-2 text-gray-800 dark:text-gray-100">
            {/* English */}
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className={`block px-6 py-3 text-sm font-medium  hover:text-blue text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded-lg transition-colors duration-300 ${
                  currentLanguage === "en" ? "bg-blue-100 dark:bg-blue-600" : ""
                }`}
              >
                English
              </button>
            </li>
            {/* Amharic */}
            <li>
              <button
                onClick={() => changeLanguage("am")}
                className={`block px-6 py-3 text-sm font-medium  hover:text-blue text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded-lg transition-colors duration-300 ${
                  currentLanguage === "am" ? "bg-blue-100 dark:bg-blue-600" : ""
                }`}
              >
                አማርኛ
              </button>
            </li>
            {/* Tigrinya */}
            <li>
              <button
                onClick={() => changeLanguage("ti")}
                className={`block px-6 py-3 text-sm font-medium hover:text-blue text-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600 rounded-lg transition-colors duration-300 ${
                  currentLanguage === "ti" ? "bg-blue-100 dark:bg-blue-600" : ""
                }`}
              >
                ትግርኛ
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
