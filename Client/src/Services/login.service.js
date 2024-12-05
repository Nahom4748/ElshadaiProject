import axios from "axios";

// Base URL for your API
const api_url = "http://localhost:5001/api/user";

// A function to send the login request to the server
const logIn = async (formData) => {
  try {
    const response = await axios.post(`${api_url}/login`, formData, {
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
