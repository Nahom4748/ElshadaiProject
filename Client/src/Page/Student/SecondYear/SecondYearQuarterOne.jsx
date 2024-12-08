// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../../../Contexts/AuthContext";

// function SecondYearQuarterOne() {
//   const [lessons, setLessons] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState("");
//   const [openWeek, setOpenWeek] = useState(0);
//   const [hasPaidy2Q1, setHasPaidy2Q1] = useState(false);
//   const { user } = useAuth();

//   useEffect(() => {
//     // Fetch lessons for Quarter 1
//     axios
//       .get("http://localhost:5001/api/y2-quarter1/videos")
//       .then((response) => {
//         setLessons(response.data);
//         if (response.data.length > 0) {
//           setSelectedVideo(formatYouTubeUrl(response.data[0].video));
//         }
//       })
//       .catch((error) => console.error("Error fetching lessons:", error));
//   }, []);

//   useEffect(() => {
//     // Check payment status for Quarter 1
//     axios
//       .get(`http://localhost:5001/api/payments/${user.user_id}`)
//       .then((response) => {
//         const hasPaid = response.data.some(
//           (payment) => payment.quarter === "Q4" && payment.status === 1
//         );
//         setHasPaidy2Q1(hasPaid);
//       })
//       .catch((error) => console.error("Error fetching payments:", error));
//   }, [user.user_id]);

//   const formatYouTubeUrl = (url) => {
//     const urlObj = new URL(url);
//     const videoId = urlObj.searchParams.get("v");
//     return `https://www.youtube.com/embed/${videoId}`;
//   };

//   const handleVideoSelect = (videoUrl) => {
//     setSelectedVideo(formatYouTubeUrl(videoUrl));
//   };

