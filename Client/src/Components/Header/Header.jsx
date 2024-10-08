import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div class="bg-blackColor2 dark:bg-lightGrey10-dark hidden lg:block">
        <div class="container 3xl:container-secondary-lg 4xl:container mx-auto text-whiteColor text-size-12 xl:text-sm py-5px xl:py-9px">
          <div class="flex justify-between items-center">
            <div>
              <p>Call Us: +1 310-844-4780 - Mail Us: elshaddaiapostlicmission@gmail.com</p>
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
                    <Link  class="hover:text-primaryColor" to ="#">
                      <i class="icofont-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link  class="hover:text-primaryColor" to ="#">
                      <i class="icofont-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link  class="hover:text-primaryColor" to ="#">
                      <i class="icofont-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link  class="hover:text-primaryColor" to ="#">
                      <i class="icofont-youtube-play"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark">
        <nav>
          <div class="py-15px lg:py-0 px-15px lg:container 3xl:container-secondary-lg 4xl:container mx-auto relative">
            <div class="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px">
              <div class="lg:col-start-1 lg:col-span-2">
                <Link  to ="../../index.html" class="block">
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
                      to ="/"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Home
                      <i class="icofont-rounded-down"></i>
                    </Link>
                    <div
                      class="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="tab container 3xl:container2-lg 4xl:container shadow-dropdown px-30px mx-auto xl:px-30px py-15px max-h-dropdown 3xl:h-2000 xl:overflow-y-scroll rounded-standard bg-white dark:bg-whiteColor-dark">
                        <div class="tab-links grid grid-cols-2 gap-22px text-blackColor text-lg font-semibold font-hind">
                          <button class="py-3 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-white dark:bg-whiteColor-dark dark:hover:bg-whiteColor-dark hover:bg-white relative group/btn shadow-bottom hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard">
                            <span class="absolute w-full h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                            Light
                          </button>
                          <button class="py-3 hover:text-primaryColor dark:hover:text-primaryColor dark:text-whiteColor bg-lightGrey7 dark:bg-lightGrey7-dark hover:bg-white dark:hover:bg-whiteColor-dark relative group/btn hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard">
                            <span class="absolute w-0 h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                            Dark
                          </button>
                        </div>

                        <div class="tab-contents">
                          <div
                            id="light-demos"
                            class="block opacity-100 transition-opacity duration-150 ease-linear"
                          >
                            <ul
                              id="light-list"
                              class="grid grid-cols-5 gap-30px pt-30px pb-15px"
                            >
                              <li>
                                <Link 
                                  to ="../../index.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-1.png"
                                    class="w-full"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Default)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-2.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-2.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Elegant)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-3.html"
                                  class="overflow-hidden group/light relative block box-border shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard"
                                >
                                  <img
                                    src="../../assets/images/mega/home-3.png"
                                    alt=""
                                    class="w-full"
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Classic)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-4.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega//home-4.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Classic LMS)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-5.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega//home-5.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Online Course)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-6.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-5px"
                                >
                                  <img
                                    src="../../assets/images/mega/home-6.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Marketplace)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-7.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-7.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (University)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-8.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-8.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (eCommerce)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-9.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-9.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Kindergarten)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-10.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-10.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Machine Learning)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-11.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-11.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Single Course)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 1
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 2
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 3
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 4
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div
                            id="dark-demos"
                            class="hidden opacity-0 transition-opacity duration-150 ease-linear"
                          >
                            <ul
                              id="dark-list"
                              class="grid grid-cols-5 gap-30px pt-30px pb-15px"
                            >
                              <li>
                                <Link 
                                  to ="../../index-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-1-dark.png"
                                    class="w-full"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Default)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-2-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-2-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Elegant)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-3-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-3-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Classic)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-4-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-4-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Classic LMS)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-5-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-5-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Online Course)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-6-dark.html"
                                  class="overflow-hidden group relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-5px"
                                >
                                  <img
                                    src="../../assets/images/mega/home-6-dark.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Marketplace)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-7-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-7-dark.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (University)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-8-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-8-dark.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (eCommerce)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-9-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-9-dark.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Kindergarten)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-10-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-10-dark.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Machine Learning)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-11-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/home-11-dark.png"
                                    alt=""
                                  />
                                  <span class="bg-secondaryColor text-xs px-15px py-5px leading-1 text-white absolute top-5px left-5px rounded-standard">
                                    New
                                  </span>
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Home (Single Course)
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-11-dark.html"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 1
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 2
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 3
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="overflow-hidden group/light relative block shadow-dropdown-card hover:shadow-dropdown-card-hover hover:-translate-y-[5px] rounded-standard dark:shadow-dropdown-card-dark"
                                >
                                  <img
                                    src="../../assets/images/mega/coming-dark.png"
                                    alt=""
                                  />
                                  <span class="absolute left-0 w-full top-full group-hover/light:-translate-y-full bg-primaryColor text-sm leading-[1] p-10px text-center font-semibold text-whiteColor">
                                    Layout Coming Soon 4
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item group">
                    <Link 
                      to ="/aboutus"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      About us
                      <i class="icofont-rounded-down"></i>
                    </Link>
                    <div
                      class="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="container 3xl:container2-lg 4xl:container w-2000 shadow-dropdown px-30px mx-auto xl:px-30px py-30px rounded-standard bg-white dark:bg-whiteColor-dark">
                        <div class="grid grid-cols-4 gap-x-30px">
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 1
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="../../about.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  About
                                  <span class="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                    Sale Everything
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../about-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  About (Dark)
                                  <span class="text-size-12 font-semibold text-secondaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                    New
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Blog
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Blog (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog-details.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Blog Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog-details-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Blog Details (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 2
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="../../error.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Error
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../error-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Error (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../event-details.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Event Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../zoom/zoom-meetings.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Zoom
                                  <span class="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                    Online Call
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../zoom/zoom-meetings-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Zoom Meeting (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../zoom/zoom-meeting-details.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Zoom Meeting Details
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 3
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="../zoom/zoom-meeting-details-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Meeting Details (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../login.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Login
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../login-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Login (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../maintenance.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Maintenance
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../maintenance-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Maintenance (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Terms & Condition
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 4
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="#"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Terms & Condition (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../contact.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Contact
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../contact-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Contact (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Success Stories
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Success Stories (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Work Policy
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="pt-30px">
                          <img
                            src="../../assets/images/mega/mega_menu_2.png"
                            alt="Mega Menu"
                            class="w-full rounded-standard"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item group">
                    <Link 
                      to ="#"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Bible School
                      <i class="icofont-rounded-down"></i>
                    </Link>
                    <div
                      class="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="container 3xl:container2-lg 4xl:container w-2000 shadow-dropdown px-30px mx-auto xl:px-30px py-30px rounded-standard bg-white dark:bg-whiteColor-dark">
                        <div class="grid grid-cols-4 gap-x-30px">
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 1
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="../../course.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Grid
                                  <span class="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                    All Courses
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Grid (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Grid
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-grid-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Grid (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-list.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course List
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-list-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course List (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 2
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="../../course-details.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Details (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-2.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Details 2
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-2-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Details 2 (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-3.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Coures Details 3
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-3-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Details 3 (Dark)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 class="text-lg text-blackColor font-semibold border-b border-borderColor dark:text-blackColor-dark p-10px mb-10px">
                              Get Started 3
                            </h3>
                            <ul>
                              <li>
                                <Link 
                                  to ="../dashboards/become-an-instructor.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Become An Instructor
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/create-course.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Careate Course
                                  <span class="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded">
                                    Career
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../instructor.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Instructor
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../instructor-dark.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Instructor (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../instructor-details.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Instructor Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../lesson.html"
                                  class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor p-10px block hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-whiteColor dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                                >
                                  Course Lesson
                                  <span class="text-size-12 font-semibold text-secondaryColor bg-whitegrey3 px-15px py-5px ml-5px rounded">
                                    New
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="../../assets/images/mega/mega_menu_1.png"
                              alt="Mega Menu"
                              class="w-full rounded-standard"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item group relative">
                    <Link 
                      to ="instructor-dashboard.html"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Partner
                      <i class="icofont-rounded-down"></i>
                    </Link>
                    <div
                      class="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                        <ul>
                          <li class="relative group/nested">
                            <Link 
                              to ="../dashboards/admin-dashboard.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg flex justify-between items-center dark:bg-whiteColor-dark dark:text-contentColor-dark dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                            >
                              Admin <i class="icofont-rounded-right"></i>
                            </Link>

                            <div
                              class="nested-dropdown absolute left-full top-0 z-50 hidden opacity-0 group-hover/nested:block group-hover/nested:opacity-100"
                              style={{ transition: "0.3s" }}
                            >
                              <div class="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                <ul>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-dashboard.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Admin Dashboard
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-profile.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Admin Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-message.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Message
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-course.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Courses
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-reviews.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Review
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-quiz-attempts.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Admin Quiz
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/admin-settings.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Setting
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li class="relative group/nested">
                            <Link 
                              to ="instructor-dashboard.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg flex justify-between items-center dark:bg-whiteColor-dark dark:text-contentColor-dark dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                            >
                              Instructor <i class="icofont-rounded-right"></i>
                            </Link>

                            <div
                              class="nested-dropdown absolute left-full top-0 z-50 hidden opacity-0 group-hover/nested:block group-hover/nested:opacity-100"
                              style={{ transition: "0.3s" }}
                            >
                              <div class="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                <ul>
                                  <li>
                                    <Link 
                                      to ="instructor-dashboard.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Ins. Dashboard
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-profile.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Ins. Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-message.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Message
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-wishlist.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Wishlist
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-reviews.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Review
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-my-quiz-attempts.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      My Quiz
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-order-history.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Order History
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-course.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      My Courses
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-announcments.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Announcements
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-quiz-attempts.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Quiz Attempts
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-assignments.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Assignment
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="instructor-settings.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Settings
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li class="relative group/nested">
                            <Link 
                              to ="../dashboards/student-dashboard.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg flex justify-between items-center dark:bg-whiteColor-dark dark:text-contentColor-dark dark:hover:bg-whitegrey1-dark dark:hover:text-primaryColor"
                            >
                              Student <i class="icofont-rounded-right"></i>
                            </Link>

                            <div
                              class="nested-dropdown absolute left-full top-0 z-50 hidden opacity-0 group-hover/nested:block group-hover/nested:opacity-100"
                              style={{ transition: "0.3s" }}
                            >
                              <div class="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                                <ul>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-dashboard.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Dashboard
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-profile.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-message.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Message
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-enrolled-courses.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Enrolled Courses
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-wishlist.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Wishlist
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-reviews.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Review
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-my-quiz-attempts.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      My Quiz
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-assignments.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Assignment
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      to ="../dashboards/student-settings.html"
                                      class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                                    >
                                      Setting
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
                  <li class="nav-item group relative">
                    <Link 
                      to ="../ecommerce/shop.html"
                      class="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                    >
                      Dashboard
                      <i class="icofont-rounded-down"></i>
                    </Link>

                    <div
                      class="dropdown absolute left-0 translate-y-10 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="shadow-dropdown max-w-dropdown2 w-2000 py-14px rounded-standard bg-white dark:bg-whiteColor-dark">
                        <ul>
                          <li>
                            <Link 
                              to ="../ecommerce/shop.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                            >
                              Shop
                              <span class="text-size-12 font-semibold text-primaryColor bg-whitegrey3 px-15px py-5px rounded">
                                Online Store
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to ="../ecommerce/product-details.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                            >
                              Product Details
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to ="../ecommerce/cart.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                            >
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to ="../ecommerce/checkout.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                            >
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to ="../ecommerce/wishlist.html"
                              class="text-sm 2xl:text-base font-semibold text-contentColor border-l-2 border-transparent transition duration-300 hover:border-primaryColor px-25px py-10px hover:bg-whitegrey1 block hover:text-primaryColor leading-sm lg:leading-lg 2xl:leading-lg dark:text-contentColor-dark dark:hover:text-primaryColor dark:hover:bg-whitegrey1-dark"
                            >
                              Wishlist
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="lg:col-start-10 lg:col-span-3">
                <ul class="relative nav-list flex justify-end items-center">
                  <li class="px-5 lg:px-10px 2xl:px-5 lg:py-4 2xl:py-26px 3xl:py-9 group">
                    <Link  to ="../ecommerce/cart.html" class="relative block">
                      <i class="icofont-cart-alt text-2xl text-blackColor group-hover:text-secondaryColor transition-all duration-300 dark:text-blackColor-dark"></i>
                      <span class="absolute -top-1 2xl:-top-[5px] -right-[10px] lg:right-3/4 2xl:-right-[10px] text-[10px] font-medium text-white dark:text-whiteColor-dark bg-secondaryColor px-1 py-[2px] leading-1 rounded-full z-50 block">
                        3
                      </span>
                    </Link>

                    <div
                      class="dropdown absolute top-full right-0 lg:right-8 z-medium hidden opacity-0"
                      style={{ transition: "0.3s" }}
                    >
                      <div class="shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark">
                        {/* <ul class="flex flex-col gap-y-5 pb-5 mb-30px border-b border-borderColor dark:border-borderColor-dark">
                          <li class="relative flex gap-x-15px items-center">
                            <Link  to ="../../course-details.html">
                              <img
                                src="../../assets/images/grid/cart1.jpg"
                                alt="photo"
                                class="w-card-img py-[3px]"
                              />
                            </Link>
                            <div>
                              <Link 
                                to ="../../course-details.html"
                                class="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                              >
                                web dictionary
                              </Link>
                              <p class="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                1 x
                                <span class="text-secondaryColor">$ 80.00</span>
                              </p>
                            </div>

                            <button class="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                              <i class="icofont-close-line"></i>
                            </button>
                          </li>
                          <li class="relative flex gap-x-15px items-center">
                            <Link  to ="../../course-details.html">
                              <img
                                src="../../assets/images/grid/cart2.jpg"
                                alt="photo"
                                class="w-card-img py-[3px]"
                              />
                            </Link>
                            <div>
                              <Link 
                                to ="../../course-details.html"
                                class="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                              >
                                Design Minois
                              </Link>
                              <p class="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                1 x
                                <span class="text-secondaryColor">$ 60.00</span>
                              </p>
                            </div>

                            <button class="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                              <i class="icofont-close-line"></i>
                            </button>
                          </li>
                          <li class="relative flex gap-x-15px items-center">
                            <Link  to ="../../course-details.html">
                              <img
                                src="../../assets/images/grid/cart3.jpg"
                                alt="photo"
                                class="w-card-img py-[3px]"
                              />
                            </Link>
                            <div>
                              <Link 
                                to ="../../course-details.html"
                                class="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                              >
                                Crash Course
                              </Link>
                              <p class="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                1 x
                                <span class="text-secondaryColor">$ 70.00</span>
                              </p>
                            </div>

                            <button class="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                              <i class="icofont-close-line"></i>
                            </button>
                          </li>
                        </ul> */}
                        {/* <div>
                          <p class="text-size-17 text-contentColor dark:text-contentColor-dark pb-5 flex justify-between">
                            Total Price:
                            <span class="font-bold text-secondaryColor">
                              $ 210.00
                            </span>
                          </p>
                        </div> */}

                        {/* <div class="flex flex-col gap-y-5">
                          <Link 
                            to ="../ecommerce/cart.html"
                            class="text-sm font-bold text-contentColor dark:text-contentColor-dark hover:text-whiteColor hover:bg-secondaryColor text-center py-10px border border-secondaryColor"
                          >
                            View Cart
                          </Link>
                          <Link 
                            to ="../ecommerce/checkout.html"
                            class="text-sm font-bold bg-darkblack dark:bg-darkblack-dark text-whiteColor dark:text-whiteColor-dark hover:bg-secondaryColor dark:hover:bg-secondaryColor text-center py-10px"
                          >
                            Checkout
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </li>
                  <li class="hidden lg:block">
                    <Link 
                      to ="../../login.html"
                      class="text-size-12 2xl:text-size-15 px-15px py-2 text-blackColor hover:text-whiteColor bg-whiteColor block hover:bg-primaryColor border border-borderColor1 rounded-standard font-semibold mr-[7px] 2xl:mr-15px dark:text-blackColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor dark:hover:border-primaryColor"
                    >
                      {/* <i class="icofont-user-alt-5"></i> */}
                      Donation
                    </Link>
                  </li>
                  <li class="hidden lg:block">
                    <Link 
                      to ="/login"
                      class="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
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
                    to ="../../index.html"
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
                            to ="../../index.html"
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
                                  to ="../../index.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Home (Default)
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../home-2.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Elegant
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-3.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-4.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic LMS
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-5.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Online Course
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-6.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Marketplace
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-7.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  University
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-8.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  ECommerce
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-9.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Kindergarten
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-10.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Machine Learning
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-11.html"
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
                            to ="../../index-dark.html"
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
                                  to ="../../index-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Home Default (Dark)
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../home-2-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Elegant (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-3-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-4-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Classic LMS (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-5-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Online Course (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-6-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Marketplace (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-7-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  University (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-8-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  ECommerce (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-9-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Kindergarten (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-10-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Machine Learning (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../home-11-dark.html"
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
                    to ="#"
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
                            to ="#"
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
                                  to ="../../about.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  About
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../about-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  About (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Block Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../blog-details-dark.html"
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
                            to ="#"
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
                                  to ="../../error.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Error 404
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../error-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Error (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../event-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Event Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../zoom/zoom-meetings.html"
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
                                  to ="../zoom/zoom-meetings-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Zoom Meeting (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../zoom/zoom-meeting-details.html"
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
                            to ="#"
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
                                  to ="../zoom/zoom-meeting-details-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Meeting Details (Dark)
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../login.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Login
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../login-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Login (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../maintenance.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Maintenance
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../maintenance-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Maintenance (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
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
                            to ="#"
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
                                  to ="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Term & Condition (Dark)
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Privacy Policy
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Privacy Policy (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Success Stories
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Success Stories (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="#"
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
                        <Link  to ="#" class="pl-15px pt-3 pb-7px">
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
                    to ="../../course.html"
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
                            to ="#"
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
                                  to ="../../course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Grid
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../course-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Grid (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Grid
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-grid-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Grid (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-list.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course List
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-list-dark.html"
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
                            to ="#"
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
                                  to ="../../course-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../../course-details-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-2.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details 2
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-2-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Details 2 (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-3.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Course Details 3
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../course-details-3-dark.html"
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
                            to ="#"
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
                                  to ="../dashboards/become-an-instructor.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Become An Instructor
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../dashboards/create-course.html"
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
                                  to ="../../instructor.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Instructor
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../instructor-dark.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Instructor (Dark)
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../instructor-details.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Instructor Details
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../../lesson.html"
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
                        <Link  to ="#" class="pl-15px pt-3 pb-7px">
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
                    to ="instructor-dashboard.html"
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
                            to ="../dashboards/admin-dashboard.html"
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
                                  to ="../dashboards/admin-dashboard.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Admin Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../dashboards/admin-profile.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Admin Profile
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/admin-message.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Message
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/admin-course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Courses
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/admin-reviews.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Review
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/admin-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Admin Quiz
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/admin-settings.html"
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
                            to ="instructor-dashboard.html"
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
                                  to ="instructor-dashboard.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Inst. Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="instructor-profile.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Inst. Profile
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-message.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Message
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-wishlist.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-reviews.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Review
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-my-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  My Quiz
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-order-history.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Order History
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-course.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  My Courses
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-announcments.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Announcements
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Quiz Attempts
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-assignments.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Assignments
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="instructor-settings.html"
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
                            to ="../dashboards/student-dashboard.html"
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
                                  to ="../dashboards/student-dashboard.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link 
                                  to ="../dashboards/student-profile.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Profile
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-message.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Message
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-enrolled-courses.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Enrolled Courses
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-wishlist.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Wishlist
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-reviews.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Review
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-my-quiz-attempts.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  My Quiz
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-assignments.html"
                                  class="leading-1 text-darkdeep1 text-sm pl-30px pt-3 pb-7px font-light hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                                >
                                  Assignment
                                </Link>
                              </li>
                              <li>
                                <Link 
                                  to ="../dashboards/student-settings.html"
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
                    to ="../ecommerce/shop.html"
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
                            to ="../ecommerce/shop.html"
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
                            to ="../ecommerce/product-details.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Product Details
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link 
                            to ="../ecommerce/cart.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Cart
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link 
                            to ="../ecommerce/checkout.html"
                            class="leading-1 text-darkdeep1 text-sm pl-15px pt-3 pb-7px font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Checkout
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link 
                            to ="../ecommerce/wishlist.html"
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
                    to ="#"
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
                            to ="../../login.html"
                            class="leading-1 text-darkdeep1 text-sm pl-30px pt-7 pb-3 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            Login
                          </Link>

                          <Link 
                            to ="../../login.html"
                            class="leading-1 text-darkdeep1 text-sm pr-30px pt-7 pb-4 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                          >
                            <span>/</span> Create Account
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center justify-between">
                          <Link 
                            to ="../../login.html"
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
                <Link  class="facebook" to ="#">
                  <i class="icofont icofont-facebook text-fb-color dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link  class="twitter" to ="#">
                  <i class="icofont icofont-twitter text-twiter-color dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link  class="pinterest" to ="#">
                  <i class="icofont icofont-pinterest dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link  class="instagram" to ="#">
                  <i class="icofont icofont-instagram dark:text-whiteColor dark:hover:text-secondaryColor"></i>
                </Link>
              </li>
              <li>
                <Link  class="google" to ="#">
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
