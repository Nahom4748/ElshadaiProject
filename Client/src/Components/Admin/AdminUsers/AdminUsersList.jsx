import React, { useState, useEffect } from "react";
import userService from "../../../Page/Admin/Usersfetch.service";
import { useAuth } from "../../../Contexts/AuthContext";
import UserModal from "./UpdateUserModal";

const roleLabels = {
  1: "Admin",
  2: "Manager",
  3: "Student",
  4: "Partner",
};
const statusLabels = {
  1: "Active",
  0: "Inactive",
};

function AdminUsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionType, setActionType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const usersPerPage = 10; // Number of users per page

  const { userType } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAllUsers();
        setUsers(response);
      } catch (error) {
        setApiError(true);
        setApiErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [userType]);

  useEffect(() => {
    const filterByTab = {
      tab1: users,
      tab2: users.filter((user) => user.company_role_id === 3),
      tab3: users.filter((user) => user.company_role_id === 4),
      tab4: users.filter((user) => user.company_role_id === 2),
    };
    const usersByTab = filterByTab[activeTab];

    const searchFilteredUsers = usersByTab.filter((user) =>
      [user.first_name, user.last_name, user.email, user.phone_number]
        .filter(Boolean) // Ensure no null/undefined values
        .some((field) =>
          field.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    setFilteredUsers(searchFilteredUsers);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [activeTab, users, searchQuery]);

  // Calculate displayed users based on pagination
  const startIndex = (currentPage - 1) * usersPerPage;
  const displayedUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleTabClick = (tab) => setActiveTab(tab);
  const handlePageChange = (page) => setCurrentPage(page);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setActionType("edit");
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setActionType("delete");
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setActionType("view");
    setIsModalOpen(true);
  };

  const handleSaveUser = async (updatedUser) => {
    try {
      await userService.updateUser(updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === updatedUser.user_id ? updatedUser : user
        )
      );
      setSelectedUser(null);
      setActionType("");
    } catch (error) {
      setApiError(true);
      setApiErrorMessage("Failed to update user. Please try again.");
    }
  };

  const confirmDeleteUser = async () => {
    try {
      await userService.deleteUser(selectedUser.user_id);
      setUsers(users.filter((user) => user.user_id !== selectedUser.user_id));
      setSelectedUser(null);
      setActionType("");
    } catch (error) {
      setApiError(true);
      setApiErrorMessage("Failed to delete user. Please try again.");
    }
  };

  const renderUserRows = (userList) =>
    userList.map((user) => (
      <tr
        key={user.user_id}
        className="hover:bg-contentColor hover:text-black cursor-pointer text-whitegrey3"
        onClick={() => handleRowClick(user)}
      >
        <td className="px-4 py-2">{user.user_id}</td>
        <td className="px-4 py-2">{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.phone_number}</td>
        <td className="px-3">{user.country}</td>
        <td className="px-3">{user.email}</td>
        {/* Conditionally render Action column */}
        {userType !== 2 && ( // Only render Action column if userType is not 2
          <td className="px-4 py-2 flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEditUser(user);
              }}
              className="text-green-600 hover:text-green-800 px-3"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteUser(user);
              }}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </td>
        )}
      </tr>
    ));

  const renderPagination = () =>
    Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={`px-3 py-1 mx-1 rounded ${
          currentPage === index + 1
            ? "bg-primaryColor text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {index + 1}
      </button>
    ));

  return (
    <div className="tab-contents lg:col-span-9 p-4">
      {/* Tabs and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
        {/* Tab Buttons */}
        <div className="tab-links flex flex-wrap justify-center sm:justify-start">
          {["tab1", "tab2", "tab3", "tab4"].map((tab, index) => (
            <button
              key={index}
              className={`tab-button py-2 px-4 font-bold uppercase ${
                activeTab === tab
                  ? "bg-primaryColor text-white"
                  : "text-contentColor"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {["All", "Students", "Partners", "Staff"][index]}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded bg-whiteColor-dark text-contentColor w-full sm:w-auto"
        />
      </div>

      {/* Table Content */}
      <div className="tab-contents py-6">
        {loading ? (
          <p>Loading...</p>
        ) : apiError ? (
          <p className="text-red-500">{apiErrorMessage}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "User",
                    "First Name",
                    "Last Name",
                    "Phone #",
                    "Country",
                    "Email",
                    userType !== 2 && "Action", // Conditionally show the header "Action"
                  ].map(
                    (header, index) =>
                      header && (
                        <th
                          key={index}
                          className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          {header}
                        </th>
                      )
                  )}
                </tr>
              </thead>
              <tbody className="bg-darkBlack font-mono text-sm font-thin text-contentColor divide-y divide-contentColor">
                {renderUserRows(displayedUsers)}
              </tbody>
            </table>
            <div className="mt-4 flex justify-center">{renderPagination()}</div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedUser && (
        <UserModal
          user={selectedUser}
          actionType={actionType}
          onClose={() => {
            setSelectedUser(null);
            setActionType("");
          }}
          onSave={handleSaveUser}
          onDelete={confirmDeleteUser}
        />
      )}
    </div>
  );
}

export default AdminUsersList;
