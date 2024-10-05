import React, { useState } from "react";

export default function AdminSetting() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="lg:col-start-4 lg:col-span-9">
      <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
        <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
          <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
            My Profile
          </h2>
        </div>
        <div className="tab">
          <div className="tab-links flex flex-wrap mb-10px lg:mb-50px rounded gap-10px">
            {/* Profile Button */}
            <button
              onClick={() => setActiveTab("profile")}
              className={`relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap ${
                activeTab === "profile" ? "before:w-full" : ""
              }`}
            >
              PROFILE
            </button>

            {/* Password Button */}
            <button
              onClick={() => setActiveTab("password")}
              className={`relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap ${
                activeTab === "password" ? "before:w-full" : ""
              }`}
            >
              PASSWORD
            </button>
          </div>

          {/* Tab Contents */}
          <div className="tab-contents">
            {/* Profile Form */}
            {activeTab === "profile" && (
              <div className="transition-all duration-300">
                <form
                  className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                  data-aos="fade-up"
                >
                  <div className="grid grid-cols-1 xl:grid-cols-2 mb-15px gap-y-15px gap-x-30px">
                    <div>
                      <label className="mb-3 block font-semibold">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block font-semibold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block font-semibold">
                        User Name
                      </label>
                      <input
                        type="text"
                        placeholder="Ntaden Mic"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+1-202-555-0174"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>
                  </div>

                  <div className="mt-15px">
                    <button
                      type="submit"
                      className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                    >
                      Update Info
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Password Form */}
            {/* Password Form */}
            {activeTab === "password" && (
              <div className="transition-all duration-300">
                <form
                  className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                  data-aos="fade-up"
                >
                  <div className="grid grid-cols-1 xl:grid-cols-2 mb-15px gap-y-15px gap-x-30px">
                    <div>
                      <label className="mb-3 block font-semibold">
                        Current Password
                      </label>
                      <input
                        type="password"
                        placeholder="Current password"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block font-semibold">
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block font-semibold">
                        Re-Type New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Re-Type New Password"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                      />
                    </div>
                  </div>

                  <div className="mt-15px">
                    <button
                      type="submit"
                      className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
