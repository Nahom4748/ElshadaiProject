import axios from "axios";
import BASE_URL from "../util/baseURL";
// Base URL for your API

// A function to send the login request to the server
const logIn = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user/login`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
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
