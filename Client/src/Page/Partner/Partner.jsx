import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import partnervideoService from "../../Services/partnervideo.service";
Modal.setAppElement("#root"); // Required for accessibility, change `#root` if necessary

const Partner = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null); // To manage the currently selected video
  const videosPerPage = 8; // Number of videos per page

  // Fetch videos from API
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await partnervideoService.fetchvedios(); // Assuming fetchvedios() returns a promise
      setVideos(response.data); // Accessing 'data' from the response
    } catch (err) {
      setError(err.message); // Handle the error
    } finally {
      setLoading(false); // Ensure loading state is set to false
    }
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

  const closeModal = () => setSelectedVideo(null); // Close the modal

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
            key={video.video_id}
            className="relative group bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedVideo(video)} // Open modal with selected video
          >
            <div className="block overflow-hidden rounded-t-lg">
              <img
                src={`https://img.youtube.com/vi/${extractYouTubeID(
                  video.video_link
                )}/0.jpg`}
                alt={`Video thumbnail`}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>

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

      {/* Modal for playing video */}
      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onRequestClose={closeModal}
          contentLabel="Video Player"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        >
          <div className="relative w-full max-w-3xl bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
            >
              ✖
            </button>
            <iframe
              className="w-full h-[500px] sm:h-[400px]"
              src={`https://www.youtube.com/embed/${extractYouTubeID(
                selectedVideo.video_link
              )}`}
              title={selectedVideo.description || "YouTube video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h4 className="text-white text-lg">
                {selectedVideo.description || "No description available"}
              </h4>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Partner;
