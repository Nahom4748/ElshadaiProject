import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaGlobe,
  FaLock,
} from "react-icons/fa";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function AddEmployee() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    company_role: "",
    password: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.first_name) formErrors.first_name = "First name is required";
    if (!formData.last_name) formErrors.last_name = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.phone_number)
      formErrors.phone_number = "Phone number is required";
    if (!formData.company_role)
      formErrors.company_role = "Company role is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.country) formErrors.country = "Country is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const companyRoleId = formData.company_role === "Admin" ? 1 : 2;

        const response = await axios.post(`${BASE_URL}/api/user/register`, {
          ...formData,
          company_role_id: companyRoleId,
        });

        console.log("Employee added:", response.data);
        setSuccessMessage("Employee added successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          company_role: "",
          password: "",
          city: "",
          country: "",
        });
      } catch (error) {
        console.error("Error adding employee:", error);
        setErrors({ submit: "Failed to add employee. Please try again." });
      }
    }
  };

  return (
    <div className="lg:col-start-4 lg:col-span-9">
      <div className="p-6 md:p-10 mb-5 bg-white shadow-md rounded-lg">
        <div className="mb-6 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800">Add New Employee</h2>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit} data-aos="fade-up">
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errors.submit && <p className="text-red-500">{errors.submit}</p>}

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="first_name" className="block font-semibold mb-1">
                First Name *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaUser className="ml-3" />
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.first_name && (
                <p className="text-red-500">{errors.first_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="last_name" className="block font-semibold mb-1">
                Last Name *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaUser className="ml-3" />
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.last_name && (
                <p className="text-red-500">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email Address *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaEnvelope className="ml-3" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label
                htmlFor="phone_number"
                className="block font-semibold mb-1"
              >
                Phone Number *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaPhone className="ml-3" />
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.phone_number && (
                <p className="text-red-500">{errors.phone_number}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="city" className="block font-semibold mb-1">
                City *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaCity className="ml-3" />
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block font-semibold mb-1">
                Country *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaGlobe className="ml-3" />
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.country && (
                <p className="text-red-500">{errors.country}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="company_role"
                className="block font-semibold mb-1"
              >
                Company Role *
              </label>
              <select
                name="company_role"
                id="company_role"
                value={formData.company_role}
                onChange={handleChange}
                className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
              </select>
              {errors.company_role && (
                <p className="text-red-500">{errors.company_role}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-1">
                Password *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <FaLock className="ml-3" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 outline-none"
                />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-72 h-10 bg-blue-600 text-white bg-blue rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
