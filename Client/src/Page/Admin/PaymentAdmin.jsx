import React from "react";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import Payment from "../../Components/Admin/Payment/Payment";

function PaymentAdmin() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Admin Menu */}
      <div className="w-full md:w-1/4  p-4">
        <AdminMenu />
      </div>
      <div className="w-full md:w-3/4 p-4">
        <Payment />
      </div>
    </div>
  );
}

export default PaymentAdmin;
