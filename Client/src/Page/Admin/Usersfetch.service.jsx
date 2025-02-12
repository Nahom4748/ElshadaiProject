const BASE_URL = import.meta.env.VITE_BASE_URL;

// Get all users
const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

// Get user by ID
const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/${id}`);
    return response.json();
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
};

// Update user
const updateUser = async (userId, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update user");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
};

// Delete user
const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete user");
    }
    return response.json();
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};

const userService = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

export default userService;
