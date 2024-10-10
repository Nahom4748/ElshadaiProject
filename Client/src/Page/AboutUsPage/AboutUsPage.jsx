import React from 'react'
import img_hero1 from '../../assets/images/herobanner/herobanner__1.png'
import AboutUs from '../../Components/Aboutus/AboutUs';

function AboutUsPage() {
  return (
    <>
      <section className="bg-transparent">
        {/*  banner section  */}
        <div className="bg-lightGrey1 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-50px md:py-20 lg:py-100px 2xl:pb-150px 2xl:pt-40.5">
          {/*  animated icons  */}
          <div>
            <img
              className="absolute left-0 bottom-0 md:left-[14px] lg:left-[50px] lg:bottom-[21px] 2xl:left-[165px] 2xl:bottom-[60px] animate-move-var z-10"
              src={img_hero1}
              alt=""
            />
            <img
              className="absolute left-0 top-0 lg:left-[50px] lg:top-[100px] animate-spin-slow"
              src="./assets/images/herobanner/herobanner__2.png"
              alt=""
            />
            <img
              className="absolute right-[30px] top-0 md:right-10 lg:right-[575px] 2xl:top-20 animate-move-var2 opacity-50 hidden md:block"
              src="./assets/images/herobanner/herobanner__3.png"
              alt=""
            />

            <img
              className="absolute right-[30px] top-[212px] md:right-10 md:top-[157px] lg:right-[45px] lg:top-[100px] animate-move-hor"
              src="./assets/images/herobanner/herobanner__5.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-whiteColor dark:text-blackColor-dark mb-7 md:mb-6 pt-3">
                About Us
              </h1>
              <ul className="flex gap-1 justify-center">
                <li>
                  <a
                    href="index.html"
                    className="text-lg text-lightGrey2 dark:text-blackColor2-dark"
                  >
                    Home <i className="icofont-simple-right"></i>
                  </a>
                </li>
                <li>
                  <span className="text-lg text-lightGrey2 dark:text-blackColor2-dark">
                    Course-Details
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <AboutUs/>
        <section>
          <div className="container 3xl:container-secondary-lg 4xl:container mx-auto pb-50px md:pb-70px lg:pb-20 2xl:pb-70px">
            {/*   overview tabs   */}
            <div data-aos="fade-up" className="tab">
              <div className="tab-links flex flex-wrap md:flex-nowrap mb-10px lg:mb-50px rounded gap-10px lg:gap-35px">
                <button className="is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 active">
                  About
                </button>

                <button className="is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300">
                  COURSE
                </button>

                <button className="is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300">
                  AWARDS
                </button>

                <button className="is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300">
                  EDUCATION
                </button>
              </div>
              <div className="tab-contents">
                <div>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. Ipsum generators
                    on the Internet tend to repeat predefined chunks as
                    necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from characteristic words etc.
                  </p>
                  <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    World best education site - (Computer engeenering)
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to useery
                  </p>
                  <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Web and user interface design - Development
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to useery
                  </p>

                  <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Interaction design - Animation
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to useery
                  </p>
                </div>

                <div className="hidden">
                  <div className="flex flex-col gap-30px">
                    {/*   card 1   */}
                    <div className="w-full group grid-item rounded">
                      <div className="tab-content-wrapper">
                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                          {/*   card image   */}
                          <div className="relative overflow-hidden w-full md:w-2/5">
                            <a href="course.html" className="w-full">
                              <img
                                src="./assets/images/grid/grid_1.png"
                                alt=""
                                className="w-full transition-all duration-300 scale-105 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold capitalize">
                                  Data & Tech
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2"></i>
                              </a>
                            </div>
                          </div>
                          {/*   card content   */}
                          <div className="w-full md:w-3/5">
                            <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                              <div className="grid grid-cols-2 mb-15px">
                                <div className="flex items-center">
                                  <div>
                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                                  </div>
                                  <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                      23 Lesson
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div>
                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                                  </div>
                                  <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                      1 hr 30 min
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <a
                                href="course-details.html"
                                className="text-xl 2xl:text-size-34 2xl:!leading-9 font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                              >
                                Become a product Manager learn the skills & job.
                              </a>
                              {/*   price   */}
                              <div className="text-lg font-semibold text-black-brerry-light font-inter mb-4">
                                $32.00
                                <del className="text-sm text-lightGrey4 font-semibold">
                                  / $67.00
                                </del>
                                <span className="ml-6 text-base font-semibold text-greencolor2">
                                  Free.
                                </span>
                              </div>
                              {/*   bottom   */}
                              <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                {/*   author and rating  */}
                                <div className="flex items-center flex-wrap">
                                  <div>
                                    <a
                                      href="instructor-details.html"
                                      className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                    >
                                      <img
                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                        src="./assets/images/grid/grid_small_1.jpg"
                                        alt=""
                                      />
                                      <span className="flex">Micle john</span>
                                    </a>
                                  </div>
                                  <div className="text-start md:text-end ml-35px">
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>

                                    <span className="text-xs text-lightGrey6">
                                      (44)
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <a
                                    className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                    href="course-details.html"
                                  >
                                    Know Details
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*   card 1   */}
                    <div className="w-full group grid-item rounded">
                      <div className="tab-content-wrapper">
                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                          {/*   card image   */}
                          <div className="relative overflow-hidden w-full md:w-2/5">
                            <a href="course.html" className="w-full">
                              <img
                                src="./assets/images/grid/grid_3.png"
                                alt=""
                                className="w-full transition-all duration-300 scale-105 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold capitalize">
                                  gridDevelopment
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2"></i>
                              </a>
                            </div>
                          </div>
                          {/*   card content   */}
                          <div className="w-full md:w-3/5">
                            <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                              <div className="grid grid-cols-2 mb-15px">
                                <div className="flex items-center">
                                  <div>
                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                                  </div>
                                  <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                      23 Lesson
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div>
                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                                  </div>
                                  <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                      1 hr 30 min
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <a
                                href="course-details.html"
                                className="text-xl 2xl:text-size-34 2xl:!leading-9 font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                              >
                                Strategy law and with for organization
                                Foundation
                              </a>
                              {/*   price   */}
                              <div className="text-lg font-semibold text-black-brerry-light font-inter mb-4">
                                $32.00
                                <del className="text-sm text-lightGrey4 font-semibold">
                                  / $67.00
                                </del>
                                <span className="ml-6 text-base font-semibold text-greencolor2">
                                  Free.
                                </span>
                              </div>
                              {/*   bottom   */}
                              <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                {/*   author and rating  */}
                                <div className="flex items-center flex-wrap">
                                  <div>
                                    <a
                                      href="instructor-details.html"
                                      className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                    >
                                      <img
                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                        src="./assets/images/grid/grid_small_1.jpg"
                                        alt=""
                                      />
                                      <span className="flex">Micle john</span>
                                    </a>
                                  </div>
                                  <div className="text-start md:text-end ml-35px">
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>

                                    <span className="text-xs text-lightGrey6">
                                      (44)
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <a
                                    className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                    href="course-details.html"
                                  >
                                    Know Details
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*   card 3   */}
                    <div className="w-full group grid-item rounded">
                      <div className="tab-content-wrapper">
                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                          {/*   card image   */}
                          <div className="relative overflow-hidden w-full md:w-2/5">
                            <a href="course.html" className="w-full">
                              <img
                                src="./assets/images/grid/grid_2.png"
                                alt=""
                                className="w-full transition-all duration-300 scale-105 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold capitalize">
                                  gridMechanical
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2"></i>
                              </a>
                            </div>
                          </div>
                          {/*   card content   */}
                          <div className="w-full md:w-3/5">
                            <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                              <div className="grid grid-cols-2 mb-15px">
                                <div className="flex items-center">
                                  <div>
                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                                  </div>
                                  <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                      23 Lesson
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div>
                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                                  </div>
                                  <div>
                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                      1 hr 30 min
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <a
                                href="course-details.html"
                                className="text-xl 2xl:text-size-34 2xl:!leading-9 font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                              >
                                Foundation course to under stand about softwere
                              </a>
                              {/*   price   */}
                              <div className="text-lg font-semibold text-black-brerry-light font-inter mb-4">
                                $32.00
                                <del className="text-sm text-lightGrey4 font-semibold">
                                  / $67.00
                                </del>
                                <span className="ml-6 text-base font-semibold text-greencolor2">
                                  Free.
                                </span>
                              </div>
                              {/*   bottom   */}
                              <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                {/*   author and rating  */}
                                <div className="flex items-center flex-wrap">
                                  <div>
                                    <a
                                      href="instructor-details.html"
                                      className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                    >
                                      <img
                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                        src="./assets/images/grid/grid_small_1.jpg"
                                        alt=""
                                      />
                                      <span className="flex">Micle john</span>
                                    </a>
                                  </div>
                                  <div className="text-start md:text-end ml-35px">
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>
                                    <i className="icofont-star text-size-15 text-yellow"></i>

                                    <span className="text-xs text-lightGrey6">
                                      (44)
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <a
                                    className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                    href="course-details.html"
                                  >
                                    Know Details
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*   certifications    */}
                <div className="hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px items-center">
                    {/*   card 1   */}
                    <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 gap-y-5 sm:gapy-y-0 group p-15px transition-all duration-300 shadow-experience bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded">
                      <div>
                        <img
                          src="./assets/images/about/award-1.jpg"
                          alt=""
                          className="w-full sm:w-48 md:w-40 lg:w-30 xl:w-148px 2xl:w-130px"
                        />
                      </div>
                      <div>
                        <h4 className="transition-all duration-300 text-contentColor group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="text-size-15 md:text-lg lg:text-xl 2xl:text-2xl font-semibold hover:text-secondaryColor mr-0 2xl:mr-10 mb-15px"
                          >
                            Forging relationships between national
                          </a>
                        </h4>
                        <div className="transition-all duration-300 text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="hover:text-secondaryColor"
                          >
                            Read More <i className="icofont-simple-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*   card 2   */}
                    <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 gap-y-5 sm:gapy-y-0 group p-15px transition-all duration-300 shadow-experience bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded">
                      <div>
                        <img
                          src="./assets/images/about/award-2.jpg"
                          alt=""
                          className="w-full sm:w-48 md:w-40 lg:w-30 xl:w-148px 2xl:w-130px"
                        />
                      </div>
                      <div>
                        <h4 className="transition-all duration-300 text-contentColor group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="text-size-15 md:text-lg lg:text-xl 2xl:text-2xl font-semibold hover:text-secondaryColor mr-0 2xl:mr-10 mb-15px"
                          >
                            Lorem ipsum dolor sit amet conse ctetur.
                          </a>
                        </h4>
                        <div className="transition-all duration-300 text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="hover:text-secondaryColor"
                          >
                            Read More <i className="icofont-simple-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*   card 3   */}
                    <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 gap-y-5 sm:gapy-y-0 group p-15px transition-all duration-300 shadow-experience bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded">
                      <div>
                        <img
                          src="./assets/images/about/award-3.jpg"
                          alt=""
                          className="w-full sm:w-48 md:w-40 lg:w-30 xl:w-148px 2xl:w-130px"
                        />
                      </div>
                      <div>
                        <h4 className="transition-all duration-300 text-contentColor group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="text-size-15 md:text-lg lg:text-xl 2xl:text-2xl font-semibold hover:text-secondaryColor mr-0 2xl:mr-10 mb-15px"
                          >
                            Forging relationships between national
                          </a>
                        </h4>
                        <div className="transition-all duration-300 text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="hover:text-secondaryColor"
                          >
                            Read More <i className="icofont-simple-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/*   card 4   */}
                    <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 gap-y-5 sm:gapy-y-0 group p-15px transition-all duration-300 shadow-experience bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded">
                      <div>
                        <img
                          src="./assets/images/about/award-4.jpg"
                          alt=""
                          className="w-full sm:w-48 md:w-40 lg:w-30 xl:w-148px 2xl:w-130px"
                        />
                      </div>
                      <div>
                        <h4 className="transition-all duration-300 text-contentColor group-hover:text-whiteColor dark:text-contentColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="text-size-15 md:text-lg lg:text-xl 2xl:text-2xl font-semibold hover:text-secondaryColor mr-0 2xl:mr-10 mb-15px"
                          >
                            Lorem ipsum dolor sit amet conse ctetur.
                          </a>
                        </h4>
                        <div className="transition-all duration-300 text-blackColor group-hover:text-whiteColor dark:text-blackColor-dark dark:group-hover:text-whiteColor-dark">
                          <a
                            href="event-details.html"
                            className="hover:text-secondaryColor"
                          >
                            Read More <i className="icofont-simple-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden">
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px"></p>
                  <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    World best education site - (Computer engeenering)
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to useery
                  </p>
                  <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Web and user interface design - Development
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to useery
                  </p>

                  <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                    Interaction design - Animation
                  </h4>
                  <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to useery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AboutUsPage
