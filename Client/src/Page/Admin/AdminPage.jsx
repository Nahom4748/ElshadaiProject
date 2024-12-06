import React from "react";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import AdminDashbord from "../../Components/Admin/DashBord/AdminDashbord";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";

function AdminPage() {
  return (
    <>
      <AdminHeading />
      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <AdminDashbord />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
