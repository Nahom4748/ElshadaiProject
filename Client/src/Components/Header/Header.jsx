import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import logo from "../../assets/images/logo/Elsha_logo1.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTreshold = 100;
      if (window.scrollY > scrollTreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(user);
  return (
    <header>
      <div className="bg-blackColor2 dark:bg-lightGrey10-dark hidden lg:block">
        <div className="container 3xl:container-secondary-lg 4xl:container mx-auto text-whiteColor text-size-12 xl:text-sm py-5px xl:py-9px">
          <div className="flex justify-between items-center">
            <div>
              <p>
                Call Us: +1 310-844-4780 - Mail Us:
                elshaddaiapostlicmission@gmail.com
              </p>
            </div>
            <div className="flex gap-37px items-center">
              <div>
                <p>
                  <i className="icofont-location-pin text-primaryColor text-size-15 mr-5px"></i>
                  <span>684 West College St. Sun City, USA</span>
                </p>
              </div>
              <div>
                <ul className="flex gap-13px text-size-15">
                  <li>
                    <Link className="hover:text-primaryColor" to="#">
                      <i className="icofont-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primaryColor" to="#">
                      <i className="icofont-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primaryColor" to="#">
                      <i className="icofont-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-primaryColor" to="#">
                      <i className="icofont-youtube-play"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <nav>
          <div className="py-15px lg:py-0 px-15px lg:container 3xl:container-secondary-lg 4xl:container mx-auto relative">
            <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-px15px">
              <div className="lg:col-start-1 lg:col-span-2">
                <Link to="/" className="block">
                  <img
                    src={logo}
                    alt="log"
                    className="w-logo-10 lg:w-auto py-2"
                  />
                </Link>
              </div>
              <div className="hidden lg:block lg:col-start-3 lg:col-span-6">
                <ul className="nav-list flex justify-center">
                  <li className="nav-item group">
                    <Link
                      to="/"
                      className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item group">
                    <Link
                      to="/about-us"
                      className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item group">
                    <Link
                      to="/bible-school"
                      className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Bible School
                    </Link>
                  </li>
                  <li className="nav-item group relative">
                    <Link
                      to="instructor-dashboard.html"
                      className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Partner
                    </Link>
                  </li>
                  <li className="nav-item group relative">
                    <Link
                      to="/contact-us"
                      className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-start-11 lg:col-span-3">
                <ul className="relative nav-list flex justify-end items-center">
                  <li className="px-5 lg:px-10px 2xl:px-5 lg:py-4 2xl:py-26px 3xl:py-9 group">
                    <div
                      className="dropdown absolute top-full right-0 lg:right-8 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div className="shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark"></div>
                    </div>
                  </li>
                  <li className="hidden lg:block">
                    <Link
                      to="../../login.html"
                      className="text-size-12 2xl:text-size-15 px-35px py-2 text-secondaryColor hover:text-whiteColor bg-transparent  hover:bg-primaryColor border border-borderColor1 rounded-standard font-semibold mr-[7px] 2xl:mr-15px dark:text-blackColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor dark:hover:border-primaryColor"
                    >
                      {/* <i className="icofont-user-alt-5"></i> */}
                      Donation
                    </Link>
                  </li>
                  <li className="hidden lg:block">
                    <Link
                      to="/login"
                      className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-35px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                    >
                      LOGIN
                    </Link>
                  </li>
                  <li className="block lg:hidden">
                    <button className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor">
                      <i className="icofont-navigation-menu"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
