import React from "react";
import AdminMenu from "../../../Components/Admin/AdminMenu/AdminMenu";
import AdminHeading from "../../../Components/Admin/AdminHeading/AdminHeading";
import Year1Q2 from "../../../Components/Admin/Video/Year1Q2";

function AdminStudentVideosY1Q2() {
  return (
    <>
      <AdminHeading />
      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <Year1Q2 />
        </div>
      </div>
    </>
  );
}

export default AdminStudentVideosY1Q2;
