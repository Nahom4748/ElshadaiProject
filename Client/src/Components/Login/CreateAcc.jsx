import React, { useState } from "react";
import axios from "axios";
import img_her2 from "../../assets/images/education/hero_shape2.png";
import img_her3 from "../../assets/images/education/hero_shape3.png";
import img_her4 from "../../assets/images/education/hero_shape4.png";
import img_her5 from "../../assets/images/education/hero_shape5.png";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLock,
} from "react-icons/ai"; // Importing icons

function CreateAcc() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    company_role: "User",
    password: "",
    city: "",
    country: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required.";
    if (!formData.last_name) newErrors.last_name = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const companyRoleId = (formData.company_role = 3);
        const response = await axios.post(
          "http://localhost:5001/api/user/register",
          { ...formData, company_role_id: companyRoleId }
        );

        setSuccessMessage("Account created successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          company_role: "User",
          password: "",
          city: "",
          country: "",
        });
      } catch (error) {
        console.error("Error:", error);
        setErrors({ submit: "Failed to create account. Please try again." });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container mx-auto p-8 md:p-12 max-w-xl bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">Sign Up</h3>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <AiOutlineUser className="absolute left-3 top-2 text-gray-400" />
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm">{errors.first_name}</p>
              )}
            </div>
            <div className="relative">
              <AiOutlineUser className="absolute left-3 top-2 text-gray-400" />
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <AiOutlinePhone className="absolute left-3 top-2 text-gray-400" />
            <input
              name="phone_number"
              type="text"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              />
            </div>
            <div className="relative">
              <input
                name="country"
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
              />
            </div>
          </div>

          <div className="relative">
            <AiOutlineLock className="absolute left-3 top-2 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3  bg-blue rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>

          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
          {errors.submit && (
            <p className="text-red-500 text-center mt-4">{errors.submit}</p>
          )}
        </form>
      </div>

      {/* Animated decorative images */}
      <img
        loading="lazy"
        className="absolute right-10 top-32 animate-bounce w-10 h-10 opacity-75"
        src={img_her2}
        alt="Decorative Shape"
      />
      <img
        loading="lazy"
        className="absolute left-10 bottom-32 animate-spin-slow w-12 h-12 opacity-75"
        src={img_her3}
        alt="Decorative Shape"
      />
      <img
        loading="lazy"
        className="absolute right-1/3 top-10 animate-spin w-8 h-8 opacity-50"
        src={img_her4}
        alt="Decorative Shape"
      />
      <img
        loading="lazy"
        className="absolute left-1/4 bottom-10 animate-pulse w-12 h-12 opacity-50"
        src={img_her5}
        alt="Decorative Shape"
      />
    </section>
  );
}

export default CreateAcc;
