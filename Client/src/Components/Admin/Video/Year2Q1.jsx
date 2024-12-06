import React, { useEffect, useState } from "react";
import axios from "axios";

const Year2Q1 = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [userRole, setUserRole] = useState("admin"); // Default to admin, this can be dynamic
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDescription, setPdfDescription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 4;

  // Fetch videos from API
  const fetchVideos = () => {
    setLoading(true);
    axios
      .get("http://localhost:5001/api/y2-quarter1/videos")
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, [setVideos]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openVideoModal = (video) => {
    if (userRole === "admin") {
      setSelectedVideo(video);
      setIsVideoModalOpen(true);
    }
  };

  const openDocModal = (video) => {
    if (userRole === "admin") {
      setSelectedVideo(video);
      setIsDocModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setIsVideoModalOpen(false);
  };

  const closeDocModal = () => {
    setSelectedVideo(null);
    setIsDocModalOpen(false);
    setPdfFile(null);
    setPdfDescription("");
  };

  const handleVideoUpdate = () => {
    if (!selectedVideo) return;
    setSaving(true);

    axios
      .put(
        `http://localhost:5001/api/y2-quarter1/videos/${selectedVideo.id}`,
        selectedVideo
      )
      .then(() => {
        fetchVideos();
        closeVideoModal();
      })
      .catch((error) => {
        console.error("Error updating video:", error.message);
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const handleDocUpdate = () => {
    if (!selectedVideo) return;
    setSaving(true);

    const formData = new FormData();
    formData.append("pdf", pdfFile);
    formData.append("document_description", pdfDescription);

    axios
      .put(
        `http://localhost:5001/api/y2-quarter1/videos/${selectedVideo.id}/document`,
        formData
      )
      .then(() => {
        fetchVideos();
        closeDocModal();
      })
      .catch((error) => {
        console.error("Error updating document:", error.message);
      })
      .finally(() => {
        setSaving(false);
      });
  };

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
      <h2 className="text-center text-2xl font-semibold mb-12">
        📹 Year 2 Quarter 1 Videos
      </h2>

      {/* Display videos in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="relative group bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <a
              href={video.video}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-t-lg"
            >
              <img
                src={`https://img.youtube.com/vi/${extractYouTubeID(
                  video.video
                )}/0.jpg`}
                alt={`Thumbnail for Year ${video.year} Week ${video.week}`}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
              />
            </a>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg text-white">
                  {` ${video.year} -  ${video.week}`}
                </h4>
                {userRole === "admin" && (
                  <button
                    className="text-gray-400 hover:text-blue-500"
                    onClick={() => openVideoModal(video)}
                    title="Edit Video"
                  >
                    <i className="fas fa-edit"></i> Edit
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-400">{video.video_description}</p>

              {video.document && (
                <div className="mt-4">
                  <a
                    href={`http://localhost:5001/${video.document}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    📄 View Document
                  </a>
                  <button
                    className="text-gray-400 hover:text-green-500 px-4"
                    onClick={() => openDocModal(video)}
                    title="Edit Document"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <p className="text-sm text-gray-400">
                    {video.document_description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`${
                  currentPage === pageNumber
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white"
                } px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out`}
        >
          Next
        </button>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg w-96">
            <h3 className="text-xl text-white mb-4">Edit Video</h3>
            <div className="mb-4">
              <label className="block text-white">Video URL:</label>
              <input
                type="text"
                value={selectedVideo.video}
                onChange={(e) =>
                  setSelectedVideo({
                    ...selectedVideo,
                    video: e.target.value,
                  })
                }
                className="w-full p-2 rounded-lg text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Description:</label>
              <textarea
                value={selectedVideo.video_description}
                onChange={(e) =>
                  setSelectedVideo({
                    ...selectedVideo,
                    video_description: e.target.value,
                  })
                }
                className="w-full p-2 rounded-lg text-black"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleVideoUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                onClick={closeVideoModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Document Modal */}
      {isDocModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg w-96">
            <h3 className="text-xl text-white mb-4">Edit Document</h3>
            <div className="mb-4">
              <label className="block text-white">Upload PDF:</label>
              <input
                type="file"
                onChange={(e) => setPdfFile(e.target.files[0])}
                className="w-full p-2 rounded-lg text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Description:</label>
              <input
                type="text"
                value={pdfDescription}
                onChange={(e) => setPdfDescription(e.target.value)}
                className="w-full p-2 rounded-lg text-black"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleDocUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                onClick={closeDocModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Year2Q1;
