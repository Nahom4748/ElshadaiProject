// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Partner() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState("");
//   const [openWeek, setOpenWeek] = useState(0); // Week 1 open by default

//   // Fetch partner videos on component load
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/api/partners/videos")
//       .then((response) => {
//         console.log("Full response:", response); // Logs the entire response object
//         console.log("Response data:", response.data); // Logs the `data` property of the response
//         const fetchedVideos = response.data.data;
//         setVideos(fetchedVideos);

//         if (fetchedVideos.length > 0) {
//           setSelectedVideo(formatYouTubeUrl(fetchedVideos[0].video_link));
//         }
//       })
//       .catch((error) => console.error("Error fetching videos:", error));
//   }, []);

//   // Format YouTube URL for embedding
//   const formatYouTubeUrl = (url) => {
//     try {
//       const urlObj = new URL(url);
//       const videoId = urlObj.searchParams.get("v");
//       return `https://www.youtube.com/embed/${videoId}`;
//     } catch (error) {
//       console.error("Invalid YouTube URL:", url);
//       return "";
//     }
//   };

//   // Handle selecting a video to play
//   const handleVideoSelect = (videoUrl) => {
//     setSelectedVideo(formatYouTubeUrl(videoUrl));
//   };

//   // Toggle accordion state
//   const toggleAccordion = (weekIndex) => {
//     setOpenWeek(openWeek === weekIndex ? null : weekIndex);
//   };

//   return (
//     <section>
//       <div className="container-fluid-2 pt-50px pb-100px">
//         <div className="grid grid-cols-1 xl:grid-cols-12 gap-30px">
//           {/* Left Panel: Scrollable Weeks */}
//           <div
//             className="xl:col-start-1 xl:col-span-4"
//             data-aos="fade-up"
//             style={{
//               maxHeight: "600px", // Limit the height
//               overflowY: "auto", // Enable vertical scrolling
//               msOverflowStyle: "none", // Hide scrollbar for IE and Edge
//               scrollbarWidth: "none", // Hide scrollbar for Firefox
//             }}
//           >
//             <ul>
//               {videos.map((video, index) => (
//                 <li
//                   key={video.video_id}
//                   style={{
//                     marginBottom: "25px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       backgroundColor: "#fff",
//                       border: "1px solid #ddd",
//                     }}
//                   >
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         fontSize: "1.25rem",
//                         fontWeight: "bold",
//                         width: "100%",
//                         padding: "10px 20px",
//                         backgroundColor: "transparent",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <span>{`Week ${index + 1}`}</span> {/* Increment Week */}
//                       <svg
//                         style={{
//                           transform:
//                             openWeek === index ? "rotate(180deg)" : "rotate(0)",
//                           transition: "transform 0.5s",
//                         }}
//                         width="20"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="#212529"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
//                         ></path>
//                       </svg>
//                     </button>
//                     {openWeek === index && (
//                       <div
//                         style={{
//                           padding: "10px 20px",
//                         }}
//                       >
//                         <ul>
//                           <li
//                             style={{
//                               padding: "10px 0",
//                               borderBottom: "1px solid #ddd",
//                               cursor: "pointer",
//                             }}
//                             onClick={() => handleVideoSelect(video.video_link)}
//                           >
//                             <h4
//                               style={{
//                                 margin: 0,
//                                 fontWeight: "normal",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               <i
//                                 style={{
//                                   marginRight: "10px",
//                                 }}
//                                 className="icofont-video-alt"
//                               ></i>
//                               <span>{video.description}</span>
//                             </h4>
//                             {video.document && (
//                               <div
//                                 style={{
//                                   marginTop: "10px",
//                                   display: "flex",
//                                   alignItems: "center",
//                                 }}
//                               >
//                                 <i
//                                   style={{
//                                     marginRight: "5px",
//                                     color: "red",
//                                     fontSize: "1.25rem",
//                                   }}
//                                   className="icofont-file-pdf"
//                                 ></i>
//                                 <a
//                                   href={`http://localhost:5001/${video.document}`}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   {video.document_description ||
//                                     "View Document"}
//                                 </a>
//                               </div>
//                             )}
//                           </li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Panel: Video Player */}
//           <div
//             className="xl:col-end-13 xl:col-span-7"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <div className="embed-responsive aspect-video">
//               <iframe
//                 className="embed-responsive-item rounded-xl"
//                 width="100%"
//                 height="480"
//                 src={selectedVideo}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Partner;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Partner = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 8; // Number of videos per page

  // Fetch videos from API
  const fetchVideos = () => {
    setLoading(true);
    axios
      .get("http://localhost:5001/api/partners/videos") // Updated endpoint for partner videos
      .then((response) => {
        setVideos(response.data.data); // Accessing 'data' from API response
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const extractYouTubeID = (url) => {
    try {
      const regExp =
        /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[1].length === 11 ? match[1] : null;
    } catch {
      return null;
    }
  };

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getCurrentPageVideos = () => {
    const startIndex = (currentPage - 1) * videosPerPage;
    return videos.slice(startIndex, startIndex + videosPerPage);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-2xl">
        Loading videos...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-xl">
        Error fetching videos: {error}
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-black p-8 min-h-screen text-white">
      <h2 className="text-center text-4xl font-semibold mb-12">
        📹 Partner Videos
      </h2>

      {/* Display videos in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {getCurrentPageVideos().map((video) => (
          <div
            key={video.video_id} // Use appropriate key (video_id from the API)
            className="relative group bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <a
              href={video.video_link} // Video link from API
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-t-lg"
            >
              <img
                src={`https://img.youtube.com/vi/${extractYouTubeID(
                  video.video_link
                )}/0.jpg`} // Thumbnail from YouTube
                alt={`Video thumbnail`}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
              />
            </a>

            <div className="p-4">
              <h4 className="font-semibold text-lg text-white">
                {video.description || "No description available"}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Partner;
