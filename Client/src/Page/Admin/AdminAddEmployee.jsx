import React from "react";
import AddEmployee from "../../Components/Admin/AddEmployee/AddEmployee";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";

function AdminAddEmployee() {
  return (
    <>
      <AdminHeading />
      <div class="container-fluid-2">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
          <AdminMenu />

          <AddEmployee />
        </div>
      </div>
    </>
  );
}

export default AdminAddEmployee;
