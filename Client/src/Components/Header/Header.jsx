import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
   const [scrolled, setScrolled] = useState(false);

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
  return (
    <header>
      <div class="bg-blackColor2 dark:bg-lightGrey10-dark hidden lg:block">
        <div class="container 3xl:container-secondary-lg 4xl:container mx-auto text-whiteColor text-size-12 xl:text-sm py-5px xl:py-9px">
          <div class="flex justify-between items-center">
            <div>
              <p>
                Call Us: +1 310-844-4780 - Mail Us:
                elshaddaiapostlicmission@gmail.com
              </p>
            </div>
            <div class="flex gap-37px items-center">
              <div>
                <p>
                  <i class="icofont-location-pin text-primaryColor text-size-15 mr-5px"></i>
                  <span>684 West College St. Sun City, USA</span>
                </p>
              </div>
              <div>
                <ul class="flex gap-13px text-size-15">
                  <li>
                    <Link class="hover:text-primaryColor" to="#">
                      <i class="icofont-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="hover:text-primaryColor" to="#">
                      <i class="icofont-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="hover:text-primaryColor" to="#">
                      <i class="icofont-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="hover:text-primaryColor" to="#">
                      <i class="icofont-youtube-play"></i>
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
          <div class="py-15px lg:py-0 px-15px lg:container 3xl:container-secondary-lg 4xl:container mx-auto relative">
            <div class="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px">
              <div class="lg:col-start-1 lg:col-span-2">
                <Link to="../../index.html" class="block">
                  <img
                    src="../../assets/images/logo/logo_1.png"
                    alt="log"
                    class="w-logo-sm lg:w-auto py-2"
                  />
                </Link>
              </div>
              <div class="hidden lg:block lg:col-start-3 lg:col-span-7">
                <ul class="nav-list flex justify-center">
                  <li class="nav-item group">
                    <Link
                      to="/"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item group">
                    <Link
                      to="/aboutus"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      About Us
                    </Link>
                  </li>
                  <li class="nav-item group">
                    <Link
                      to="#"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Bible School
                    </Link>
                  </li>
                  <li class="nav-item group relative">
                    <Link
                      to="instructor-dashboard.html"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Partner
                    </Link>
                  </li>
                  <li class="nav-item group relative">
                    <Link
                      to="../ecommerce/shop.html"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="lg:col-start-10 lg:col-span-3">
                <ul class="relative nav-list flex justify-end items-center">
                  <li class="px-5 lg:px-10px 2xl:px-5 lg:py-4 2xl:py-26px 3xl:py-9 group">
                    <div
                      class="dropdown absolute top-full right-0 lg:right-8 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark"></div>
                    </div>
                  </li>
                  <li class="hidden lg:block">
                    <Link
                      to="../../login.html"
                      class="text-size-12 2xl:text-size-15 px-35px py-2 text-secondaryColor hover:text-whiteColor bg-transparent  hover:bg-primaryColor border border-borderColor1 rounded-standard font-semibold mr-[7px] 2xl:mr-15px dark:text-blackColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor dark:hover:border-primaryColor"
                    >
                      {/* <i class="icofont-user-alt-5"></i> */}
                      Donation
                    </Link>
                  </li>
                  <li class="hidden lg:block">
                    <Link
                      to="/login"
                      class="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-35px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                    >
                      LOGIN
                    </Link>
                  </li>
                  <li class="block lg:hidden">
                    <button class="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor">
                      <i class="icofont-navigation-menu"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="mobile-menu w-mobile-menu-sm md:w-mobile-menu-lg fixed top-0 -right-[280px] md:-right-[330px] transition-all duration-500 w-mobile-menu h-full shadow-dropdown-secodary bg-whiteColor dark:bg-whiteColor-dark z-high block lg:hidden">
        <button class="close-mobile-menu text-lg bg-darkdeep1 hover:bg-secondaryColor text-white px-[11px] py-[6px] absolute top-0 right-full hidden">
          <i class="icofont icofont-close-line"></i>
        </button>

        <div class="px-5 md:px-30px pt-5 md:pt-10 pb-50px h-full overflow-y-auto">
          <div class="pb-10 border-b border-borderColor dark:border-borderColor-dark">
            <form class="flex justify-between items-center w-full bg-whitegrey2 dark:bg-whitegrey2-dark px-15px py-[11px]">
              <input
                type="text"
                placeholder="Search entire store..."
                class="bg-transparent w-4/5 focus:outline-none text-sm text-darkdeep1 dark:text-blackColor-dark"
              />
              <button class="block text-lg text-darkdeep1 hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-secondaryColor">
                <i class="icofont icofont-search-2"></i>
              </button>
            </form>
          </div>

          <div class="pt-8 pb-6 border-b border-borderColor dark:border-borderColor-dark">
            <ul class="accordion-container">
              <li class="accordion">
                <div class="flex items-center justify-between">
                  <Link
                    class="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="../../index.html"
                  >
                    Home
                  </Link>
                  <button class="accordion-controller px-3 py-4">
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                  </button>
                </div>

                <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                  <div class="content-wrapper">
                    <ul class="accordion-container">
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="../../index.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Home Light
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                          </button>
                        </div>

                        <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../../index.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Home (Default)
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../home-2.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Elegant
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-3.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-4.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic LMS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-5.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Online Course
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-6.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Marketplace
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-7.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  University
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-8.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  ECommerce
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-9.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Kindergarten
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-10.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Machine Learning
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-11.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Single Course
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="../../index-dark.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Home Dark
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                          </button>
                        </div>

                        <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../../index-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Home Default (Dark)
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../home-2-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Elegant (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-3-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-4-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic LMS (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-5-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Online Course (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-6-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Marketplace (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-7-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  University (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-8-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  ECommerce (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-9-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Kindergarten (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-10-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Machine Learning (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../home-11-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Single Course (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="accordion">
                <div class="flex items-center justify-between">
                  <Link
                    class="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="#"
                  >
                    Pages
                  </Link>
                  <button class="accordion-controller px-3 py-4">
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                  </button>
                </div>
                <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                  <div class="content-wrapper">
                    <ul class="accordion-container">
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 1
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>

                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../../about.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  About
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../about-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  About (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../blog.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../blog-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../blog-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../blog-details-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block Details (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 2
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../../error.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Error 404
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../error-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Error (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../event-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Event Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../zoom/zoom-meetings.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Zoom
                                  <span class="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                    Online Call
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../zoom/zoom-meetings-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Zoom Meeting (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../zoom/zoom-meeting-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Zoom Meeting Details
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 3
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../zoom/zoom-meeting-details-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Meeting Details (Dark)
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../login.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Login
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../login-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Login (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../maintenance.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Maintenance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../maintenance-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Maintenance (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Term & Condition
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 4
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Term & Condition (Dark)
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Privacy Policy
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Privacy Policy (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Success Stories
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Success Stories (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Work Policy
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#" class="pl-15px pt-3 pb-7px">
                          <img
                            class="w-full"
                            src="../../assets/images/mega/mega_menu_2.png"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="accordion">
                <div class="flex items-center justify-between">
                  <Link
                    class="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="../../course.html"
                  >
                    Courses
                  </Link>
                  <button class="accordion-controller px-3 py-4">
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                  </button>
                </div>
                <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                  <div class="content-wrapper">
                    <ul class="accordion-container">
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 1
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../../course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Grid
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../course-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Grid (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Grid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-grid-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Grid (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-list.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course List
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-list-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course List (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 2
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../../course-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../../course-details-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-details-2.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details 2
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-details-2-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Details 2 (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-details-3.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details 3
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../course-details-3-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Details 3 (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="#"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Get Started 3
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../dashboards/become-an-instructor.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Become An Instructor
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../dashboards/create-course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Create Course
                                  <span class="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                    Career
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../instructor.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Instructor
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../instructor-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Instructor (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../instructor-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Instructor Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../../lesson.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Lesson
                                  <span class="px-15px py-5px text-secondaryColor bg-whitegrey3 text-xs rounded ml-5px">
                                    New
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li>
                        <Link to="#" class="pl-15px pt-3 pb-7px">
                          <img
                            class="w-full"
                            src="../../assets/images/mega/mega_menu_1.png"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="accordion">
                <div class="flex items-center justify-between">
                  <Link
                    class="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="instructor-dashboard.html"
                  >
                    Dashboard
                  </Link>
                  <button class="accordion-controller px-3 py-4">
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                  </button>
                </div>
                <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                  <div class="content-wrapper">
                    <ul class="accordion-container">
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="../dashboards/admin-dashboard.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Admin
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../dashboards/admin-dashboard.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Admin Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../dashboards/admin-profile.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Admin Profile
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/admin-message.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Message
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/admin-course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Courses
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/admin-reviews.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Review
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/admin-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Admin Quiz
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/admin-settings.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Settings
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="instructor-dashboard.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Instructor
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="instructor-dashboard.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Inst. Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="instructor-profile.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Inst. Profile
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-message.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Message
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-wishlist.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-reviews.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Review
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-my-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  My Quiz
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-order-history.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Order History
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  My Courses
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-announcments.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Announcements
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Quiz Attempts
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-assignments.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Assignments
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="instructor-settings.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Settings
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="accordion">
                        <div class="flex items-center justify-between">
                          <Link
                            to="../dashboards/student-dashboard.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Student
                          </Link>
                          <button class="accordion-controller px-3 py-4">
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                            <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-300"></span>
                          </button>
                        </div>
                        <div class="accordion-content h-0 overflow-hidden transition-all duration-300">
                          <div class="content-wrapper">
                            <ul>
                              <li>
                                <Link
                                  to="../dashboards/student-dashboard.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link
                                  to="../dashboards/student-profile.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Profile
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-message.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Message
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-enrolled-courses.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Enrolled Courses
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-wishlist.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-reviews.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Review
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-my-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  My Quiz
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-assignments.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Assignment
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="../dashboards/student-settings.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Settings
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="accordion">
                <div class="flex items-center justify-between">
                  <Link
                    class="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="../ecommerce/shop.html"
                  >
                    ECommerce
                  </Link>
                  <button class="accordion-controller px-3 py-4">
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor"></span>
                    <span class="w-[10px] h-[1px] bg-darkdeep1 block dark:bg-whiteColor rotate-90 -mt-[1px] transition-all duration-500"></span>
                  </button>
                </div>
                <div class="accordion-content h-0 overflow-hidden transition-all duration-500">
                  <div class="content-wrapper">
                    <ul>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link
                            to="../ecommerce/shop.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Shop
                            <span class="px-15px py-5px text-primaryColor bg-whitegrey3 text-xs rounded ml-5px">
                              Online Store
                            </span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link
                            to="../ecommerce/product-details.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Product Details
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link
                            to="../ecommerce/cart.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Cart
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link
                            to="../ecommerce/checkout.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Checkout
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link
                            to="../ecommerce/wishlist.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Wishlist
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <ul class="accordion-container mt-9 mb-30px pb-9 border-b border-borderColor dark:border-borderColor-dark">
              <li class="accordion group">
                <div class="accordion-controller flex items-center justify-between">
                  <Link
                    class="leading-1 text-darkdeep1 font-medium group-hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="#"
                  >
                    My Account
                  </Link>
                  <button class="px-3 py-1">
                    <i class="icofont-thin-down text-size-15 text-darkdeep1 group-hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                  </button>
                </div>
                <div class="accordion-content h-0 overflow-hidden transition-all duration-500 shadow-standard">
                  <div class="content-wrapper">
                    <ul>
                      <li>
                        <div class="flex items-center gap-1">
                          <Link
                            to="../../login.html"
                            class="leading-1 text-darkdeep1 text-sm pl-30px pt-7 pb-3 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Login
                          </Link>

                          <Link
                            to="../../login.html"
                            class="leading-1 text-darkdeep1 text-sm pr-30px pt-7 pb-4 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            <span>/</span> Create Account
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link
                            to="../../login.html"
                            class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            My Account
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul class="flex gap-6 items-center mb-5">
              <li>
                <Link class="facebook" to="#">
                  <i class="icofont icofont-facebook text-fb-color dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link class="twitter" to="#">
                  <i class="icofont icofont-twitter text-twiter-color dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link class="pinterest" to="#">
                  <i class="icofont icofont-pinterest dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link class="instagram" to="#">
                  <i class="icofont icofont-instagram dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link class="google" to="#">
                  <i class="icofont icofont-youtube-play dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