//   const toggleAccordion = (weekIndex) => {
//     setOpenWeek(openWeek === weekIndex ? null : weekIndex);
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white min-h-screen">
//       {hasPaidy2Q1 ? (
//         <section className="py-12">
//           <div className="container mx-auto">
//             <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
//               {/* Sidebar for lessons */}
//               <div
//                 className="xl:col-span-4 p-6 bg-blue-800 shadow-lg rounded-lg overflow-y-auto border border-blue-600"
//                 style={{ minHeight: "500px", maxHeight: "500px" }}
//               >
//                 <h2 className="text-2xl font-semibold mb-6 flex items-center">
//                   <i className="icofont-books mr-2 text-yellow-400"></i> Lessons
//                 </h2>
//                 <ul>
//                   {lessons.map((lesson, index) => (
//                     <li key={lesson.id} className="mb-4">
//                       <div
//                         className={`border rounded-lg shadow-md bg-blue-700 hover:bg-blue-600 transition-all transform ${
//                           openWeek === index ? "scale-105" : ""
//                         }`}
//                       >
//                         <button
//                           onClick={() => toggleAccordion(index)}
//                           className="w-full text-left p-4 flex justify-between items-center rounded-t-lg text-lg"
//                         >
//                           <span>
//                             <i className="icofont-light-bulb mr-2 text-yellow-400"></i>{" "}
//                             {lesson.week}
//                           </span>
//                           <svg
//                             className={`w-5 h-5 transform transition-transform ${
//                               openWeek === index ? "rotate-180" : ""
//                             }`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </button>
//                         {openWeek === index && (
//                           <div className="p-4 bg-blue-800 rounded-b-lg transition-all">
//                             <ul>
//                               <li
//                                 className="cursor-pointer border-b py-2 hover:bg-blue-700 transition-colors"
//                                 onClick={() => handleVideoSelect(lesson.video)}
//                               >
//                                 <h4 className="text-base flex items-center">
//                                   <i className="icofont-play-alt-1 mr-2 text-green-400"></i>
//                                   {lesson.video_description}
//                                 </h4>
//                               </li>
//                               {lesson.document && (
//                                 <div className="flex items-center mt-2">
//                                   <i className="icofont-file-pdf text-red-400 mr-2"></i>
//                                   <a
//                                     href={`http://localhost:5001/${lesson.document}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-300 hover:underline"
//                                   >
//                                     {lesson.document_description}
//                                   </a>
//                                 </div>
//                               )}
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Video Player */}
//               <div
//                 className="xl:col-span-8 p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 shadow-lg rounded-lg border border-purple-600"
//                 style={{ minHeight: "500px" }}
//               >
//                 <h2 className="text-2xl font-semibold mb-6 flex items-center">
//                   <i className="icofont-ui-play mr-2 text-green-400"></i> Video
//                   Player
//                 </h2>
//                 <div
//                   className="rounded-lg overflow-hidden border border-blue-700 shadow-lg"
//                   style={{ height: "450px" }}
//                 >
//                   <iframe
//                     className="w-full h-full"
//                     src={selectedVideo}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <div className="flex items-center justify-center h-screen">
//           <div className="text-center p-8 bg-gradient-to-r from-red-800 to-red-600 shadow-lg rounded-lg border border-red-700">
//             <h1 className="text-4xl font-bold text-white mb-4">
//               Access Denied 🚫
//             </h1>
//             <p className="text-gray-200 text-lg">
//               Complete the payment for Quarter 1 to unlock this content.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SecondYearQuarterOne;
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import videoService from "../../../Services/videofetch.service";
function FirstYearQuarterTwo() {
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [activeWeek, setActiveWeek] = useState(0);
  const [hasPaidQ1, setHasPaidQ1] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const { user } = useAuth();
  const url = "http://localhost:5001/";
  useEffect(() => {
    setLoading(true); // Set loading to true before starting the fetch
    const url = "/api/y2-quarter1/videos";
    videoService
      .fetchLessons(url) // Fetch lessons using the service
      .then((videoData) => {
        setLessons(videoData); // Set the fetched lessons
        if (videoData.length > 0) {
          setSelectedVideo(formatYouTubeUrl(videoData[0].video)); // Set the first video URL
        }
      })
      .catch((error) => console.error("Error fetching lessons:", error)) // Handle any errors
      .finally(() => setLoading(false)); // Set loading to false after the fetch completes
  }, []); // Empty dependency array ensures the effect runs once on mount

  useEffect(() => {
    setLoading(true); // Set loading to true before starting the fetch
    videoService
      .fetchPaymentStatus(user.user_id) // Use paymentService
      .then((data) => {
        const hasPaid = data.some(
          (payment) => payment.quarter === "Q1" && payment.status === 1
        );
        setHasPaidQ1(hasPaid);
      })
      .catch((error) => console.error("Error fetching payments:", error))
      .finally(() => setLoading(false)); // Set loading to false after the fetch completes
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

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col justify-between">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          {/* Loading Spinner (could use a package like ssneep or any spinner) */}
          <div className="spinner-border animate-spin border-4 border-t-4 border-green-400 rounded-full w-16 h-16"></div>
        </div>
      ) : hasPaidQ1 ? (
        <section className="flex-grow py-8 px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar (Week list on the left) */}
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

            {/* Video Player (Center content) */}
            <div className="w-full bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center">
              {selectedVideo ? (
                <>
                  {/* Title, Year, Quarter, and Week */}
                  <div className="w-full text-center mb-4">
                    <h2 className="text-2xl font-bold text-yellow-400">
                      {lessons[activeWeek]?.title || "Video Description"}
                    </h2>
                    <p className="text-gray-400">
                      Year: {lessons[activeWeek]?.year || "2024"} | Quarter:{" "}
                      {lessons[activeWeek]?.quarter || "1"} | Week:{" "}
                      {activeWeek + 1}
                    </p>
                  </div>

                  {/* Video Player */}
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg mb-6 w-full h-[60vh]">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={selectedVideo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: "none" }} // Removes the default iframe border for a clean look
                    ></iframe>
                  </div>
                </>
              ) : (
                <p className="text-gray-400 text-center">
                  No video available for this week.
                </p>
              )}
            </div>

            {/* Content (Scroll to the right) */}
            <div className="lg:w-1/3 bg-gray-700 rounded-lg shadow-lg p-4 overflow-y-auto max-h-[70vh] flex flex-col">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">
                Week {activeWeek + 1} Content
              </h3>
              <ul className="space-y-4 flex-grow">
                <li
                  className="cursor-pointer flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                  onClick={() =>
                    setSelectedVideo(
                      formatYouTubeUrl(lessons[activeWeek].video)
                    )
                  }
                >
                  <i className="icofont-play-alt-1 mr-3 text-green-400"></i>
                  {lessons[activeWeek].video_description}
                </li>
                {lessons[activeWeek].document ? (
                  <li className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
                    <i className="icofont-file-pdf text-red-400 mr-3"></i>
                    <a
                      href={`${url}${lessons[activeWeek].document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {lessons[activeWeek].document_description}
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
