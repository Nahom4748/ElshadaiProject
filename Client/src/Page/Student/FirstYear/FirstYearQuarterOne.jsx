import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../../Contexts/AuthContext";

function FirstYearQuarterOne() {
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [openWeek, setOpenWeek] = useState(0);
  const [hasPaidQ1, setHasPaidQ1] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch lessons for Quarter 1
    axios
      .get("http://localhost:5001/api/quarter1/videos")
      .then((response) => {
        setLessons(response.data);
        if (response.data.length > 0) {
          setSelectedVideo(formatYouTubeUrl(response.data[0].video));
        }
      })
      .catch((error) => console.error("Error fetching lessons:", error));
  }, []);

  useEffect(() => {
    // Check payment status for Quarter 1
    axios
      .get(`http://localhost:5001/api/payments/${user.user_id}`)
      .then((response) => {
        const hasPaid = response.data.some(
          (payment) => payment.quarter === "Q1" && payment.status === 1
        );
        setHasPaidQ1(hasPaid);
      })
      .catch((error) => console.error("Error fetching payments:", error));
  }, [user.user_id]);

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
    <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white min-h-screen">
      {hasPaidQ1 ? (
        <section className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              {/* Sidebar for lessons */}
              <div
                className="xl:col-span-4 p-6 bg-blue-800 shadow-lg rounded-lg overflow-y-auto border border-blue-600"
                style={{ minHeight: "500px", maxHeight: "500px" }}
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <i className="icofont-books mr-2 text-yellow-400"></i> Lessons
                </h2>
                <ul>
                  {lessons.map((lesson, index) => (
                    <li key={lesson.id} className="mb-4">
                      <div
                        className={`border rounded-lg shadow-md bg-blue-700 hover:bg-blue-600 transition-all transform ${
                          openWeek === index ? "scale-105" : ""
                        }`}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left p-4 flex justify-between items-center rounded-t-lg text-lg"
                        >
                          <span>
                            <i className="icofont-light-bulb mr-2 text-yellow-400"></i>{" "}
                            {lesson.week}
                          </span>
                          <svg
                            className={`w-5 h-5 transform transition-transform ${
                              openWeek === index ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openWeek === index && (
                          <div className="p-4 bg-blue-800 rounded-b-lg transition-all">
                            <ul>
                              <li
                                className="cursor-pointer border-b py-2 hover:bg-blue-700 transition-colors"
                                onClick={() => handleVideoSelect(lesson.video)}
                              >
                                <h4 className="text-base flex items-center">
                                  <i className="icofont-play-alt-1 mr-2 text-green-400"></i>
                                  {lesson.video_description}
                                </h4>
                              </li>
                              {lesson.document && (
                                <div className="flex items-center mt-2">
                                  <i className="icofont-file-pdf text-red-400 mr-2"></i>
                                  <a
                                    href={`http://localhost:5001/${lesson.document}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-300 hover:underline"
                                  >
                                    {lesson.document_description}
                                  </a>
                                </div>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Player */}
              <div
                className="xl:col-span-8 p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 shadow-lg rounded-lg border border-purple-600"
                style={{ minHeight: "500px" }}
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <i className="icofont-ui-play mr-2 text-green-400"></i> Video
                  Player
                </h2>
                <div
                  className="rounded-lg overflow-hidden border border-blue-700 shadow-lg"
                  style={{ height: "450px" }}
                >
                  <iframe
                    className="w-full h-full"
                    src={selectedVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center p-8 bg-gradient-to-r from-red-800 to-red-600 shadow-lg rounded-lg border border-red-700">
            <h1 className="text-4xl font-bold text-white mb-4">
              Access Denied 🚫
            </h1>
            <p className="text-gray-200 text-lg">
              Complete the payment for Quarter 1 to unlock this content.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstYearQuarterOne;
