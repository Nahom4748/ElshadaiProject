import React, { useState, useEffect } from "react";
import userService from "../../../Page/Admin/Usersfetch.service";
import { useAuth } from "../../../Contexts/AuthContext";

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

// Modal Component
function UserModal({ user, onClose, onSave }) {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
        <input
          type="text"
          name="first_name"
          value={editedUser.first_name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder="First Name"
        />
        <input
          type="text"
          name="last_name"
          value={editedUser.last_name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder="Email"
        />
        <input
          type="text"
          name="phone_number"
          value={editedUser.phone_number}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="city"
          value={editedUser.city}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder="City"
        />
        <input
          type="text"
          name="country"
          value={editedUser.country}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder="Country"
        />
        {/* Additional fields as needed */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminUsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedUser, setSelectedUser] = useState(null);
  const { userType } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      if (userType === "Admin") {
        setApiError(true);
        setApiErrorMessage("You do not have permission to access this page.");
        setLoading(false);
        return;
      }
      try {
        const response = await userService.getAllUsers();
        setUsers(response);
        setLoading(false);
      } catch (error) {
        setApiError(true);
        setApiErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [userType]);

  // Filter `filteredUsers` based on active tab and search query
  useEffect(() => {
    const filterByTab = {
      tab1: users,
      tab2: users.filter((user) => user.company_role_id === 3), // Students
      tab3: users.filter((user) => user.company_role_id === 4), // Partners
      tab4: users.filter((user) => user.company_role_id === 2), // Staff
    };
    const usersByTab = filterByTab[activeTab];

    const searchFilteredUsers = usersByTab.filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(searchFilteredUsers);
  }, [activeTab, users, searchQuery]);

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleSaveUser = async (updatedUser) => {
    try {
      await userService.updateUser(updatedUser); // Call API to save changes
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === updatedUser.user_id ? updatedUser : user
        )
      );
    } catch (error) {
      console.error("Error updating user:", error);
      setApiError(true);
      setApiErrorMessage("Failed to update user. Please try again.");
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await userService.deleteUser(userId);
      setUsers(users.filter((user) => user.user_id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      setApiError(true);
      setApiErrorMessage("Failed to delete user. Please try again.");
    }
  };

  const renderUserRows = (userList) =>
    userList.map((user) => (
      <tr
        key={user.user_id}
        className="hover:bg-contentColor hover:text-white cursor-pointer"
      >
        <td>{user.user_id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.phone_number}</td>
        <td>{user.city}</td>
        <td>{user.country}</td>
        <td>{statusLabels[user.active_status]}</td>
        <td>{new Date(user.added_date).toLocaleDateString()}</td>
        <td>{roleLabels[user.company_role_id]}</td>
        <td>{user.email}</td>
        <td>
          <button
            onClick={() => handleEditUser(user)}
            className="ml-6 text-green-300 hover:text-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
              <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
            </svg>
          </button>
          <button
            onClick={() => handleDeleteUser(user.user_id)}
            className="ml-4 text-red-600 hover:text-red-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="tab-contents lg:col-span-9">
      <div className="flex justify-between mb-4">
        <div className="tab-links flex">
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
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded bg-whiteColor-dark text-contentColor"
        />
      </div>

      <div className="tab-contents">
        {loading ? (
          <p>Loading...</p>
        ) : apiError ? (
          <p className="text-red-500">{apiErrorMessage}</p>
        ) : (
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "User ID",
                  "First Name",
                  "Last Name",
                  "Phone Number",
                  "City",
                  "Country",
                  "Status",
                  "Added Date",
                  "Company Role",
                  "Email",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-primaryColor font-mono text-sm font-thin text-whiteColor divide-y divide-contentColor">
              {renderUserRows(filteredUsers)}
            </tbody>
          </table>
        )}
      </div>

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}

export default AdminUsersList;
