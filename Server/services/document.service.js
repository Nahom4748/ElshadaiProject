// Import necessary modules
const db = require("../config/db.config");
const fs = require("fs"); // File system module
const path = require("path"); // Path module

exports.updateDocument = async (req) => {
  try {
    // Destructure required parameters and body from the request
    const { id } = req.params;
    console.log(id);
    const { document_description } = req.body;

    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const newDocumentPath = req.file.path; // Path to the newly uploaded file

    // Fetch the current record for the specified video
    const [existingVideo] = await db.query(
      "SELECT document FROM quarter1 WHERE id = ?",
      [id]
    );

    // Check if the video exists in the database
    if (!existingVideo || !existingVideo.document) {
      throw new Error("Video not found or document does not exist");
    }

    // Delete the old document if it exists
    const oldFilePath = path.join(__dirname, "../", existingVideo.document);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath); // Remove the old file
    }

    // Update the database with the new document and description
    await db.query(
      "UPDATE quarter1 SET document = ?, document_description = ? WHERE id = ?",
      [newDocumentPath, document_description, id]
    );

    // Return a success message
    return { message: "Document updated successfully" };
  } catch (error) {
    console.error("Error in document update service:", error.message); // Log the error
    // Handle errors appropriately
    if (error.message === "No file uploaded") {
      throw new Error("No file uploaded. Please upload a valid file.");
    } else if (error.message === "Video not found or document does not exist") {
      throw new Error("Video not found. Unable to update document.");
    }
    throw new Error("Internal server error. Please try again later.");
  }
};

exports.updateDocument2 = async (req) => {
  try {
    // Destructure required parameters and body from the request
    const { id } = req.params;
    console.log(id);
    const { document_description } = req.body;

    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const newDocumentPath = req.file.path; // Path to the newly uploaded file

    // Fetch the current record for the specified video
    const [existingVideo] = await db.query(
      "SELECT document FROM quarter2 WHERE id = ?",
      [id]
    );

    // Check if the video exists in the database
    if (!existingVideo || !existingVideo.document) {
      throw new Error("Video not found or document does not exist");
    }

    // Delete the old document if it exists
    const oldFilePath = path.join(__dirname, "../", existingVideo.document);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath); // Remove the old file
    }

    // Update the database with the new document and description
    await db.query(
      "UPDATE quarter2 SET document = ?, document_description = ? WHERE id = ?",
      [newDocumentPath, document_description, id]
    );

    // Return a success message
    return { message: "Document updated successfully" };
  } catch (error) {
    console.error("Error in document update service:", error.message); // Log the error
    // Handle errors appropriately
    if (error.message === "No file uploaded") {
      throw new Error("No file uploaded. Please upload a valid file.");
    } else if (error.message === "Video not found or document does not exist") {
      throw new Error("Video not found. Unable to update document.");
    }
    throw new Error("Internal server error. Please try again later.");
  }
};

