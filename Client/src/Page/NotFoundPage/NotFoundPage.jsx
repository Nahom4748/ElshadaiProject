import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-darkblack text-white flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-20">
          {/* Animated 404 Illustration */}
          <div
            className="relative mb-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-primaryColor opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <svg
              className="w-64 h-64 md:w-80 md:h-80 relative"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z"
                fill="#3B82F6"
                fillOpacity="0.1"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-6xl font-bold"
                fill="#3B82F6"
                fontSize="80"
              >
                404
              </text>
            </svg>
          </div>

          {/* Content */}
          <div
            className="text-center max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Page Not Found
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Oops! The page you're looking for seems to have vanished into the
              digital void. Don't worry - let's get you back to safe ground.
            </p>

            <Link
              to="/"
              className="inline-block bg-primaryColor hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
