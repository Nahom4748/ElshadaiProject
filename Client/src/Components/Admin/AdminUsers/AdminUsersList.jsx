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

function AdminUsersList({ user }) {
  const [users, setUsers] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const { role, token } = useAuth(); 

  useEffect(() => {
    const fetchUsers = async () => {
      if (role !== "Admin") {
        setApiError(true);
        setApiErrorMessage("You do not have permission to access this page.");
        setLoading(false);
        return;
      }
      try {
        const response = await userService.getAllUsers(token);
        setUsers(response);
        setFilteredUsers(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setApiError(true);
        setApiErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [role]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
 const getButtonClass = (tab) => `
  tab-button is-checked relative py-10px px-2px md:py-10px md:px-7 lg:py-10px lg:px-40px font-bold uppercase text-contentColor transition-all duration-300 shadow-experience hover:text-secondaryColor bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded 
  ${
    activeTab === tab
      ? "active border-solid border-2 border-primaryColor bg-whiteColor-dark"
      : ""
  }
`;

  const filterUsersByRole = (role) =>
    users.filter((user) => user.company_role_id === role);

  return (
    
    <div className="tab-contents lg:col-span-9">
      <div className="tab-links flex flex-wrap md:flex-nowrap mb-10px lg:mb-50px rounded gap-10px lg:gap-35px">
        <button
          className={getButtonClass("tab1")}
          onClick={() => handleTabClick("tab1")}
        >
          All
        </button>

        <button
          className={getButtonClass("tab2")}
          onClick={() => handleTabClick("tab2")}
        >
          Students
        </button>
        <button
          className={getButtonClass("tab3")}
          onClick={() => handleTabClick("tab3")}
        >
          Partners
        </button>
        <button
          className={getButtonClass("tab4")}
          onClick={() => handleTabClick("tab4")}
        >
          Staff
        </button>
      </div>

      <div className="tab-contents">
        {activeTab === "tab1" && (
          <div id="tab1">
            <table
              className="table-auto text-contentColor"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Added Date</th>
                  <th>Company Role ID</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.user_id} onClick={() => handleRowClick(user)}>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "tab2" && (
          <div id="tab2">
            {filterUsersByRole(3).map((user) => (
              <div key={user.user_id}>
                <p>
                  {user.first_name} {user.last_name}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab3" && (
          <div id="tab2">
            {filterUsersByRole(4).map((user) => (
              <div key={user.user_id}>
                <p>
                  {user.first_name} {user.last_name}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab4" && (
          <div id="tab2">
            {filterUsersByRole(2).map((user) => (
              <div key={user.user_id}>
                <p>
                  {user.first_name} {user.last_name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsersList;
