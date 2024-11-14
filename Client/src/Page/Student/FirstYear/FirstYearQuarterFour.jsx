import React, { useState, useEffect } from "react";
import axios from "axios";

function FirstYearQuarterFour() {
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [openWeek, setOpenWeek] = useState(0); // Week 1 open by default

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/quarter4/videos")
      .then((response) => {
        setLessons(response.data);
        console.log(response.data)
        if (response.data.length > 0) {
          setSelectedVideo(formatYouTubeUrl(response.data[0].video));
        }
      })
      .catch((error) => console.error("Error fetching lessons:", error));
  }, []);

  const formatYouTubeUrl = (url) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(formatYouTubeUrl(videoUrl));
  };

  const toggleAccordion = (weekIndex) => {
    setOpenWeek(openWeek === weekIndex ? null : weekIndex);
  };

  return (
    <section>
      <div className="container-fluid-2 pt-50px pb-100px">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-30px">
          <div className="xl:col-start-1 xl:col-span-4" data-aos="fade-up">
            <ul className="accordion-container">
              {lessons.map((lesson, index) => (
                <li
                  key={lesson.id}
                  className={`accordion mb-25px overflow-hidden ${
                    openWeek === index ? "active" : ""
                  }`}
                >
                  <div className="bg-whiteColor border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="accordion-controller flex justify-between items-center text-xl text-headingColor font-bold w-full px-5 py-18px dark:text-headingColor-dark font-hind leading-[20px]"
                    >
                      <span>{lesson.week}</span>
                      <svg
                        className={`transition-all duration-500 ${
                          openWeek === index ? "rotate-180" : "rotate-0"
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
                    {openWeek === index && (
                      <div className="accordion-content transition-all duration-500 h-auto">
                        <div className="content-wrapper p-10px md:px-30px">
                          <ul>
                            <li
                              className="py-4 flex items-center justify-between flex-wrap border-b border-borderColor dark:border-borderColor-dark"
                              onClick={() => handleVideoSelect(lesson.video)}
                            >
                              <div>
                                {/* Video Description */}
                                <h4 className="text-blackColor dark:text-blackColor-dark leading-1 font-light">
                                  <i className="icofont-video-alt mr-10px"></i>
                                  <span className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer">
                                    {lesson.video_description}
                                  </span>
                                </h4>
                                {/* Document Link with Icon and Spacing */}
                                <div className="mt-4 flex items-center">
                                  <i className="icofont-file-pdf mr-2 text-red-600 text-lg"></i>
                                  <a
                                    href={`http://localhost:5001/${lesson.document}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor cursor-pointer"
                                  >
                                    {lesson.document_description}
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="xl:col-end-13 xl:col-span-7"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="embed-responsive aspect-video">
              <iframe
                className="embed-responsive-item rounded-xl"
                width="100%"
                height="480"
                src={selectedVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstYearQuarterFour;
