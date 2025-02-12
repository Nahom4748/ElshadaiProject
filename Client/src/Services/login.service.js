import axios from "axios";

// Base URL for your API
const BASE_URL = import.meta.env.VITE_BASE_URL;

// A function to send the login request to the server
const logIn = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/login`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data; // Return only the response data
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

// Export the functions
const loginService = {
  logIn,
};
export default loginService;
