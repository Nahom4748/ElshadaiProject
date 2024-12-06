import React from "react";
import AdminUsersList from "../../Components/Admin/AdminUsers/AdminUsersList";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";

function UsersList() {
  return (
    <>
      <AdminHeading />
      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <AdminUsersList />
        </div>
      </div>
    </>
  );
}

export default UsersList;
