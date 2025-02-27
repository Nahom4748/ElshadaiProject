import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import videoService from "../../../Services/videofetch.service.js";
import BASE_URL from "../../../util/baseURL.js";

function FirstYearQuarterOne() {
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [activeWeek, setActiveWeek] = useState(0);
  const [hasPaidQ1, setHasPaidQ1] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isWeeksOpen, setIsWeeksOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const { user } = useAuth();

  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);

      // Handle shortened YouTube URLs (youtu.be)
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.split("/")[1].split("?")[0];
      }

      // Handle standard YouTube URLs
      if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      }

      return null;
    } catch (error) {
      console.error("Invalid YouTube URL:", url);
      return null;
    }
  };

  // Create embed URL with privacy enhancements
  const createEmbedUrl = (videoId) => {
    return `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`;
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Load lessons and payment status in parallel
        const [videoData, paymentData] = await Promise.all([
          videoService.fetchLessons("/api/quarter1/videos"),
          videoService.fetchPaymentStatus(user.user_id),
        ]);

        setLessons(videoData);
        setHasPaidQ1(
          paymentData.some((p) => p.quarter === "Q1" && p.status === 1)
        );

        // Set initial video
        if (videoData.length > 0) {
          const firstVideoId = extractVideoId(videoData[0].video);
          if (firstVideoId) {
            setSelectedVideo(createEmbedUrl(firstVideoId));
          }
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user.user_id]);

  const handleWeekChange = (weekIndex) => {
    setActiveWeek(weekIndex);
    const videoUrl = lessons[weekIndex]?.video;
    if (videoUrl) {
      const videoId = extractVideoId(videoUrl);
      if (videoId) {
        setSelectedVideo(createEmbedUrl(videoId));
      }
    }
  };

  const currentLesson = lessons[activeWeek] || {};

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {loading ? (
        <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 py-8 animate-pulse">
          {/* Loading Skeleton */}
          <div className="lg:hidden space-y-6 w-full">
            <div className="h-8 bg-gray-800 rounded w-1/2 mx-auto"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-800 rounded-lg"></div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 bg-gray-800 rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-xl"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-800 rounded-lg"></div>
              <div className="h-20 bg-gray-800 rounded-lg"></div>
            </div>
          </div>

          {/* Desktop Skeleton */}
          <div className="hidden lg:flex w-full gap-8">
            <div className="w-1/4 space-y-4">
              <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-800 rounded-lg"></div>
              ))}
            </div>
            <div className="w-2/4 space-y-4">
              <div className="aspect-video bg-gray-800 rounded-xl"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4"></div>
              <div className="h-3 bg-gray-800 rounded w-full"></div>
              <div className="h-3 bg-gray-800 rounded w-2/3"></div>
            </div>
            <div className="w-1/4 space-y-4">
              <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
              <div className="h-32 bg-gray-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      ) : hasPaidQ1 ? (
        <section className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 py-8">
          {/* Mobile Navigation */}
          <div className="lg:hidden space-y-4 mb-6">
            <h1 className="text-2xl font-bold text-yellow-400 text-center">
              Year 1 Quarter 1
            </h1>
            <div className="bg-gray-800 rounded-lg p-2">
              <button
                onClick={() => setIsWeeksOpen(!isWeeksOpen)}
                className="w-full flex justify-between items-center p-4 bg-gray-700 rounded-lg"
              >
                <span className="font-semibold text-yellow-400">
                  {`Week ${activeWeek + 1} - ${currentLesson.title || ""}`}
                </span>
                <i
                  className={`icofont-simple-down text-xl transform transition-transform ${
                    isWeeksOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {isWeeksOpen && (
                <div className="mt-2 space-y-2">
                  {lessons.map((lesson, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleWeekChange(index);
                        setIsWeeksOpen(false);
                      }}
                      className={`w-full p-3 text-left rounded-lg transition-colors ${
                        activeWeek === index
                          ? "bg-green-600 text-white"
                          : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      }`}
                    >
                      Week {index + 1} - {lesson.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4 bg-gray-800 rounded-xl shadow-xl p-4 overflow-y-auto max-h-[80vh] sticky top-4">
            <h2 className="text-xl font-bold text-yellow-400 mb-4 border-b border-gray-600 pb-2">
              Weekly Content
            </h2>
            <div className="space-y-2">
              {lessons.map((lesson, index) => (
                <button
                  key={index}
                  onClick={() => handleWeekChange(index)}
                  className={`w-full p-3 text-left rounded-lg transition-all ${
                    activeWeek === index
                      ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  }`}
                >
                  <span className="font-medium">Week {index + 1}</span>
                  <p className="text-sm text-gray-400 mt-1">{lesson.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Video Player */}
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-black">
                {selectedVideo ? (
                  <iframe
                    className="w-full h-full"
                    src={selectedVideo}
                    allowFullScreen
                    title="Lesson Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No video available
                  </div>
                )}
              </div>
              <div className="p-4 border-t border-gray-700">
                <h2 className="text-xl font-semibold text-yellow-400">
                  {currentLesson.title || "Lesson Video"}
                </h2>
                <p className="text-gray-400 mt-2">
                  {currentLesson.video_description ||
                    "No description available"}
                </p>
              </div>
            </div>

            {/* Materials Section */}
            <div className="lg:hidden bg-gray-800 rounded-xl p-2">
              <button
                onClick={() => setIsContentOpen(!isContentOpen)}
                className="w-full flex justify-between items-center p-4 bg-gray-700 rounded-lg"
              >
                <span className="font-semibold text-yellow-400">
                  Learning Materials
                </span>
                <i
                  className={`icofont-simple-down text-xl transform transition-transform ${
                    isContentOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {isContentOpen && (
                <div className="mt-4 p-4 bg-gray-700 rounded-lg space-y-4">
                  {currentLesson.document ? (
                    <a
                      href={`${BASE_URL}/${currentLesson.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <i className="icofont-file-pdf text-2xl text-red-400 mr-3"></i>
                      <div>
                        <p className="font-medium text-gray-300">
                          {currentLesson.document_description}
                        </p>
                        <span className="text-sm text-gray-400">
                          Click to download
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="p-4 text-center text-gray-400">
                      No materials available
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="hidden lg:block bg-gray-800 rounded-xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                Learning Materials
              </h3>
              <div className="space-y-4">
                {currentLesson.document ? (
                  <a
                    href={`${BASE_URL}/${currentLesson.document}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <i className="icofont-file-pdf text-3xl text-red-400 mr-4"></i>
                    <div>
                      <p className="font-medium text-gray-300">
                        {currentLesson.document_description}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">PDF Document</p>
                    </div>
                  </a>
                ) : (
                  <div className="p-4 text-center text-gray-400">
                    No materials available
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center max-w-md p-8 bg-red-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-red-700/30">
            <div className="text-6xl mb-4">⛔</div>
            <h1 className="text-2xl font-bold text-red-400 mb-2">
              Access Restricted
            </h1>
            <p className="text-gray-300">
              Please complete your Quarter 1 payment to unlock content
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstYearQuarterOne;
