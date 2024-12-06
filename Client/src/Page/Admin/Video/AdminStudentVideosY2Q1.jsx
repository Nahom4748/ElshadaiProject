import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import AdminHeading from "../../../Components/Admin/AdminHeading/AdminHeading";
import Year2Q1 from "../../../Components/Admin/Video/Year2Q1";

function AdminStudentVideosY2Q1() {
  return (
    <>
      <AdminHeading />
      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <Year2Q1 />
        </div>
      </div>
    </>
  );
}

export default AdminStudentVideosY2Q1;
