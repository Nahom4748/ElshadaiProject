import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLock,
} from "react-icons/ai";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import createAccService from "../../Services/createAcc.service";
import img_her2 from "../../assets/images/education/hero_shape2.png";
import img_her3 from "../../assets/images/education/hero_shape3.png";
import img_her4 from "../../assets/images/education/hero_shape4.png";
import img_her5 from "../../assets/images/education/hero_shape5.png";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";
    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Valid email is required";
    }
    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const company_role_id = 3;
      await createAccService.createAcc(formData, company_role_id);

      setSuccessMessage("Account created successfully!");

      setErrors({});
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
      setErrors({
        submit:
          error.response?.data?.message ||
          "Failed to create account. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto p-6 max-w-2xl">
        <div className="relative bg-white rounded-2xl shadow-xl px-8 py-12 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="relative">
                  <AiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg peer-focus:text-indigo-600" />
                  <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                      errors.first_name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-200"
                    }`}
                  />
                </div>
                {errors.first_name && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <FiAlertCircle /> {errors.first_name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <AiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                      errors.last_name
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-200"
                    }`}
                  />
                </div>
                {errors.last_name && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <FiAlertCircle /> {errors.last_name}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <AiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-200"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm flex items-center gap-1">
                  <FiAlertCircle /> {errors.email}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <AiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="relative">
                <AiOutlineLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-200"
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm flex items-center gap-1">
                  <FiAlertCircle /> {errors.password}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 bg-blue hover:bg-indigo-700 text-white py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                "Create Free Account"
              )}
            </button>

            {successMessage && (
              <div className="mt-4 p-4 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-3">
                <FiCheckCircle className="text-xl" />
                {successMessage}
              </div>
            )}

            {errors.submit && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-3">
                <FiAlertCircle className="text-xl" />
                {errors.submit}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Decorative elements */}
      <img
        src={img_her2}
        alt="Decoration"
        className="absolute right-10 top-20 w-12 h-12 opacity-20 animate-float"
      />
      <img
        src={img_her3}
        alt="Decoration"
        className="absolute left-12 bottom-40 w-16 h-16 opacity-20 animate-float-delayed"
      />
      <img
        src={img_her4}
        alt="Decoration"
        className="absolute right-1/4 top-1/3 w-14 h-14 opacity-15 animate-spin-slow"
      />
      <img
        src={img_her5}
        alt="Decoration"
        className="absolute left-1/3 bottom-20 w-18 h-18 opacity-15 animate-pulse"
      />
    </section>
  );
}

export default CreateAcc;
