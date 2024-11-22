const partnersService = require("../services/partnersvideos.service");

async function createVideos(req, res) {
  try {
    const videoData = req.body;
    const videoId = await partnersService.createVideo(videoData);
    res.status(201).json({
      message: "Video created successfully",
      success: true,
      video_id: videoId,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

async function getAllVideos(req, res) {
  try {
    const videos = await partnersService.getAllVideos();
    res.status(200).json({
      message: "Videos retrieved successfully",
      success: true,
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

async function deleteVideo(req, res) {
  try {
    const videoId = req.params.id;
    const result = await partnersService.deleteVideo(videoId);
    if (result === 0) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

module.exports = {
  createVideos,
  getAllVideos,
  deleteVideo,
};
