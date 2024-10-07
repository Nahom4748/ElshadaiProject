import React, { useState } from "react";

function SecondYearQuarterFour() {
  const [isOpenWeek01, setIsOpenWeek01] = useState(false);
  const [isOpenWeek02, setIsOpenWeek02] = useState(false);
  const [isOpenWeek03, setIsOpenWeek03] = useState(false);
  const [isOpenWeek04, setIsOpenWeek04] = useState(false);

  // State to track the selected video URL
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/embed/kpfzbZkeJc0?si=yy3hnYCcoPU2g-y9"
  );

  // Toggle functions for each week
  const toggleAccordionWeek01 = () => setIsOpenWeek01(!isOpenWeek01);
  const toggleAccordionWeek02 = () => setIsOpenWeek02(!isOpenWeek02);
  const toggleAccordionWeek03 = () => setIsOpenWeek03(!isOpenWeek03);
  const toggleAccordionWeek04 = () => setIsOpenWeek04(!isOpenWeek04);

  // Function to select a video to display on the right side
  const handleVideoSelect = (videoUrl) => setSelectedVideo(videoUrl);

  return (
    <section>
      <div className="container-fluid-2 pt-50px pb-100px">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-30px">
          {/* Lesson Left */}
          <div className="xl:col-start-1 xl:col-span-4" data-aos="fade-up">
            {/* Curriculum */}
            <ul className="accordion-container">
              {/* Week #01 Accordion */}
              <li
                className={`accordion mb-25px overflow-hidden ${
                  isOpenWeek01 ? "active" : ""
                }`}
              >
                <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                  <div>
                    <button
                      onClick={toggleAccordionWeek01}
                      className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                    >
                      <span>Week #01</span>
                      <svg
                        className={`transition-all duration-500 ${
                          isOpenWeek01 ? "rotate-180" : "rotate-0"
                        }`}
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="#212529"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`accordion-content transition-all duration-500 ${
                      isOpenWeek01 ? "h-auto" : "h-0 overflow-hidden"
                    }`}
                  >
                    <div className="content-wrapper p-10px md:px-30px">
                      <ul>
                        <li
                          className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark"
                          onClick={() =>
                            handleVideoSelect(
                              "https://www.youtube.com/embed/vHdclsdkp28"
                            )
                          }
                        >
                          <div>
                            <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                              <i className="icofont-video-alt mr-10px"></i>
                              <span className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer">
                                Course Intro
                              </span>
                            </h4>
                          </div>
                        </li>
                        <li
                          className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark"
                          onClick={() =>
                            handleVideoSelect(
                              "https://www.youtube.com/embed/YFmjXP1lg-g?si=THRryJenwqjnxbhp"
                            )
                          }
                        >
                          <div>
                            <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                              <i className="icofont-video-alt mr-10px"></i>
                              <span className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer">
                                Course Outline
                              </span>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Week #02 Accordion */}
              <li
                className={`accordion mb-25px overflow-hidden ${
                  isOpenWeek02 ? "active" : ""
                }`}
              >
                <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                  <div>
                    <button
                      onClick={toggleAccordionWeek02}
                      className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                    >
                      <span>Week #02</span>
                      <svg
                        className={`transition-all duration-500 ${
                          isOpenWeek02 ? "rotate-180" : "rotate-0"
                        }`}
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="#212529"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`accordion-content transition-all duration-500 ${
                      isOpenWeek02 ? "h-auto" : "h-0 overflow-hidden"
                    }`}
                  >
                    <div className="content-wrapper p-10px md:px-30px">
                      <ul>
                        <li
                          className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark"
                          onClick={() =>
                            handleVideoSelect(
                              "https://www.youtube.com/embed/nCwGDE3zWXg?si=K0mkZfBDouiAaxnS"
                            )
                          }
                        >
                          <div>
                            <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                              <i className="icofont-video-alt mr-10px"></i>
                              <span className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer">
                                Week 2 Lesson
                              </span>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Week #03 Accordion */}
              <li
                className={`accordion mb-25px overflow-hidden ${
                  isOpenWeek03 ? "active" : ""
                }`}
              >
                <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                  <div>
                    <button
                      onClick={toggleAccordionWeek03}
                      className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                    >
                      <span>Week #03</span>
                      <svg
                        className={`transition-all duration-500 ${
                          isOpenWeek03 ? "rotate-180" : "rotate-0"
                        }`}
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="#212529"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`accordion-content transition-all duration-500 ${
                      isOpenWeek03 ? "h-auto" : "h-0 overflow-hidden"
                    }`}
                  >
                    <div className="content-wrapper p-10px md:px-30px">
                      <ul>
                        <li
                          className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark"
                          onClick={() =>
                            handleVideoSelect(
                              "https://www.youtube.com/embed/hReMQ0U25KA?si=GkhSth8z-6bGZchK"
                            )
                          }
                        >
                          <div>
                            <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                              <i className="icofont-video-alt mr-10px"></i>
                              <span className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer">
                                Week 3 Lesson
                              </span>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Week #04 Accordion */}
              <li
                className={`accordion mb-25px overflow-hidden ${
                  isOpenWeek04 ? "active" : ""
                }`}
              >
                <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                  <div>
                    <button
                      onClick={toggleAccordionWeek04}
                      className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                    >
                      <span>Week #04</span>
                      <svg
                        className={`transition-all duration-500 ${
                          isOpenWeek04 ? "rotate-180" : "rotate-0"
                        }`}
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="#212529"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`accordion-content transition-all duration-500 ${
                      isOpenWeek04 ? "h-auto" : "h-0 overflow-hidden"
                    }`}
                  >
                    <div className="content-wrapper p-10px md:px-30px">
                      <ul>
                        <li
                          className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark"
                          onClick={() =>
                            handleVideoSelect(
                              "https://www.youtube.com/embed/ZU8xnRf2tTA?si=AYNLEUEB6IC2W6zP"
                            )
                          }
                        >
                          <div>
                            <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                              <i className="icofont-video-alt mr-10px"></i>
                              <span className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer">
                                Week 4 Lesson
                              </span>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Lesson Right (Video Player) */}
          <div className="xl:col-span-8" data-aos="fade-up">
            <div className="bg-whiteColor  border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
              <div className="video-player-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src={selectedVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: "none" }} // No border style
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondYearQuarterFour;
