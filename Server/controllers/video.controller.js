// Import the vehicle service
const videoService = require("../services/video.service");

// Create a function to create a vehicle

async function quarter1videos(req, res, next) {
  try {
    //call the getAllCustomers method from the customer service
    const customers = await videoService.quarter1();
    //send the customers as a response
    res.status(200).json(customers);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function update_quarter1videos(req, res, next) {
  const { id } = req.params;
  try {
    //call the getAllCustomers method from the customer service
    const updatedVideos = await videoService.update_quarter1(id, req.body);
    //send the customers as a response
    res.status(200).json(updatedVideos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function quarter2videos(req, res, next) {
  try {
    //call the getAllCustomers method from the customer service
    const videos = await videoService.quarter2();
    //send the customers as a response
    res.status(200).json(videos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function update_quarter2videos(req, res, next) {
  const { id } = req.params;
  try {
    //call the getAllCustomers method from the customer service
    const updatedVideos = await videoService.update_quarter2(id, req.body);
    //send the customers as a response
    res.status(200).json(updatedVideos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}

async function quarter3videos(req, res, next) {
  try {
    //call the getAllCustomers method from the customer service
    const videos = await videoService.quarter3();
    //send the customers as a response
    res.status(200).json(videos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function update_quarter3videos(req, res, next) {
  const { id } = req.params;
  try {
    //call the getAllCustomers method from the customer service
    const updatedVideos = await videoService.update_quarter3(id, req.body);
    //send the customers as a response
    res.status(200).json(updatedVideos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function y2quarter1videos(req, res, next) {
  try {
    //call the getAllCustomers method from the customer service
    const videos = await videoService.y2quarter1();
    //send the customers as a response
    res.status(200).json(videos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function update_y2quarter1videos(req, res, next) {
  const { id } = req.params;
  try {
    //call the getAllCustomers method from the customer service
    const updatedVideos = await videoService.y2quarter1update(id, req.body);
    //send the customers as a response
    res.status(200).json(updatedVideos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}

async function y2quarter2videos(req, res, next) {
  try {
    //call the getAllCustomers method from the customer service
    const videos = await videoService.y2quarter2();
    //send the customers as a response
    res.status(200).json(videos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function update_y2quarter2videos(req, res, next) {
  const { id } = req.params;
  try {
    //call the getAllCustomers method from the customer service
    const updatedVideos = await videoService.y2quarter2update(id, req.body);
    //send the customers as a response
    res.status(200).json(updatedVideos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function y2quarter3videos(req, res, next) {
  try {
    //call the getAllCustomers method from the customer service
    const videos = await videoService.y2quarter3();
    //send the customers as a response
    res.status(200).json(videos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
async function update_y2quarter3videos(req, res, next) {
  const { id } = req.params;
  try {
    //call the getAllCustomers method from the customer service
    const updatedVideos = await videoService.y2quarter3update(id, req.body);
    //send the customers as a response
    res.status(200).json(updatedVideos);
  } catch (error) {
    //send the error as a response
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Authentication invalid" });
  }
}
// Export the functions
module.exports = {
  quarter1videos,
  quarter2videos,
  quarter3videos,
  y2quarter1videos,
  y2quarter2videos,
  y2quarter3videos,
  update_quarter1videos,
  update_quarter2videos,
  update_quarter3videos,
  update_y2quarter1videos,
  update_y2quarter2videos,
  update_y2quarter3videos,
};
