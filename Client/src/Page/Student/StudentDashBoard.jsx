import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BibleImage from "../../assets/images/student/Bible.avif";
import BibleImage2 from "../../assets/images/student/bible2.avif";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { useAuth } from "../../Contexts/AuthContext";

function StudentDashBoard() {
  // State to control which year is open
  const [openYear, setOpenYear] = useState("firstYear"); // "firstYear" is open by default
  const { userType, user } = useAuth();
  // Effect to automatically expand the 1st year on page load
  useEffect(() => {
    setOpenYear("firstYear");
  }, []);

  // Function to handle toggling the accordions
  const toggleAccordion = (year) => {
    setOpenYear((prevYear) => (prevYear === year ? "" : year)); // Toggle between years, only one can be open at a time
  };
  return (
    <>
      <section className="py-50px md:py-70px lg:py-20 2xl:pt-0 2xl:pb-50px mt-5">
        <div className="py-10 md:py-10 2xl:py-50px 3xl:py-30 mx-10px md:mx-50px 3xl:mx-150px dark:bg-darkdeep3-dark shadow-container rounded-5">
          <div className="container">
            <div className="fees grid grid-cols-1 lg:grid-cols-12 gap-30px">
              <div
                className="lg:col-start-1 lg:col-span-5 xl:col-span-4"
                data-aos="fade-up"
              >
                <img
                  src={BibleImage2}
                  alt=""
                  style={{ width: "300px", height: "auto" }}
                  className="rounded-lg2"
                />
              </div>

              <div
                className="lg:col-start-6 lg:col-span-7 xl:col-start-5 xl:col-span-8"
                data-aos="fade-up"
              >
                <ul className="accordion-container">
                  {/* Accordion for 1st Year */}
                  <li className="accordion mb-25px overflow-hidden">
                    <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark rounded-t-md">
                      <div>
                        <button
                          onClick={() => toggleAccordion("firstYear")}
                          className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                        >
                          <span>1st Year</span>
                          <svg
                            className={`transition-all duration-0 ${
                              openYear === "firstYear"
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212529"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        className={`accordion-content transition-all duration-0 ${
                          openYear === "firstYear" ? "max-h-screen" : "max-h-0"
                        }`}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="content-wrapper p-10px md:px-30px">
                          <ul>
                            <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                              <div>
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="fas fa-bible mr-10px"></i>
                                  <span className="font-medium">Quarter 1</span>
                                </h4>
                              </div>
                              <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                <Link
                                  to="/api/quarter1/videos"
                                  className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                >
                                  <p className="px-10px">
                                    <i className="icofont-eye"></i> View
                                  </p>
                                </Link>
                              </div>
                            </li>

                            <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                              <div>
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="fas fa-bible mr-10px"></i>
                                  <span className="font-medium">Quarter 2</span>
                                </h4>
                              </div>
                              <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                <Link
                                  to="/api/quarter2/videos"
                                  className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                >
                                  <p className="px-10px">
                                    <i className="icofont-eye"></i> View
                                  </p>
                                </Link>
                              </div>
                            </li>

                            <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                              <div>
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="fas fa-bible mr-10px"></i>
                                  <span className="font-medium">Quarter 3</span>
                                </h4>
                              </div>
                              <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                <Link
                                  to="/api/quarter3/videos"
                                  className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                >
                                  <p className="px-10px">
                                    <i className="icofont-eye"></i> View
                                  </p>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Accordion for 2nd Year */}
                  <li className="accordion mb-25px overflow-hidden">
                    <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark rounded-t-md">
                      <div>
                        <button
                          onClick={() => toggleAccordion("secondYear")}
                          className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                        >
                          <span>2nd Year</span>
                          <svg
                            className={`transition-all duration-0 ${
                              openYear === "secondYear"
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#212529"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        className={`accordion-content transition-all duration-0 ${
                          openYear === "secondYear" ? "max-h-screen" : "max-h-0"
                        }`}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="content-wrapper p-10px md:px-30px">
                          <ul>
                            <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                              <div>
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="fas fa-bible mr-10px"></i>
                                  <span className="font-medium">Quarter 1</span>
                                </h4>
                              </div>
                              <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                <Link
                                  to="/api/y2-quarter1/videos"
                                  className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                >
                                  <p className="px-10px">
                                    <i className="icofont-eye"></i> View
                                  </p>
                                </Link>
                              </div>
                            </li>

                            <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                              <div>
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="fas fa-bible mr-10px"></i>
                                  <span className="font-medium">Quarter 2</span>
                                </h4>
                              </div>
                              <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                <Link
                                  to="/api/y2-quarter2/videos"
                                  className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                >
                                  <p className="px-10px">
                                    <i className="icofont-eye"></i> View
                                  </p>
                                </Link>
                              </div>
                            </li>

                            <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                              <div>
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="fas fa-bible mr-10px"></i>
                                  <span className="font-medium">Quarter 3</span>
                                </h4>
                              </div>
                              <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                <Link
                                  to="/api/y2-quarter3/videos"
                                  className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                >
                                  <p className="px-10px">
                                    <i className="icofont-eye"></i> View
                                  </p>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {userType == "Partner" && (
                    <>
                      <li className="accordion mb-25px overflow-hidden">
                        <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark rounded-t-md">
                          <div>
                            <button
                              onClick={() => toggleAccordion("partner")}
                              className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                            >
                              <span>Partners</span>
                              <svg
                                className={`transition-all duration-0 ${
                                  openYear === "partner"
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="#212529"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </button>
                          </div>

                          <div
                            className={`accordion-content transition-all duration-0 ${
                              openYear === "partner"
                                ? "max-h-screen"
                                : "max-h-0"
                            }`}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="content-wrapper p-10px md:px-30px">
                              <ul>
                                <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                                  <div>
                                    <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                      <i className="fas fa-handshake mr-10px"></i>
                                      <span className="font-medium">
                                        Quarter 1
                                      </span>
                                    </h4>
                                  </div>
                                  <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                    <Link
                                      to="/api/partners/videos"
                                      className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                    >
                                      <p className="px-10px">
                                        <i className="icofont-eye"></i> View
                                      </p>
                                    </Link>
                                  </div>
                                </li>

                                <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                                  <div>
                                    <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                      <i className="fas fa-handshake mr-10px"></i>
                                      <span className="font-medium">
                                        Quarter 2
                                      </span>
                                    </h4>
                                  </div>
                                  <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                    <Link
                                      to="/partner2/details"
                                      className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                    >
                                      <p className="px-10px">
                                        <i className="icofont-eye"></i> View
                                      </p>
                                    </Link>
                                  </div>
                                </li>

                                <li className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark">
                                  <div>
                                    <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                      <i className="fas fa-handshake mr-10px"></i>
                                      <span className="font-medium">
                                        Quarter 3
                                      </span>
                                    </h4>
                                  </div>
                                  <div className="text-blackColor dark:text-blackColor-dark text-sm flex items-center">
                                    <Link
                                      to="/partner3/details"
                                      className="bg-primaryColor text-whiteColor text-sm ml-5 rounded py-0.5"
                                    >
                                      <p className="px-10px">
                                        <i className="icofont-eye"></i> View
                                      </p>
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                  {/* Additional years can be added here following the same structure */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentDashBoard;
