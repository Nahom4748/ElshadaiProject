import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_URL = "/api/user/register"; // Ensure correct variable naming

const createAcc = async (formData, company_role_id) => {
  try {
    // Constructing the URL correctly
    const response = await axios.post(`${BASE_URL}${API_URL}`, {
      ...formData,
      company_role_id,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error creating account:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

const createAccService = {
  createAcc,
};

export default createAccService;
