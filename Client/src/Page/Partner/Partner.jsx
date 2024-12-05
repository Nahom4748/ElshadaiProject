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

import React, { useState, useEffect } from "react";
import axios from "axios";

function Partner() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [openWeek, setOpenWeek] = useState(0); // Week 1 open by default

  // Fetch partner videos on component load
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/partners/videos")
      .then((response) => {
        console.log("Full response:", response); // Logs the entire response object
        console.log("Response data:", response.data); // Logs the `data` property of the response
        const fetchedVideos = response.data.data;
        setVideos(fetchedVideos);

        if (fetchedVideos.length > 0) {
          setSelectedVideo(formatYouTubeUrl(fetchedVideos[0].video_link));
        }
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Format YouTube URL for embedding
  const formatYouTubeUrl = (url) => {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      console.error("Invalid YouTube URL:", url);
      return "";
    }
  };

  // Handle selecting a video to play
  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(formatYouTubeUrl(videoUrl));
  };

  // Toggle accordion state
  const toggleAccordion = (weekIndex) => {
    setOpenWeek(openWeek === weekIndex ? null : weekIndex);
  };

  return (
    <section>
      <div className="container-fluid-2 pt-50px pb-100px">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-30px">
          {/* Left Panel: Scrollable Weeks */}
          <div
            className="xl:col-start-1 xl:col-span-4"
            data-aos="fade-up"
            style={{
              maxHeight: "600px", // Set a maximum height for the scrollable panel
              overflowY: "auto", // Enable vertical scrolling
              paddingRight: "10px", // Add space for the scrollbar
              scrollbarWidth: "thin", // Firefox: Thin scrollbar
              msOverflowStyle: "auto", // Default scrollbar for IE/Edge
            }}
          >
            <ul>
              {videos.map((video, index) => (
                <li
                  key={video.video_id}
                  style={{
                    marginBottom: "25px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        width: "100%",
                        padding: "10px 20px",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <span>{`Week ${index + 1}`}</span> {/* Increment Week */}
                      <svg
                        style={{
                          transform:
                            openWeek === index ? "rotate(180deg)" : "rotate(0)",
                          transition: "transform 0.5s",
                        }}
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
                      <div
                        style={{
                          padding: "10px 20px",
                        }}
                      >
                        <ul>
                          <li
                            style={{
                              padding: "10px 0",
                              borderBottom: "1px solid #ddd",
                              cursor: "pointer",
                            }}
                            onClick={() => handleVideoSelect(video.video_link)}
                          >
                            <h4
                              style={{
                                margin: 0,
                                fontWeight: "normal",
                                fontSize: "1rem",
                              }}
                            >
                              <i
                                style={{
                                  marginRight: "10px",
                                }}
                                className="icofont-video-alt"
                              ></i>
                              <span>{video.description}</span>
                            </h4>
                            {video.document && (
                              <div
                                style={{
                                  marginTop: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <i
                                  style={{
                                    marginRight: "5px",
                                    color: "red",
                                    fontSize: "1.25rem",
                                  }}
                                  className="icofont-file-pdf"
                                ></i>
                                <a
                                  href={`http://localhost:5001/${video.document}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {video.document_description ||
                                    "View Document"}
                                </a>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Video Player */}
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

export default Partner;
