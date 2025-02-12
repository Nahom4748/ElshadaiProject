import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import logo from "../../assets/images/logo/ELSHADIA.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu visibility
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header>
      {/* Top Info Bar */}
      <div className="dark:bg-lightGrey10-dark hidden lg:block container pb-5 lg:pb-10">
        <div className="container mx-auto text-whiteColor py-2">
          <div className="flex justify-between items-center">
            <div>
              <p>
                {t("header.call_us")} +1 310-844-4780 - {t("header.email_us")}{" "}
                elshaddaiapostlicmission@gmail.com
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <p>
                  <i className="icofont-location-pin text-primaryColor mr-1"></i>
                  4001 Amen Ct Matthews NC 28104 USA
                </p>
              </div>
              <ul className="flex gap-3">
                <li>
                  <Link to="https://facebook.com" aria-label="Facebook">
                    <i className="icofont-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com" aria-label="Twitter">
                    <i className="icofont-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://instagram.com" aria-label="Instagram">
                    <i className="icofont-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://youtube.com" aria-label="YouTube">
                    <i className="icofont-youtube-play"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <nav>
          <div className="container 3xl:container-secondary-lg 4xl:container mx-auto lg:pt-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div>
                <Link to="/" className="block">
                  <img src={logo} alt="Logo" className="w-32 lg:w-auto py-2" />
                </Link>
              </div>

              {/* Navigation Links */}
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } lg:flex lg:relative w-full bg-black lg:bg-transparent lg:w-auto lg:flex-row lg:justify-between lg:items-center lg:px-10`}
              >
                <ul className="flex lg:flex-row flex-col items-center gap-6 lg:gap-6">
                  {[
                    { key: "home", path: "/" },
                    { key: "about_us", path: "/about-us" },
                    { key: "bible_school", path: "/bible-school" },
                    { key: "partner", path: "/partners" },
                    { key: "contact_us", path: "/contact-us" },
                  ].map((link) => (
                    <li key={link.key} className="nav-item">
                      <Link
                        to={link.path}
                        className="text-base font-semibold hover:text-primaryColor dark:text-whiteColor"
                        onClick={handleMenuClick} // Close the menu on click
                      >
                        {t(`header.${link.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language Switcher and Auth Buttons */}
              <div className="flex items-center gap-4">
                {user ? (
                  <Link
                    to="/dashboard"
                    className="text-sm font-semibold text-whiteColor bg-primaryColor px-4 py-2 rounded hover:bg-whiteColor hover:text-primaryColor"
                  >
                    {t("header.dashboard")}
                  </Link>
                ) : (
                  <>
                    <Link
                      to="https://www.paypal.com/donate/?hosted_button_id=J4AM3AMAD7DJ8"
                      target="_blank"
                      className="text-sm font-semibold text-secondaryColor border border-secondaryColor px-4 py-2 rounded hover:bg-primaryColor hover:text-whiteColor"
                    >
                      {t("header.donation")}
                    </Link>
                    <Link
                      to="/login"
                      className="text-sm font-semibold text-whiteColor bg-primaryColor px-4 py-2 rounded hover:bg-whiteColor hover:text-primaryColor"
                    >
                      {t("header.login")}
                    </Link>
                  </>
                )}

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-2xl"
                  onClick={toggleMenu} // Toggle the mobile menu visibility
                >
                  {isMenuOpen ? (
                    <i className="icofont-close text-white"></i> // Show "X" icon when menu is open
                  ) : (
                    <i className="icofont-navigation-menu"></i> // Show hamburger icon when menu is closed
                  )}
                </button>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
