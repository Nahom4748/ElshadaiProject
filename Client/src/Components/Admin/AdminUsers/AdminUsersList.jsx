// import React, { useState, useEffect } from "react";
// import userService from "../../../Page/Admin/Usersfetch.service";
// import { useAuth } from "../../../Contexts/AuthContext";
// import UserModal from "./UpdateUserModal";

// const roleLabels = {
//   1: "Admin",
//   2: "Manager",
//   3: "Student",
//   4: "Partner",
// };
// const statusLabels = {
//   1: "Active",
//   0: "Inactive",
// };

// function AdminUsersList() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [apiError, setApiError] = useState(false);
//   const [apiErrorMessage, setApiErrorMessage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("tab1");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const { userType } = useAuth();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       if (userType === "Admin") {
//         setApiError(true);
//         setApiErrorMessage("You do not have permission to access this page.");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await userService.getAllUsers();
//         setUsers(response);
//         // setLoading(false);
//       } catch (error) {
//         setApiError(true);
//         setApiErrorMessage(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [userType]);

//   // Filter `filteredUsers` based on active tab and search query
//   useEffect(() => {
//     const filterByTab = {
//       tab1: users,
//       tab2: users.filter((user) => user.company_role_id === 3), // Students
//       tab3: users.filter((user) => user.company_role_id === 4), // Partners
//       tab4: users.filter((user) => user.company_role_id === 2), // Staff
//     };
//     const usersByTab = filterByTab[activeTab];

//     const searchFilteredUsers = usersByTab.filter(
//       (user) =>
//         user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredUsers(searchFilteredUsers);
//   }, [activeTab, users, searchQuery]);

//   const handleTabClick = (tab) => setActiveTab(tab);

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//   };

//  const handleSaveUser = async (updatedUser) => {
//    try {
//      await userService.updateUser(updatedUser);
//      setUsers((prevUsers) =>
//        prevUsers.map((user) =>
//          user.user_id === updatedUser.user_id ? updatedUser : user
//        )
//      );
//      setSelectedUser(null); // Close modal after save
//    } catch (error) {
//      setApiError(true);
//      setApiErrorMessage("Failed to update user. Please try again.");
//    }
//  };

//   const handleDeleteUser = async (userId) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;
//     try {
//       await userService.deleteUser(userId);
//       setUsers(users.filter((user) => user.user_id !== userId));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       setApiError(true);
//       setApiErrorMessage("Failed to delete user. Please try again.");
//     }
//   };

//   const renderUserRows = (userList, handleSaveUser, handleDeleteUser) =>
//     userList.map((user) => (
//       <tr
//         key={user.user_id}
//         className="hover:bg-contentColor hover:text-white cursor-pointer"
//       >
//         <td>{user.user_id}</td>
//         <td>{user.first_name}</td>
//         <td>{user.last_name}</td>
//         <td>{user.phone_number}</td>
//         <td>{user.city}</td>
//         <td>{user.country}</td>
//         <td>{statusLabels[user.active_status]}</td>
//         <td>{new Date(user.added_date).toLocaleDateString()}</td>
//         <td>{roleLabels[user.company_role_id]}</td>
//         <td>{user.email}</td>
//         <td>
//           <button
//             onClick={() => handleEditUser(user)}
//             className="ml-6 text-green-300 hover:text-green-500"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="size-4"
//             >
//               <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
//               <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
//             </svg>
//           </button>
//           <button
//             onClick={() => handleDeleteUser(user.user_id)}
//             className="ml-4 text-red-600 hover:text-red-900"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               class="size-4"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
//                 clip-rule="evenodd"
//               />
//             </svg>
//           </button>
//         </td>
//       </tr>
//     ));

