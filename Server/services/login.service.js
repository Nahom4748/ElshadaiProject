const userService = require("./user.service");
const bcrypt = require("bcrypt");

async function logIn(userData) {
  const { email, password } = userData;

  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return {
        status: "fail",
        message: "Invalid email or password",
      };
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password_hashed
    );
    console.log(user);
    if (!isPasswordValid) {
      return {
        status: "fail",
        message: "Invalid email or password",
      };
    }

    return {
      status: "success",
      data: user,
    };
  } catch (error) {
    console.error("Error in login service:", error);
    throw new Error("An error occurred while logging in");
  }
}

module.exports = {
  logIn,
};
