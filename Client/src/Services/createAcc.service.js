import axios from "axios";

const api_url = "http://localhost:5001/api/user/register";

// Function to fetch lessons for Quarter 1
const createAcc = async (formData, company_role_id) => {
  try {
    // Constructing the URL properly for a POST request
    const response = await axios.post(api_url, {
      ...formData,
      company_role_id,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error; // Rethrow error for handling in the component
  }
};

const createAccService = {
  createAcc,
};

export default createAccService;
