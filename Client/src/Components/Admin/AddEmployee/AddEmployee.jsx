import React from "react";

function AddEmployee() {
  return (
    <div className="lg:col-start-4 lg:col-span-9">
      <div className="p-2 md:px-10 md:py-10 mb-5 bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
        <div className="mb-6 pb-5 border-b-2 border-whitegrey dark:border-whitegrey-dark">
          <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
            Add New Employee
          </h2>
        </div>
        <form
          className="p-2 md:p-10 lg:p-2 2xl:p-7 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8 max-h-[60vh] overflow-auto"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="mb-3 block font-semibold">First Name *</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-10 leading-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
            <div>
              <label className="mb-3 block font-semibold">Last Name *</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-10 leading-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="mb-3 block font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-10 leading-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
            <div>
              <label className="mb-3 block font-semibold">Phone Number *</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-10 leading-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="mb-3 block font-semibold">Role *</label>
            <div className="relative rounded-md">
              <select className="text-base bg-whiteColor dark:bg-whiteColor-dark text-blackColor2 w-full p-2 focus:outline-none block appearance-none rounded-md border-2 border-borderColor dark:border-borderColor-dark">
                <option selected disabled>
                  Company Role
                </option>
                <option value="1">Admin</option>
                <option value="2">Manager</option>
              </select>
              <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 text-lg"></i>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-base font-semibold text-white bg-primaryColor hover:bg-primaryColor-dark transition duration-300 rounded-md py-2"
            >
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