//   return (
//     <div className="tab-contents lg:col-span-9">
//       <div className="flex justify-between mb-4">
//         <div className="tab-links flex">
//           {["tab1", "tab2", "tab3", "tab4"].map((tab, index) => (
//             <button
//               key={index}
//               className={`tab-button py-2 px-4 font-bold uppercase ${
//                 activeTab === tab
//                   ? "bg-primaryColor text-white"
//                   : "text-contentColor"
//               }`}
//               onClick={() => handleTabClick(tab)}
//             >
//               {["All", "Students", "Partners", "Staff"][index]}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Search users..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="p-2 border rounded bg-whiteColor-dark text-contentColor"
//         />
//       </div>

//       <div className="tab-contents">
//         {loading ? (
//           <p>Loading...</p>
//         ) : apiError ? (
//           <p className="text-red-500">{apiErrorMessage}</p>
//         ) : (
//           <table className="table-auto min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 {[
//                   "User ID",
//                   "First Name",
//                   "Last Name",
//                   "Phone Number",
//                   "City",
//                   "Country",
//                   "Status",
//                   "Added Date",
//                   "Company Role",
//                   "Email",
//                   "Action",
//                 ].map((header) => (
//                   <th
//                     key={header}
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-primaryColor font-mono text-sm font-thin text-whiteColor divide-y divide-contentColor">
//               {renderUserRows(filteredUsers)}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {selectedUser && (
//         <UserModal
//           user={selectedUser}
//           onClose={() => setSelectedUser(null)}
//           onSave={handleSaveUser}
//         />
//       )}
//     </div>
//   );
// }

// export default AdminUsersList;

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
  const [actionType, setActionType] = useState(""); // State for action type (edit or delete)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userType, user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      if (user.role == "Admin") {
        setApiError(true);
        setApiErrorMessage("You do not have permission to access this page.");
        setLoading(false);
        return;
      }
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
    setActionType("edit"); // Set action type to edit
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setActionType("delete"); // Set action type to delete
  };
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setActionType("view"); // Or another action type as needed
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
      setActionType(""); // Clear action type after save
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
      setActionType(""); // Clear action type after delete
    } catch (error) {
      setApiError(true);
      setApiErrorMessage("Failed to delete user. Please try again.");
    }
  };

  const renderUserRows = (userList) =>
    userList.map((user) => (
      <tr
        key={user.user_id}
        className=" hover:bg-contentColor hover:text-black cursor-pointer"
        onClick={() => handleRowClick(user)}
      >
        <td className="px-4 py-2">{user.user_id}</td>
        <td className="px-4 py-2">{user.first_name}</td>
        <td className="">{user.last_name}</td>
        <td>{user.phone_number}</td>
        {/* <td>{user.city}</td> */}
        <td className="px-3">{user.country}</td>
        {/* <td>{statusLabels[user.active_status]}</td> */}
        {/* <td>{new Date(user.added_date).toLocaleDateString()}</td> */}
        {/* <td>{roleLabels[user.company_role_id]}</td> */}
        <td className="px-3">{user.email}</td>
        <td className="px-4 py-2 flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent row click from triggering
              handleEditUser(user);
            }}
            className="text-green-600 hover:text-green-800 px-3"
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
            onClick={(e) => {
              e.stopPropagation(); // Prevent row click from triggering
              handleDeleteUser(user);
            }}
            className="ml-4 text-red-600 hover:text-red-800"
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

      <div className="tab-contents py-6">
        {loading ? (
          <p>Loading...</p>
        ) : apiError ? (
          <p className="text-red-500">{apiErrorMessage}</p>
        ) : (
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className=" bg-gray-50">
              <tr>
                {[
                  "User",
                  "First Name",
                  "Last Name",
                  "Phone #",
                  // "City",
                  "Country",
                  "Email",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-darkBlack font-mono text-sm font-thin text-contentColor divide-y divide-contentColor">
              {renderUserRows(filteredUsers)}
            </tbody>
          </table>
        )}
      </div>

      {selectedUser && (
        <UserModal
          user={selectedUser}
          actionType={actionType}
          onClose={() => {
            setSelectedUser(null);
            setActionType(""); // Clear action type on close
          }}
          onSave={handleSaveUser}
          onDelete={confirmDeleteUser}
        />
      )}
    </div>
  );
}

export default AdminUsersList;
