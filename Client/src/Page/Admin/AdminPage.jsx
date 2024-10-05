import React from "react";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import AdminDashbord from "../../Components/Admin/DashBord/AdminDashbord";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";
import AddCourse from "../../Components/Admin/AddCourse/AddCourse";
import AddEmployee from "../../Components/Admin/AddEmployee/AddEmployee";
import AdminSetting from "../../Components/Admin/AdminSetting/AdminSetting";

function AdminPage() {
  return (
    <>
      <AdminHeading />
      <div class="container-fluid-2">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
          <AdminMenu />
          {/* <AdminDashbord /> */}
          {/* <AddCourse /> */}
          {/* <AddEmployee /> */}
          <AdminSetting />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
