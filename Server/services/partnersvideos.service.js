const db = require("../config/db.config");

// Function to create a video
async function createVideo(videoData) {
  try {
    const { video_link, description } = videoData;
    const sql =
      "INSERT INTO Partners_Videos (video_link, description) VALUES (?, ?)";
    const result = await db.query(sql, [video_link, description]);
    return result.insertId; // Return the ID of the inserted video
  } catch (error) {
    console.error("Error creating video:", error.message);
    throw new Error("Failed to create video.");
  }
}

// Function to fetch all videos
async function getAllVideos() {
  try {
    const sql = "SELECT * FROM Partners_Videos ORDER BY uploaded_at DESC";
    const videos = await db.query(sql);
    return videos; // Return all videos
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    throw new Error("Failed to fetch videos.");
  }
}

// Function to delete a video by ID
async function deleteVideo(videoId) {
  try {
    const sql = "DELETE FROM Partners_Videos WHERE video_id = ?";
    const result = await db.query(sql, [videoId]);
    return result.affectedRows; // Return the number of affected rows
  } catch (error) {
    console.error("Error deleting video:", error.message);
    throw new Error("Failed to delete video.");
  }
}

module.exports = {
  createVideo,
  getAllVideos,
  deleteVideo,
};
