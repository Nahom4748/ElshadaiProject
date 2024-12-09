// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../Contexts/AuthContext";
// import videoService from "../../../Services/videofetch.service";
// function FirstYearQuarterTwo() {
//   const [lessons, setLessons] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState("");
//   const [activeWeek, setActiveWeek] = useState(0);
//   const [hasPaidQ1, setHasPaidQ1] = useState(false);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const { user } = useAuth();
//   const url = "http://localhost:5001/";
//   useEffect(() => {
//     setLoading(true); // Set loading to true before starting the fetch
//     const url = "/api/y2-quarter3/videos";
//     videoService
//       .fetchLessons(url) // Fetch lessons using the service
//       .then((videoData) => {
//         setLessons(videoData); // Set the fetched lessons
//         if (videoData.length > 0) {
//           setSelectedVideo(formatYouTubeUrl(videoData[0].video)); // Set the first video URL
//         }
//       })
//       .catch((error) => console.error("Error fetching lessons:", error)) // Handle any errors
//       .finally(() => setLoading(false)); // Set loading to false after the fetch completes
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   useEffect(() => {
//     setLoading(true); // Set loading to true before starting the fetch
//     videoService
//       .fetchPaymentStatus(user.user_id) // Use paymentService
//       .then((data) => {
//         const hasPaid = data.some(
//           (payment) => payment.quarter === "Q1" && payment.status === 1
//         );
//         setHasPaidQ1(hasPaid);
//       })
//       .catch((error) => console.error("Error fetching payments:", error))
//       .finally(() => setLoading(false)); // Set loading to false after the fetch completes
//   }, [user.user_id]);

//   const formatYouTubeUrl = (url) => {
//     const urlObj = new URL(url);
//     const videoId = urlObj.searchParams.get("v");
//     return `https://www.youtube.com/embed/${videoId}`;
//   };

//   const handleWeekChange = (weekIndex) => {
//     setActiveWeek(weekIndex);
//     if (lessons[weekIndex]?.video) {
//       setSelectedVideo(formatYouTubeUrl(lessons[weekIndex].video));
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-between">
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           {/* Loading Spinner (could use a package like ssneep or any spinner) */}
//           <div className="spinner-border animate-spin border-4 border-t-4 border-green-400 rounded-full w-16 h-16"></div>
//         </div>
//       ) : hasPaidQ1 ? (
//         <section className="flex-grow py-8 px-4 md:px-12">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Sidebar (Week list on the left) */}
//             <div className="lg:w-2/5 bg-gray-800 rounded-lg shadow-lg p-4 mb-8 lg:mb-0 overflow-y-auto max-h-[60vh] lg:max-h-[600px] flex flex-col sticky top-0">
//               <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center sticky top-0 bg-gray-800 z-10 p-4">
//                 <i className="icofont-list mr-3"></i> Weekly Content
//               </h2>
//               <div className="space-y-4 flex-grow">
//                 {lessons.map((lesson, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleWeekChange(index)}
//                     className={`w-full flex items-center px-4 py-3 rounded-lg text-left font-semibold shadow-md transition-all ${
//                       activeWeek === index
//                         ? "bg-gradient-to-r from-green-400 to-green-600 text-white scale-105"
//                         : "bg-gray-700 hover:bg-gray-600 text-gray-300"
//                     }`}
//                   >
//                     <i className="icofont-ui-calendar mr-3"></i> Week{" "}
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Video Player (Center content) */}
//             <div className="w-full bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center">
//               {selectedVideo ? (
//                 <>
//                   {/* Title, Year, Quarter, and Week */}
//                   <div className="w-full text-center mb-4">
//                     <h2 className="text-2xl font-bold text-yellow-400">
//                       {lessons[activeWeek]?.title || "Video Description"}
//                     </h2>
//                     <p className="text-gray-400">
//                       Year: {lessons[activeWeek]?.year || "2024"} | Quarter:{" "}
//                       {lessons[activeWeek]?.quarter || "3"} | Week:{" "}
//                       {activeWeek + 1}
//                     </p>
//                   </div>

//                   {/* Video Player */}
//                   <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg mb-6 w-full h-[60vh]">
//                     <iframe
//                       className="w-full h-full rounded-lg"
//                       src={selectedVideo}
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       style={{ border: "none" }} // Removes the default iframe border for a clean look
//                     ></iframe>
//                   </div>
//                 </>
//               ) : (
//                 <p className="text-gray-400 text-center">
//                   No video available for this week.
//                 </p>
//               )}
//             </div>

//             {/* Content (Scroll to the right) */}
//             <div className="lg:w-1/3 bg-gray-700 rounded-lg shadow-lg p-4 overflow-y-auto max-h-[70vh] flex flex-col">
//               <h3 className="text-lg font-bold text-yellow-400 mb-4">
//                 Week {activeWeek + 1} Content
//               </h3>
//               <ul className="space-y-4 flex-grow">
//                 <li
//                   className="cursor-pointer flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
//                   onClick={() =>
//                     setSelectedVideo(
//                       formatYouTubeUrl(lessons[activeWeek].video)
//                     )
//                   }
//                 >
//                   <i className="icofont-play-alt-1 mr-3 text-green-400"></i>
//                   {lessons[activeWeek].video_description}
//                 </li>
//                 {lessons[activeWeek].document ? (
//                   <li className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
//                     <i className="icofont-file-pdf text-red-400 mr-3"></i>
//                     <a
//                       href={`${url}${lessons[activeWeek].document}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-400 hover:underline"
//                     >
//                       {lessons[activeWeek].document_description}
//                     </a>
//                   </li>
//                 ) : (
//                   <p className="text-gray-400">No documents available.</p>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <div className="flex items-center justify-center min-h-screen">
//           <div className="text-center p-8 bg-red-700 rounded-lg shadow-xl">
//             <h1 className="text-4xl font-extrabold text-white mb-4">
//               Access Denied 🚫
//             </h1>
//             <p className="text-gray-200 text-lg">
//               Complete your payment for Quarter 1 to unlock this content.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FirstYearQuarterTwo;
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import videoService from "../../../Services/videofetch.service.js";

function FirstYearQuarterTwo() {
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [activeWeek, setActiveWeek] = useState(0);
  const [hasPaidQ1, setHasPaidQ1] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const url = "http://localhost:5001/";

  useEffect(() => {
    setLoading(true);
    const url = "/api/y2-quarter3/videos";
    videoService
      .fetchLessons(url)
      .then((videoData) => {
        setLessons(videoData);
        if (videoData.length > 0) {
          setSelectedVideo(formatYouTubeUrl(videoData[0].video));
        }
      })
      .catch((error) => console.error("Error fetching lessons:", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    videoService
      .fetchPaymentStatus(user.user_id)
      .then((data) => {
        const hasPaid = data.some(
          (payment) => payment.quarter === "Q6" && payment.status === 1
        );
        setHasPaidQ1(hasPaid);
      })
      .catch((error) => console.error("Error fetching payments:", error))
      .finally(() => setLoading(false));
  }, [user.user_id]);

  const formatYouTubeUrl = (url) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleWeekChange = (weekIndex) => {
    setActiveWeek(weekIndex);
    if (lessons[weekIndex]?.video) {
      setSelectedVideo(formatYouTubeUrl(lessons[weekIndex].video));
    }
  };

  const currentLesson = lessons[activeWeek] || {};

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-between">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="spinner-border animate-spin border-4 border-t-4 border-green-400 rounded-full w-16 h-16"></div>
        </div>
      ) : hasPaidQ1 ? (
        <section className="flex-grow py-8 px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-2/5 bg-gray-800 rounded-lg shadow-lg p-4 mb-8 lg:mb-0 overflow-y-auto max-h-[60vh] lg:max-h-[600px] flex flex-col sticky top-0">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center sticky top-0 bg-gray-800 z-10 p-4">
                <i className="icofont-list mr-3"></i> Weekly Content
              </h2>
              <div className="space-y-4 flex-grow">
                {lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => handleWeekChange(index)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left font-semibold shadow-md transition-all ${
                      activeWeek === index
                        ? "bg-gradient-to-r from-green-400 to-green-600 text-white scale-105"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    }`}
                  >
                    <i className="icofont-ui-calendar mr-3"></i> Week{" "}
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Player */}
            <div className="w-full bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center">
              {selectedVideo ? (
                <>
                  <div className="w-full text-center mb-4">
                    <h2 className="text-2xl font-bold text-yellow-400">
                      {currentLesson.title || "Video Description"}
                    </h2>
                    <p className="text-gray-400">
                      Year: {currentLesson.year || "2024"} | Quarter:{" "}
                      {currentLesson.quarter || "3"} | Week: {activeWeek + 1}
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg mb-6 w-full h-[60vh]">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={selectedVideo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: "none" }}
                    ></iframe>
                  </div>
                </>
              ) : (
                <p className="text-gray-400 text-center">
                  No video available for this week.
                </p>
              )}
            </div>

            {/* Content */}
            <div className="lg:w-1/3 bg-gray-700 rounded-lg shadow-lg p-4 overflow-y-auto max-h-[70vh] flex flex-col">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">
                Week {activeWeek + 1} Content
              </h3>
              <ul className="space-y-4 flex-grow">
                {currentLesson.video_description && (
                  <li
                    className="cursor-pointer flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                    onClick={() =>
                      setSelectedVideo(formatYouTubeUrl(currentLesson.video))
                    }
                  >
                    <i className="icofont-play-alt-1 mr-3 text-green-400"></i>
                    {currentLesson.video_description}
                  </li>
                )}
                {currentLesson.document ? (
                  <li className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                    <i className="icofont-file-pdf text-red-400 mr-3"></i>
                    <a
                      href={`${url}${currentLesson.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {currentLesson.document_description}
                    </a>
                  </li>
                ) : (
                  <p className="text-gray-400">No documents available.</p>
                )}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8 bg-red-700 rounded-lg shadow-xl">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Access Denied 🚫
            </h1>
            <p className="text-gray-200 text-lg">
              Complete your payment for Quarter 1 to unlock this content.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstYearQuarterTwo;
