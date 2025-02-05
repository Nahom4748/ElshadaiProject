const BASE_URL = "http://localhost:5001"; // Replace with your backend URL if deployed

// Request password reset
const requestPasswordReset = async (email) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  };

  try {
    const response = await fetch(`${BASE_URL}/request`, requestOptions);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to send reset link.");
    }
    return data;
  } catch (error) {
    console.error("Error in requestPasswordReset:", error);
    throw new Error(
      error.message || "Service error: Password reset request failed."
    );
  }
};

// Confirm password reset
const confirmPasswordReset = async (token, newPassword) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword }),
  };

  try {
    const response = await fetch(`${BASE_URL}/confirm`, requestOptions);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to reset password.");
    }
    return data;
  } catch (error) {
    console.error("Error in confirmPasswordReset:", error);
    throw new Error(
      error.message || "Service error: Password reset confirmation failed."
    );
  }
};

// Export the functions
const passwordService = {
  requestPasswordReset,
  confirmPasswordReset,
};

export default passwordService;
