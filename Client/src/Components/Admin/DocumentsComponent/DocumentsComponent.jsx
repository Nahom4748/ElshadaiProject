import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFolder, FaFolderOpen, FaArrowRight } from "react-icons/fa";

const yearsData = {
  year1: {
    name: "Year-One-Docs",
    quarters: ["Quarter-1", "Quarter 2", "Quarter 3"],
  },
  year2: {
    name: "Year-Two",
    quarters: ["Quarter 1", "Quarter 2", "Quarter 3"],
  },
};

const YearlyDocuments = () => {
  const navigate = useNavigate();
  const [openYear, setOpenYear] = useState("year1");

  const handleNavigation = (year, quarter) => {
    navigate(`/details/${year}/${quarter}`);
  };

  const toggleYear = (yearKey) => {
    setOpenYear((prev) => (prev === yearKey ? null : yearKey));
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg lg:col-span-9">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        Yearly Quarters
      </h2>

      {/* Yearly Content */}
      {Object.entries(yearsData).map(([yearKey, year]) => (
        <details
          key={yearKey}
          className={`mb-6 rounded-lg overflow-hidden shadow-md border transition-all duration-300 ${
            openYear === yearKey ? "border-blue-500" : "border-gray-300"
          }`}
          open={openYear === yearKey}
          onClick={() => toggleYear(yearKey)}
        >
          {/* Summary */}
          <summary
            className={`flex items-center justify-between p-4 text-lg font-semibold cursor-pointer hover:bg-blue-100 transition ${
              openYear === yearKey
                ? "bg-blue-200 text-blue-800"
                : "bg-gray-100 text-black"
            }`}
          >
            <span className="flex items-center space-x-3">
              <FaFolderOpen className="text-2xl" />
              <span>{year.name}</span>
            </span>
            <span className="text-lg font-bold">
              {openYear === yearKey ? "-" : "+"}
            </span>
          </summary>

          {/* Quarters */}
          <ul className="mt-2 space-y-2 py-4 px-6 bg-white">
            {year.quarters.map((quarter, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavigation(year.name, quarter)}
                  className="flex items-center justify-between w-full p-3 text-left text-gray-800 rounded-lg shadow hover:bg-blue-100 transition-all duration-200 group"
                >
                  <span className="flex items-center space-x-3">
                    <FaFolder className="text-lg text-blue-600 transition-transform duration-300 transform group-hover:translate-x-2 group-hover:text-blue-800" />
                    <span className="font-medium">{quarter}</span>
                  </span>
                  <span className="text-blue-600 font-bold transition-transform duration-300 transform group-hover:translate-x-2 group-hover:text-blue-800">
                    &rarr;
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default YearlyDocuments;
