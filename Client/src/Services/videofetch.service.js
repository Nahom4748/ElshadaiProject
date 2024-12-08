// src/services/lessonService.js
import axios from "axios";

const api_url = "http://localhost:5001";

// Function to fetch lessons for Quarter 1
const fetchLessons = async (url) => {
  try {
    // Corrected the string interpolation
    const response = await axios.get(`${api_url}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error; // Rethrow error for the component to handle
  }
};

const fetchPaymentStatus = async (userId) => {
  try {
    const response = await axios.get(`${api_url}/api/payments/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching payment status:", error);
    throw error; // Rethrow error for the component to handle
  }
};

const videoService = {
  fetchPaymentStatus,
  fetchLessons,
};

export default videoService;
