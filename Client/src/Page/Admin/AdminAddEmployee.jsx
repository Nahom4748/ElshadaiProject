import React from "react";
import AddEmployee from "../../Components/Admin/AddEmployee/AddEmployee";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";

function AdminAddEmployee() {
  return (
    <>
      <AdminHeading />
      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <AddEmployee />
        </div>
      </div>
    </>
  );
}

export default AdminAddEmployee;