exports.updateDocument3 = async (req) => {
  try {
    // Destructure required parameters and body from the request
    const { id } = req.params;
    console.log(id);
    const { document_description } = req.body;

    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const newDocumentPath = req.file.path; // Path to the newly uploaded file

    // Fetch the current record for the specified video
    const [existingVideo] = await db.query(
      "SELECT document FROM quarter3 WHERE id = ?",
      [id]
    );

    // Check if the video exists in the database
    if (!existingVideo || !existingVideo.document) {
      throw new Error("Video not found or document does not exist");
    }

    // Delete the old document if it exists
    const oldFilePath = path.join(__dirname, "../", existingVideo.document);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath); // Remove the old file
    }

    // Update the database with the new document and description
    await db.query(
      "UPDATE quarter3 SET document = ?, document_description = ? WHERE id = ?",
      [newDocumentPath, document_description, id]
    );

    // Return a success message
    return { message: "Document updated successfully" };
  } catch (error) {
    console.error("Error in document update service:", error.message); // Log the error
    // Handle errors appropriately
    if (error.message === "No file uploaded") {
      throw new Error("No file uploaded. Please upload a valid file.");
    } else if (error.message === "Video not found or document does not exist") {
      throw new Error("Video not found. Unable to update document.");
    }
    throw new Error("Internal server error. Please try again later.");
  }
};
exports.updateDocument4 = async (req) => {
  try {
    // Destructure required parameters and body from the request
    const { id } = req.params;
    console.log(id);
    const { document_description } = req.body;

    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const newDocumentPath = req.file.path; // Path to the newly uploaded file

    // Fetch the current record for the specified video
    const [existingVideo] = await db.query(
      "SELECT document FROM quarter1 WHERE id = ?",
      [id]
    );

    // Check if the video exists in the database
    if (!existingVideo || !existingVideo.document) {
      throw new Error("Video not found or document does not exist");
    }

    // Delete the old document if it exists
    const oldFilePath = path.join(__dirname, "../", existingVideo.document);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath); // Remove the old file
    }

    // Update the database with the new document and description
    await db.query(
      "UPDATE quarter1 SET document = ?, document_description = ? WHERE id = ?",
      [newDocumentPath, document_description, id]
    );

    // Return a success message
    return { message: "Document updated successfully" };
  } catch (error) {
    console.error("Error in document update service:", error.message); // Log the error
    // Handle errors appropriately
    if (error.message === "No file uploaded") {
      throw new Error("No file uploaded. Please upload a valid file.");
    } else if (error.message === "Video not found or document does not exist") {
      throw new Error("Video not found. Unable to update document.");
    }
    throw new Error("Internal server error. Please try again later.");
  }
};
exports.updateDocument5 = async (req) => {
  try {
    // Destructure required parameters and body from the request
    const { id } = req.params;
    console.log(id);
    const { document_description } = req.body;

    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const newDocumentPath = req.file.path; // Path to the newly uploaded file

    // Fetch the current record for the specified video
    const [existingVideo] = await db.query(
      "SELECT document FROM quarter2 WHERE id = ?",
      [id]
    );

    // Check if the video exists in the database
    if (!existingVideo || !existingVideo.document) {
      throw new Error("Video not found or document does not exist");
    }

    // Delete the old document if it exists
    const oldFilePath = path.join(__dirname, "../", existingVideo.document);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath); // Remove the old file
    }

    // Update the database with the new document and description
    await db.query(
      "UPDATE quarter2 SET document = ?, document_description = ? WHERE id = ?",
      [newDocumentPath, document_description, id]
    );

    // Return a success message
    return { message: "Document updated successfully" };
  } catch (error) {
    console.error("Error in document update service:", error.message); // Log the error
    // Handle errors appropriately
    if (error.message === "No file uploaded") {
      throw new Error("No file uploaded. Please upload a valid file.");
    } else if (error.message === "Video not found or document does not exist") {
      throw new Error("Video not found. Unable to update document.");
    }
    throw new Error("Internal server error. Please try again later.");
  }
};
exports.updateDocument6 = async (req) => {
  try {
    // Destructure required parameters and body from the request
    const { id } = req.params;
    console.log(id);
    const { document_description } = req.body;

    // Check if a file was uploaded
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const newDocumentPath = req.file.path; // Path to the newly uploaded file

    // Fetch the current record for the specified video
    const [existingVideo] = await db.query(
      "SELECT document FROM quarter3 WHERE id = ?",
      [id]
    );

    // Check if the video exists in the database
    if (!existingVideo || !existingVideo.document) {
      throw new Error("Video not found or document does not exist");
    }

    // Delete the old document if it exists
    const oldFilePath = path.join(__dirname, "../", existingVideo.document);
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath); // Remove the old file
    }

    // Update the database with the new document and description
    await db.query(
      "UPDATE quarter3 SET document = ?, document_description = ? WHERE id = ?",
      [newDocumentPath, document_description, id]
    );

    // Return a success message
    return { message: "Document updated successfully" };
  } catch (error) {
    console.error("Error in document update service:", error.message); // Log the error
    // Handle errors appropriately
    if (error.message === "No file uploaded") {
      throw new Error("No file uploaded. Please upload a valid file.");
    } else if (error.message === "Video not found or document does not exist") {
      throw new Error("Video not found. Unable to update document.");
    }
    throw new Error("Internal server error. Please try again later.");
  }
};
