import React from "react";
import AdminHeading from "../../Components/Admin/AdminHeading/AdminHeading";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import PartnerVideo from "../../Components/Admin/PartnerVideo/PartnerVideo";

function AdminPartnersVideos() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Admin Menu */}
        <div className="w-full md:w-1/4  p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <PartnerVideo />
        </div>
      </div>
    </>
  );
}

export default AdminPartnersVideos;
