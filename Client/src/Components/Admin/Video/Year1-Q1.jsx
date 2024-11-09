import React, { useEffect, useState } from "react";
import axios from "axios";

const Year1Q1 = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/quarter1/videos")
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const handleUpdate = () => {
    console.log("Updated video details:", selectedVideo);
    closeModal();
  };

  const extractYouTubeID = (url) => {
    try {
      const regExp =
        /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[1].length === 11 ? match[1] : null;
    } catch (err) {
      console.error("Invalid YouTube URL:", url);
      return null;
    }
  };

  if (loading)
    return <div className="text-white text-center">Loading videos...</div>;
  if (error)
    return (
      <div className="text-white text-center">
        Error fetching videos: {error}
      </div>
    );

  return (
    <div className="bg-gray-900 p-8 text-white min-h-screen">
      <h2 className="text-center text-4xl font-semibold mb-12">
        Year 1 Quarter 1 Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-base text-gray-800">{`Year ${video.year} - Week ${video.week}`}</h4>
              <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                onClick={() => openModal(video)}
                title="Edit Video"
              >
                ✎
              </button>
            </div>
            <a
              href={video.video}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <img
                src={`https://img.youtube.com/vi/${extractYouTubeID(
                  video.video
                )}/0.jpg`}
                alt={`Thumbnail for Year ${video.year} Week ${video.week}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </a>
            <p className="text-sm text-gray-700">{video.video_description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Edit Video Details
            </h3>
            <div className="space-y-4">
              <label className="block text-lg text-gray-800">Year:</label>
              <input
                type="text"
                value={selectedVideo.year}
                onChange={(e) =>
                  setSelectedVideo({ ...selectedVideo, year: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-lg text-gray-800">Week:</label>
              <input
                type="text"
                value={selectedVideo.week}
                onChange={(e) =>
                  setSelectedVideo({ ...selectedVideo, week: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-lg text-gray-800">Video URL:</label>
              <input
                type="text"
                value={selectedVideo.video}
                onChange={(e) =>
                  setSelectedVideo({ ...selectedVideo, video: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-lg text-gray-800">
                Video Description:
              </label>
              <textarea
                value={selectedVideo.video_description}
                onChange={(e) =>
                  setSelectedVideo({
                    ...selectedVideo,
                    video_description: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all"
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

export default Year1Q1;
