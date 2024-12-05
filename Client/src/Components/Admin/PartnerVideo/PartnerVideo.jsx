import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

// Modal styles
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1f2937", // Tailwind gray-800
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    width: "90%",
    maxWidth: "500px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

const PartnerVideo = () => {
  const [videos, setVideos] = useState([]);
  const [videoLink, setVideoLink] = useState("");
  const [description, setDescription] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalAction, setModalAction] = useState(null);

  // Function to fetch videos
  const fetchVideos = async () => {
    setFetchLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://localhost:5001/api/partners/videos"
      );
      if (response.data.success && Array.isArray(response.data.data)) {
        setVideos(response.data.data);
      } else {
        setError("No videos found or data is in an unexpected format.");
      }
    } catch (err) {
      setError("Failed to load videos. Please try again later.");
    } finally {
      setFetchLoading(false);
    }
  };

  // Fetch videos when the component mounts
  useEffect(() => {
    fetchVideos();
  }, []);

  // Function to handle adding a new video
  const handleAddVideo = async () => {
    if (!videoLink) {
      setError("Video link is required!");
      return;
    }

    setError(null);
    setAddLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/partners/videos",
        {
          video_link: videoLink,
          description,
        }
      );

      if (response.status === 201) {
        setModalMessage("Video added successfully!");
        setModalAction(null);
        setModalIsOpen(true);
        setVideoLink("");
        setDescription("");
        fetchVideos();
      } else {
        setError("Failed to add video. Please try again.");
      }
    } catch (err) {
      setError("Failed to add video. Please try again.");
    } finally {
      setAddLoading(false);
    }
  };

  // Function to handle deleting a video
  const handleDeleteVideo = (id) => {
    setModalMessage("Are you sure you want to delete this video?");
    setModalAction(() => async () => {
      setDeleteLoading(true);
      try {
        await axios.delete(`http://localhost:5001/api/partners/videos/${id}`);
        setModalMessage("Video deleted successfully!");
        setModalAction(null);
        fetchVideos();
      } catch (err) {
        setError("Failed to delete video. Please try again.");
      } finally {
        setDeleteLoading(false);
        setModalIsOpen(false);
      }
    });
    setModalIsOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        📹 Manage Partner Videos
      </h1>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-6 text-center shadow-lg">
          {error}
        </div>
      )}

      {/* Add new video section */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Video
        </h2>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Video Link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="w-full p-5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            onClick={handleAddVideo}
            disabled={addLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {addLoading ? "Adding..." : "Add Video"}
          </button>
        </div>
      </div>

      {/* All videos section */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">All Videos</h2>
        {fetchLoading && (
          <p className="text-center text-blue-400">Loading...</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video) => {
            const videoId =
              video.video_link && video.video_link.includes("v=")
                ? video.video_link.split("v=")[1].split("&")[0]
                : null;

            return (
              <div
                key={video.video_id}
                className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 flex flex-col items-center"
              >
                {videoId ? (
                  <a
                    href={video.video_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                      alt="Video Thumbnail"
                      className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                  </a>
                ) : (
                  <div className="text-center text-red-500">
                    Invalid video link
                  </div>
                )}
                <p className="text-sm text-gray-300 mt-4">
                  {video.description}
                </p>
                <button
                  onClick={() => handleDeleteVideo(video.video_id)}
                  disabled={deleteLoading}
                  className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  {deleteLoading ? "Deleting..." : "Delete"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customModalStyles}
      >
        <p className="text-center text-lg">{modalMessage}</p>
        <div className="mt-6 flex justify-center space-x-6">
          {modalAction && (
            <button
              onClick={modalAction}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg"
            >
              Confirm
            </button>
          )}
          <button
            onClick={() => setModalIsOpen(false)}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-5 rounded-lg"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PartnerVideo;
