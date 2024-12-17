// src/services/lessonService.js
import axios from "axios";

const api_url = "http://localhost:5001";

// Function to fetch lessons for Quarter 1
const fetchvedios = async () => {
  try {
    // Corrected the string interpolation
    const response = await axios.get(`${api_url}/api/partners/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error; // Rethrow error for the component to handle
  }
};

const partnervideoService = {
  fetchvedios,
};

export default partnervideoService;
