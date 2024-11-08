import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa"; // Importing FontAwesome icons

const Payment = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuarters, setSelectedQuarters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const usersPerPage = 8;

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/users") // Replace with your API endpoint
      .then((response) => {
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCheckboxChange = (userId, year, quarter) => {
    setSelectedQuarters((prevState) => ({
      ...prevState,
      [userId]: {
        ...prevState[userId],
        [`${year}-${quarter}`]: !prevState[userId]?.[`${year}-${quarter}`],
      },
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => (direction === "next" ? prev + 1 : prev - 1));
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg font-semibold animate-pulse">Loading users...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">
        <p className="text-lg font-semibold">Error fetching users: {error}</p>
      </div>
    );

  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-6">
          Student Payments
        </h2>

        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by name"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-700 rounded-lg text-sm">
            <thead className="bg-gray-600 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">User Name</th>
                <th colSpan={3} className="text-center">
                  Year One
                </th>
                <th colSpan={3} className="text-center">
                  Year Two
                </th>
              </tr>
              <tr>
                <th className="px-4 py-3"></th>
                {["Q1", "Q2", "Q3"].map((quarter, index) => (
                  <th key={`year1-${index}`} className="px-4 py-3 text-center">
                    {quarter}
                  </th>
                ))}
                {["Q1", "Q2", "Q3"].map((quarter, index) => (
                  <th key={`year2-${index}`} className="px-4 py-3 text-center">
                    {quarter}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr
                  key={user.user_id}
                  className="hover:bg-gray-600 transition-colors"
                >
                  <td className="px-4 py-3 text-lg">{`${user.first_name} ${user.last_name}`}</td>
                  {["YearOne", "YearTwo"].map((year) =>
                    ["Q1", "Q2", "Q3"].map((quarter) => (
                      <td
                        key={`${year}-${quarter}-${user.user_id}`}
                        className="px-4 py-3 text-center"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-blue-500"
                          checked={
                            selectedQuarters[user.user_id]?.[
                              `${year}-${quarter}`
                            ] || false
                          }
                          onChange={() =>
                            handleCheckboxChange(user.user_id, year, quarter)
                          }
                        />
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange("prev")}
            className={`px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft />
          </button>
          <p>
            Page {currentPage} of{" "}
            {Math.ceil(filteredUsers.length / usersPerPage)}
          </p>
          <button
            disabled={
              currentPage === Math.ceil(filteredUsers.length / usersPerPage)
            }
            onClick={() => handlePageChange("next")}
            className={`px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 ${
              currentPage === Math.ceil(filteredUsers.length / usersPerPage) &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
