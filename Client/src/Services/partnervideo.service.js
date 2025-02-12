// src/services/lessonService.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Function to fetch lessons for Quarter 1
const fetchvedios = async () => {
  try {
    // Corrected the string interpolation
    const response = await axios.get(`${BASE_URL}/api/partners/videos`);
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
