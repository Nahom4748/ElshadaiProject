// Import necessary modules
const serviceService = require("../services/document.service");

// Update document controller function
async function updateDocument(req, res) {
  try {
    // Call the service to handle the update logic
    const result = await serviceService.updateDocument(req);

    // Send success response
    return res.status(200).json({
      message: "Document updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);

    // Send error response
    return res.status(500).json({
      message: "Error updating document",
      error: error.message,
    });
  }
}
async function updateDocument2(req, res) {
  try {
    // Call the service to handle the update logic
    const result = await serviceService.updateDocument2(req);

    // Send success response
    return res.status(200).json({
      message: "Document updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);

    // Send error response
    return res.status(500).json({
      message: "Error updating document",
      error: error.message,
    });
  }
}
async function updateDocument3(req, res) {
  try {
    // Call the service to handle the update logic
    const result = await serviceService.updateDocument3(req);

    // Send success response
    return res.status(200).json({
      message: "Document updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);

    // Send error response
    return res.status(500).json({
      message: "Error updating document",
      error: error.message,
    });
  }
}
async function updateDocument4(req, res) {
  try {
    // Call the service to handle the update logic
    const result = await serviceService.updateDocument4(req);

    // Send success response
    return res.status(200).json({
      message: "Document updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);

    // Send error response
    return res.status(500).json({
      message: "Error updating document",
      error: error.message,
    });
  }
}
async function updateDocument5(req, res) {
  try {
    // Call the service to handle the update logic
    const result = await serviceService.updateDocument5(req);

    // Send success response
    return res.status(200).json({
      message: "Document updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);

    // Send error response
    return res.status(500).json({
      message: "Error updating document",
      error: error.message,
    });
  }
}
async function updateDocument6(req, res) {
  try {
    // Call the service to handle the update logic
    const result = await serviceService.updateDocument6(req);

    // Send success response
    return res.status(200).json({
      message: "Document updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);

    // Send error response
    return res.status(500).json({
      message: "Error updating document",
      error: error.message,
    });
  }
}
module.exports = {
  updateDocument,
  updateDocument2,
  updateDocument3,
  updateDocument4,
  updateDocument5,
  updateDocument6,
};
