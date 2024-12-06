import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "react-modal";

const Payment = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState("Q1");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedQuarterForModal, setSelectedQuarterForModal] = useState(null);

  const usersPerPage = 8;

  useEffect(() => {
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

    axios
      .get("http://localhost:5001/api/payments")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const getPaymentStatus = (userId, quarter) => {
    const payment = payments.find(
      (payment) => payment.user_id === userId && payment.quarter === quarter
    );
    return payment ? payment.status : 0;
  };

  const filterUsersByQuarterAndPayment = () => {
    const filtered = users.filter((user) => {
      const paymentStatus = getPaymentStatus(user.user_id, selectedQuarter);
      if (paymentFilter === "paid" && paymentStatus === 1) return true;
      if (paymentFilter === "not-paid" && paymentStatus === 0) return true;
      if (paymentFilter === "all") return true;
      return false;
    });

    if (searchQuery.trim() !== "") {
      return filtered.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleToggle = (userId, quarter) => {
    const user = users.find((u) => u.user_id === userId);
    setSelectedUser(user);
    setSelectedQuarterForModal(quarter);
    setIsModalOpen(true);
  };

  const handleConfirmAction = () => {
    const paymentStatus = getPaymentStatus(
      selectedUser.user_id,
      selectedQuarterForModal
    );
    const newStatus = paymentStatus === 1 ? 0 : 1;

    const payload = {
      user_id: selectedUser.user_id,
      quarter: selectedQuarterForModal,
      status: newStatus,
    };

    axios
      .post("http://localhost:5001/api/payments", payload)
      .then(() => {
        axios
          .get("http://localhost:5001/api/payments")
          .then((response) => {
            setPayments(response.data);
            setIsModalOpen(false);
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
  const paginatedUsers = filterUsersByQuarterAndPayment().slice(
    startIndex,
    startIndex + usersPerPage
  );

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-screen-lg mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Student Payments
        </h2>
        <div className="mb-4 flex justify-between items-center">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by name"
              className="w-72 p-2 bg-gray-700 text-white rounded-lg pl-10"
            />
            <FaSearch className="absolute left-3 top-2/4 transform -translate-y-2/4 text-gray-400" />
          </div>
          <div>
            <label className="mr-2">Quarter:</label>
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
            <label className="mr-2">Payment:</label>
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

        <div className="overflow-x-auto mb-4">
          <table className="w-full bg-gray-700 rounded-lg text-sm">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">User Name</th>
                {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((quarter) => (
                  <th key={quarter} className="px-4 py-2 text-center">
                    {quarter}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.user_id}>
                  <td className="px-4 py-2">{`${user.first_name} ${user.last_name}`}</td>
                  {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((quarter) => (
                    <td key={quarter} className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleToggle(user.user_id, quarter)}
                        className={`rounded-full w-6 h-6 ${
                          getPaymentStatus(user.user_id, quarter) === 1
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="bg-gray-700 text-white px-3 py-2 rounded-md"
          >
            <FaChevronLeft />
          </button>
          <p className="text-sm">
            Page {currentPage} of{" "}
            {Math.ceil(filterUsersByQuarterAndPayment().length / usersPerPage)}
          </p>
          <button
            onClick={() => handlePageChange("next")}
            disabled={
              currentPage ===
              Math.ceil(filterUsersByQuarterAndPayment().length / usersPerPage)
            }
            className="bg-gray-700 text-white px-3 py-2 rounded-md"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="w-96 mx-auto mt-20 bg-gray-800 rounded-lg p-6 text-white"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Payment</h2>
        {selectedUser && (
          <p className="mb-4">
            Are you sure you want to update the payment status for{" "}
            <strong>
              {selectedUser.first_name} {selectedUser.last_name}
            </strong>{" "}
            for <strong>{selectedQuarterForModal}</strong>?
          </p>
        )}
        <div className="flex justify-end">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-600 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmAction}
            className="px-4 py-2 bg-green-500 rounded-md"
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Payment;
