import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import logo from "../../assets/images/logo/Elsha_logo1.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <header>
      {/* Top Info Bar */}
      <div className=" dark:bg-lightGrey10-dark hidden lg:block container  pb-5 lg:pb-10">
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
                  684 West College St. Sun City, USA
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
              <div className="hidden lg:block">
                <ul className="flex gap-6">
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
                      >
                        {t(`header.${link.key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language Switcher and Auth Buttons */}
              <div className="flex items-center gap-4">
                {/* Language Switcher */}

                {/* Auth & Action Buttons */}
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
                      to="https://www.paypal.com/donate?token=j5vMmSEk8tvLicD7OgC0LFbvFNhDfXjsEwFGvqVfIdpjF46uI4VoOnedMT3TPJvoAVR3awDg2P3wNrz3"
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
                <button className="lg:hidden text-2xl">
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
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
