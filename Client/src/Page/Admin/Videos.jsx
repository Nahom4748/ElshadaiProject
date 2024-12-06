import React from "react";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import YearlyDropdown from "../../Components/Admin/VideoComponent/YearlyContent";
function Videos() {
  return (
    <>
      <AdminHeading />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <YearlyDropdown />
        </div>
      </div>
    </>
  );
}

export default Videos;
