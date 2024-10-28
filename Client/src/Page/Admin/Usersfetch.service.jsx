
//import from the environment file
const api_url = "http://localhost:5001";

//get all users
const getAllUsers = async (token) => {

  const requestOptions =  {
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "x-access-token": token,
    }
  };
  const response = await fetch(`${api_url}/api/users`, requestOptions);
  return response.json();
};

//get user by id
const getUserById = async (id, token) => {
  const requestOptions =  {
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "x-access-token": token,
    }
  };
  const response = await fetch(`${api_url}/api/user/${id}`, requestOptions);
  return response.json();
};
// function to reset password
const resetPassword = async (id, token) => {
  const requestOptions =  {
    method : "PUT",
    headers : {
      "Content-Type" : "application/json",
      "x-access-token": token,
    }
  };
  const response = await fetch(`${api_url}/api/user/reset/${id}`, requestOptions);
  return response.json();
};
//function to update user
const updateUser = async (id, userData, token) => {
  const requestOptions =  {
    method : "PUT",
    headers : {
      "Content-Type" : "application/json",
      "x-access-token": token,
    },
    body : JSON.stringify(userData),
  };
  const response = await fetch(`${api_url}/api/user/${id}`, requestOptions);
  return response.json();
};
// function to delete user
const deleteUser = async (id, token) => {
  const requestOptions =  {
    method : "DELETE",
    headers : {
      "Content-Type" : "application/json",
      "x-access-token": token,
    }
  };
  const response = await fetch(`${api_url}/api/user/${id}`, requestOptions);
  return response.json();
};
const userService = {
  getAllUsers,
  getUserById,
  resetPassword,
  updateUser,
  deleteUser,
};

export default userService;