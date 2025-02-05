import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function WhatWeDo() {
   const { t } = useTranslation();
  return (
    <>
      <section>
        <div class="container 3xl:container-secondary-lg 4xl:container mx-auto py-10 md:py-50px lg:py-60px ">
          {/*   meeting thumbnail  */}
          <div data-aos="fade-up">
            <h3 class="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
              {t("whatWeDo.title")}
            </h3>
            <h1 class="text-3xl text-whiteColor md:text-size-35 lg:text-size-42 2xl:text-size-47 leading-10 md:leading-45px lg:leading-12 2xl:leading-50px dark:text-blackColor-dark font-bold mb-15px">
              {t("whatWeDo.subtitle")}
            </h1>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-30px">
            <div class="lg:col-start-1 lg:col-span-8 space-y-[35px]">
              <div data-aos="fade-up">
                {/*  meeting content  */}
                <div class="space-y-5">
                  <p
                    class="text-sm 2xl:text-lg text-darkdeep4 !leading-30px"
                    data-aos="fade-up"
                  >
                    {" "}
                    {t("whatWeDo.A")}
                    
                  </p>
                  <p
                    class="text-sm 2xl:text-lg text-darkdeep4 !leading-30px"
                    data-aos="fade-up"
                  >
                   {t("whatWeDo.B")}
                  </p>
                  <p
                    class="text-sm 2xl:text-lg text-darkdeep4 !leading-30px"
                    data-aos="fade-up"
                  >
                   {t("whatWeDo.C")}
                  </p>

                  <h4
                    class="text-2xl font-bold text-whiteColor dark:text-blackColor-dark mb-15px !leading-30px"
                    data-aos="fade-up"
                  >
                    Why Elshaddai Bible School Is Important ?
                  </h4>
                  <ul class="space-y-[15px]">
                    <li class="flex items-center group ">
                      <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p class="text-sm lg:text-xs 2xl:text-sm font-medium leading-25px lg:leading-21px 2xl:leading-25px max-w-[508px] text-contentColor dark:text-contentColor-dark">
                       {t("whatWeDo.D")}
                      </p>
                    </li>
                    <li class="flex items-center group">
                      <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p class="text-sm lg:text-xs 2xl:text-sm font-medium leading-25px lg:leading-21px 2xl:leading-25px max-w-[508px] text-contentColor dark:text-contentColor-dark">
                       {t("whatWeDo.E")}
                      </p>
                    </li>
                    <li class="flex items-center group">
                      <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p class="text-sm lg:text-xs 2xl:text-sm font-medium leading-25px lg:leading-21px 2xl:leading-25px max-w-[508px] text-contentColor dark:text-contentColor-dark">
                        {t("whatWeDo.F")}
                      </p>
                    </li>
                    <li class="flex items-center group">
                      <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p class="text-sm lg:text-xs 2xl:text-sm font-medium leading-25px lg:leading-21px 2xl:leading-25px max-w-[508px] text-contentColor dark:text-contentColor-dark">
                        {t("whatWeDo.G")}
                      </p>
                    </li>
                  </ul>

                  <p
                    class="text-sm 2xl:text-lg text-darkdeep4 !leading-30px"
                    data-aos="fade-up"
                  ></p>
                </div>
              </div>
            </div>
            {/*   blog sidebar  */}
            <div class="lg:col-start-9 lg:col-span-4">
              <div>
                {/*   enroll section  */}
                <div
                  class="py-33px px-25px shadow-event mb-30px bg-deepColor dark:bg-whiteColor-dark"
                  data-aos="fade-up"
                >
                  <ul>
                    <li class="flex items-center mb-4.5 pb-4.5 border-b border-borderColor dark:border-borderColor-dark">
                      <div>
                        <i class="icofont-teacher text-size-22 mr-10px text-whiteColor dark:text-blackColor-dark"></i>
                      </div>
                      <div class="flex-grow flex justify-between items-center text-whiteColor dark:text-blackColor-dark">
                        <p>Instructor:</p>
                        <a
                          class="font-bold text-whiteColor hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor"
                          href="../../instructor-details.html"
                        >
                          Pas. Temesghen Zerom
                        </a>
                      </div>
                    </li>

                    {/* <li class="flex items-center mb-4.5 pb-4.5 border-b border-borderColor dark:border-borderColor-dark">
                      <div>
                        <i class="icofont-calendar text-size-22 mr-10px text-whiteColor dark:text-blackColor-dark"></i>
                      </div>
                      <div class="flex-grow flex justify-between items-center text-whiteColor dark:text-blackColor-dark">
                        <p>Date:</p>
                        <p>10/06/2024</p>
                      </div>
                    </li> */}

                    <li class="flex items-center mb-4.5 pb-4.5 border-b border-borderColor dark:border-borderColor-dark">
                      <div>
                        <i class="icofont-document-folder text-size-22 mr-10px text-whiteColor dark:text-blackColor-dark"></i>
                      </div>
                      <div class="flex-grow flex justify-between items-center text-whiteColor dark:text-blackColor-dark">
                        <p>Graduated:</p>
                        <p>700+</p>
                      </div>
                    </li>

                    <li class="flex items-center mb-4.5 pb-4.5 border-b border-borderColor dark:border-borderColor-dark">
                      <div>
                        <i class="icofont-learn text-size-22 mr-10px text-whiteColor dark:text-blackColor-dark"></i>
                      </div>
                      <div class="flex-grow flex justify-between items-center text-whiteColor dark:text-blackColor-dark">
                        <p>Enrolled Now:</p>
                        <p>342 students</p>
                      </div>
                    </li>

                    <li class="flex items-center mb-4.5 pb-4.5 border-b border-borderColor dark:border-borderColor-dark">
                      <div>
                        <i class="icofont-globe-alt text-size-22 mr-10px text-whiteColor dark:text-blackColor-dark"></i>
                      </div>
                      <div class="flex-grow flex justify-between items-center text-whiteColor dark:text-blackColor-dark">
                        <p>Language:</p>
                        <p>Tigrigna</p>
                      </div>
                    </li>

                    <li class="flex items-center mb-4.5 pb-4.5 border-b border-borderColor dark:border-borderColor-dark">
                      <div>
                        <i class="icofont-certificate text-size-22 mr-10px text-whiteColor dark:text-blackColor-dark"></i>
                      </div>
                      <div class="flex-grow flex justify-between items-center text-whiteColor dark:text-blackColor-dark">
                        <p>Certificate:</p>
                        <p>Yes</p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <button
                      type="submit"
                      class="text-size-15 text-whiteColor bg-primaryColor px-14 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                    >
                      <Link to="/create-account">Sign Up Now</Link>
                    </button>
                  </div>
                </div>
                {/*   social area  */}
                {/* <div
                  class="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                  data-aos="fade-up"
                >
                  <h4 class="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                    Follow Us
                  </h4>
                  <div>
                    <ul class="flex gap-10px items-center">
                      <li>
                        <a
                          href="#"
                          class="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                        >
                          <i class="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                        >
                          <i class="icofont-youtube-play"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                        >
                          <i class="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                        >
                          <i class="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                        >
                          <i class="icofont-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
