// src/services/lessonService.js
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Function to fetch lessons for Quarter 1
const fetchLessons = async (url) => {
  try {
    // Corrected the string interpolation
    const response = await axios.get(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error; // Rethrow error for the component to handle
  }
};

const fetchPaymentStatus = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/payments/${userId}`);
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
