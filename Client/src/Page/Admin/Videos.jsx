import React from "react";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import YearlyDropdown from "../../Components/Admin/VideoComponent/YearlyContent";
function Videos() {
  return (
    <div>
      <>
        <AdminHeading />
        <div class="container-fluid-2">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
            <AdminMenu />
            <YearlyDropdown />
          </div>
        </div>
      </>
    </div>
  );
}

export default Videos;
