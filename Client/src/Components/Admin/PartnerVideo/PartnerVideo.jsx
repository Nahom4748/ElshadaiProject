import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1f2937",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    width: "90%",
    maxWidth: "400px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

const extractYouTubeID = (url) => {
  const regex = /(?:\?v=|\/embed\/|\/v\/|youtu\.be\/|\/watch\?v=)([^&?/\s]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const PartnerVideo = () => {
  const [videos, setVideos] = useState([]);
  const [videoLink, setVideoLink] = useState("");
  const [description, setDescription] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const videosPerPage = 6;

  const fetchVideos = async () => {
    setFetchLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5001/api/partners/videos"
      );
      setVideos(response.data.data || []);
    } catch (err) {
      setError("Failed to load videos.");
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleAddVideo = async () => {
    if (!videoLink) {
      setError("Video link is required!");
      return;
    }

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
        fetchVideos();
        setVideoLink("");
        setDescription("");
        setModalIsOpen(false);
      }
    } catch (err) {
      setError("Failed to add video.");
    } finally {
      setAddLoading(false);
    }
  };

  const confirmDelete = (id) => {
    setVideoToDelete(id);
    setConfirmModalIsOpen(true);
  };

  const handleDeleteVideo = async () => {
    if (!videoToDelete) return;

    setDeleteLoading(true);
    try {
      await axios.delete(
        `http://localhost:5001/api/partners/videos/${videoToDelete}`
      );
      fetchVideos();
      setConfirmModalIsOpen(false);
      setVideoToDelete(null);
    } catch (err) {
      setError("Failed to delete video.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedVideos = videos.slice(
    currentPage * videosPerPage,
    currentPage * videosPerPage + videosPerPage
  );

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 min-h-screen text-white">
      <h1 className="font-bold text-center mb-10">📹 Manage Partner Videos</h1>

      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-6 text-center">
          {error}
        </div>
      )}

      {fetchLoading ? (
        <p className="text-center text-blue-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedVideos.map((video) => (
            <div
              key={video.video_id}
              className="relative group bg-gray-800 rounded-lg shadow-lg p-4"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${extractYouTubeID(
                    video.video_link
                  )}`}
                  title={video.description || "Video"}
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                {video.description || "No description"}
              </p>
              <button
                onClick={() => confirmDelete(video.video_id)}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-lg mt-4 flex items-center justify-center"
              >
                <FaTrashAlt className="mr-2" /> Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={Math.ceil(videos.length / videosPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-8 space-x-4"}
        previousLinkClassName={
          "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        }
        nextLinkClassName={
          "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
        activeClassName={"bg-blue-700 text-white px-3 py-1 rounded"}
      />

      <button
        onClick={() => setModalIsOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg border-4 border-white"
      >
        <FaPlus className="text-2xl" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customModalStyles}
      >
        <h2 className="text-2xl mb-4">Add New Video</h2>
        <input
          type="text"
          placeholder="Video Link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
        />
        <button
          onClick={handleAddVideo}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          {addLoading ? "Adding..." : "Add Video"}
        </button>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={confirmModalIsOpen}
        onRequestClose={() => setConfirmModalIsOpen(false)}
        style={customModalStyles}
      >
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this video?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setConfirmModalIsOpen(false)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteVideo}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            {deleteLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PartnerVideo;
