import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-darkblack">
        <div className="container 3xl:container-secondary-lg 4xl:container mx-auto pt-65px pb-5 lg:pb-10">
          {/*  footer top or subscription */}
          <section>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-30px md:gap-y-0 items-center pb-45px border-b border-darkcolor">
              <div data-aos="fade-up">
                <h4 class="text-4xl md:text-size-25 lg:text-size-40 font-bold text-whiteColor leading-50px md:leading-10 lg:leading-16">
                  Still You Need Our
                  <span class="text-primaryColor">Support</span> ?
                </h4>
                <p class="text-whiteColor text-opacity-65">
                  Don’t wait make a smart & logical quote here. Its pretty easy.
                </p>
              </div>
              <div data-aos="fade-up">
                <form class="max-w-form-xl md:max-w-form-md lg:max-w-form-lg xl:max-w-form-xl 2xl:max-w-form-2xl bg-deepgray ml-auto rounded relative">
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    class="text-whiteColor h-62px pl-15px focus:outline-none border border-deepgray focus:border-whitegrey bg-transparent rounded w-full"
                  />
                  <button
                    type="submit"
                    class="px-3 md:px-10px lg:px-5 bg-primaryColor hover:bg-deepgray text-xs lg:text-size-15 text-whiteColor border border-primaryColor block rounded absolute right-0 top-0 h-full"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/*  footer main */}
          <section>
            <div class="grid grid-cols-12 gap-30px md:gap-y-5 lg:gap-y-0 pt-60px pb-50px md:pt-30px md:pb-30px lg:pt-110px lg:pb-20">
              {/*  left */}
              <div
                class="lg:col-span-6 md:col-span-6 col-start-6 "
                data-aos="fade-up"
              >
                <h4 class="text-size-22 font-bold text-whiteColor mb-3">
                  About us
                </h4>
                <p class="text-base lg:text-sm 2xl:text-base text-darkgray mb-30px leading-1.8 2xl:leading-1.8">
                  Our website has become an essential tool in this mission,
                  serving as a global platform to disseminate the message of the
                  Gospel. It allows us to reach people in different nations and
                  cultures, breaking barriers and uniting believers in their
                  pursuit of spiritual growth.
                </p>
                <div class="flex items-center">
                  <div>
                    <i class="icofont-clock-time text-3xl text-whiteColor h-78px w-78px bg-primaryColor leading-78px mr-22px block text-center"></i>
                  </div>
                  <div>
                    <h6 class="text-lg text-whiteColor font-medium leading-29px">
                      OPENING HOURES
                    </h6>
                    <p class="text-sm text-whiteColor text-opacity-60 mb-1">
                      Mon - Sat(8.00 - 6.00)
                    </p>
                    <p class="text-sm text-whiteColor text-opacity-60">
                      Sunday - Closed
                    </p>
                  </div>
                </div>
              </div>
              {/*  middle 1 */}
              <div class="lg:col-start-9 lg:col-span-3" data-aos="fade-up">
                <h4 class=" content-center text-size-22 font-bold text-whiteColor mb-3">
                  Useful Links
                </h4>
                <ul class="flex flex-col gap-y-3">
                  <li>
                    <Link 
                      to ="/"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="/about-us"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="/bible-school"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Bible School
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="/partners"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="/contact-us"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  middle 2 */}
              <div class="lg:col-start-12 lg:col-span-3" data-aos="fade-up">
                <h4 class="text-size-22 font-bold text-whiteColor mb-3 items-end">
                  Courses
                </h4>
                <ul class="flex flex-col gap-y-3">
                  <li>
                    <Link 
                      to ="#"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      ብክርስቶስ
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      መንፈስ ቅዱስ
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      ሰራተኛ
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      ውልድነት
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      ምስጢር
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/*  footer copyright  */}
          <div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-30px pt-10 items-center">
              <div class="lg:col-start-1 lg:col-span-3">
                <Link  to ="#">
                  <img src="./assets/images/logo/logo_2.png" alt="" />
                </Link>
              </div>

              <div class="lg:col-start-4 lg:col-span-6">
                <p class="text-whiteColor">
                  Copyright © <span class="text-primaryColor">2024 </span> by
                  edurock. All Rights Reserved.
                </p>
              </div>

              <div class="lg:col-start-10 lg:col-span-3">
                <ul class="flex gap-3 lg:gap-2 2xl:gap-3 lg:justify-end">
                  <li>
                    <Link 
                      to ="#"
                      class="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                    >
                      <i class="icofont-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                    >
                      <i class="icofont-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                    >
                      <i class="icofont-vimeo"></i>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                    >
                      <i class="icofont-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to ="#"
                      class="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center"
                    >
                      <i class="icofont-skype"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
