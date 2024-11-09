import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Payment = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState("Q1"); // Default to Q1
  const [paymentFilter, setPaymentFilter] = useState("all"); // Filter by all, paid, or not paid
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const usersPerPage = 8;

  useEffect(() => {
    // Fetch users
    axios
      .get("http://localhost:5001/api/users")
      .then((response) => {
        const students = response.data.data.filter(
          (user) => user.company_role_id === 3
        );
        setUsers(students);
        setFilteredUsers(students);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // Fetch payments
    axios
      .get("http://localhost:5001/api/payments")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  // Function to check if a user has paid for a specific quarter
  const getPaymentStatus = (userId, quarter) => {
    const payment = payments.find(
      (payment) => payment.user_id === userId && payment.quarter === quarter
    );
    return payment ? payment.status : 0; // Default to 0 (not paid) if no payment found
  };

  // Filter users based on selected quarter and payment status
  const filterUsersByQuarterAndPayment = () => {
    return users.filter((user) => {
      const paymentStatus = getPaymentStatus(user.user_id, selectedQuarter);
      if (paymentFilter === "paid" && paymentStatus === 1) {
        return true;
      } else if (paymentFilter === "not-paid" && paymentStatus === 0) {
        return true;
      } else if (paymentFilter === "all") {
        return true;
      }
      return false;
    });
  };

  const handleToggle = (userId, quarter) => {
    const paymentStatus = getPaymentStatus(userId, quarter);
    const newStatus = paymentStatus === 1 ? 0 : 1;

    const payload = {
      user_id: userId,
      quarter: quarter,
      status: newStatus,
    };

    axios
      .post("http://localhost:5001/api/payments", payload)
      .then(() => {
        axios
          .get("http://localhost:5001/api/payments")
          .then((response) => {
            setPayments(response.data);
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((error) => {
        console.error("Error updating payment:", error);
      });
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

        <div className="mb-6 flex justify-between">
          <div>
            <label className="text-gray-200 mr-2">Select Quarter:</label>
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-lg"
            >
              {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((quarter) => (
                <option key={quarter} value={quarter}>
                  {quarter}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-200 mr-2">Filter Payment Status:</label>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="bg-gray-700 text-white p-2 rounded-lg"
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="not-paid">Not Paid</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-gray-700 rounded-lg text-sm">
            <thead className="bg-gray-600 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">User Name</th>
                {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((quarter, index) => (
                  <th
                    key={`quarter-${index}`}
                    className="px-4 py-3 text-center"
                  >
                    {quarter}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterUsersByQuarterAndPayment().map((user) => (
                <tr
                  key={user.user_id}
                  className="hover:bg-gray-600 transition-colors"
                >
                  <td className="px-4 py-3 text-lg">
                    {`${user.first_name} ${user.last_name}`}
                  </td>
                  {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((quarter) => {
                    const paymentStatus = getPaymentStatus(
                      user.user_id,
                      quarter
                    );
                    return (
                      <td
                        key={`${quarter}-${user.user_id}`}
                        className="px-4 py-3 text-center"
                      >
                        <button
                          onClick={() => handleToggle(user.user_id, quarter)}
                          className={`h-6 w-6 mx-auto rounded-lg cursor-pointer ${
                            paymentStatus === 1
                              ? "bg-green-500"
                              : paymentStatus === 0
                              ? "bg-red-500"
                              : "bg-gray-500"
                          }`}
                        ></button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            <FaChevronLeft />
          </button>
          <p className="text-gray-200">
            Page {currentPage} of{" "}
            {Math.ceil(filteredUsers.length / usersPerPage)}
          </p>
          <button
            onClick={() => handlePageChange("next")}
            disabled={
              currentPage === Math.ceil(filteredUsers.length / usersPerPage)
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
