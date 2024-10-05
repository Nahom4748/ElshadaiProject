import React from "react";

function AddCourse() {
  return (
    <div className="lg:col-start-4 lg:col-span-9">
      <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
        <div className="mb-6 pb-5 border-b-2 border-whitegrey dark:border-whitegrey-dark">
          <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
            Add New Course
          </h2>
        </div>
        <form
          className="p-5 md:p-10 lg:p-5 2xl:p-10 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8 h-[60vh] overflow-auto"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 mb-5 gap-5">
            <div>
              <label className="mb-3 block font-semibold">Course Title</label>
              <input
                type="text"
                placeholder="Course Title"
                className="w-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
            <div>
              <label className="mb-3 block font-semibold">
                Course Description
              </label>
              <input
                type="text"
                placeholder="Course Description"
                className="w-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
            <div>
              <label className="mb-3 block font-semibold">
                Add Your Video URL
              </label>
              <input
                type="text"
                placeholder="Add your Video URL here"
                className="w-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder rounded-md"
              />
            </div>
            <div>
              <div className="mb-3">
                Example:
                <b className="hover:text-primaryColor cursor-pointer">
                  https://www.youtube.com/watch?v=yourvideoid
                </b>
              </div>
            </div>
            <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="mb-3 block font-semibold">Year</label>
                <div className="relative rounded-md">
                  <select className="text-base bg-whiteColor dark:bg-whiteColor-dark text-blackColor2 w-full p-2 focus:outline-none block appearance-none rounded-md border-2 border-borderColor dark:border-borderColor-dark">
                    <option selected disabled>
                      Select Year
                    </option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                  </select>
                  <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 text-lg"></i>
                </div>
              </div>
              <div>
                <label className="mb-3 block font-semibold">Quarter</label>
                <div className="relative rounded-md">
                  <select className="text-base bg-whiteColor dark:bg-whiteColor-dark text-blackColor2 w-full p-2 focus:outline-none block appearance-none rounded-md border-2 border-borderColor dark:border-borderColor-dark">
                    <option selected disabled>
                      Select Quarter
                    </option>
                    <option value="1">Quarter One</option>
                    <option value="2">Quarter Two</option>
                    <option value="3">Quarter Three</option>
                    <option value="4">Quarter Four</option>
                  </select>
                  <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 text-lg"></i>
                </div>
              </div>
              <div>
                <label className="mb-3 block font-semibold">Week</label>
                <div className="relative rounded-md">
                  <select className="text-base bg-whiteColor dark:bg-whiteColor-dark text-blackColor2 w-full p-2 focus:outline-none block appearance-none rounded-md border-2 border-borderColor dark:border-borderColor-dark">
                    <option selected disabled>
                      Select Week
                    </option>
                    <option value="1">Week One</option>
                    <option value="2">Week Two</option>
                    <option value="3">Week Three</option>
                    <option value="4">Week Four</option>
                  </select>
                  <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 text-lg"></i>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="text-base font-semibold text-whiteColor bg-primaryColor px-5 py-2 border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300 rounded-md"
              >
                Save Info
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
