import React from "react";
import Q1 from "../../../assets/images/counter/counter__1.png";
function AdminDashbord() {
  return (
    <div class="lg:col-start-4 lg:col-span-9">
      <div class="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
        <div class="mb-6 pb-5 border-b-2 border-whitegrey dark:border-whitegrey-dark">
          <h2 class="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
            Dashboard
          </h2>
        </div>
        <div class="counter grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-30px gap-y-5 pb-5">
          <div class="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
            <div class="flex gap-4">
              <div>
                <img src={Q1} alt="" />
              </div>
              <div>
                <p class="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number="900"> 900</span>
                  <span>+</span>
                </p>
                <p class="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Enrolled Courses
                </p>
              </div>
            </div>
          </div>
          <div class="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
            <div class="flex gap-4">
              <div>
                <img src="../../assets/images/counter/counter__2.png" alt="" />
              </div>
              <div>
                <p class="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number="500">500</span>
                  <span>+</span>
                </p>
                <p class="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Active Courses
                </p>
              </div>
            </div>
          </div>
          <div class="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
            <div class="flex gap-4">
              <div>
                <img src="../../assets/images/counter/counter__3.png" alt="" />
              </div>
              <div>
                <p class="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number="300">300</span>
                  <span>k</span>
                </p>
                <p class="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Complete Courses
                </p>
              </div>
            </div>
          </div>
          <div class="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
            <div class="flex gap-4">
              <div>
                <img src="../../assets/images/counter/counter__4.png" alt="" />
              </div>
              <div>
                <p class="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number="1500">1500</span>
                  <span>+</span>
                </p>
                <p class="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Total Courses
                </p>
              </div>
            </div>
          </div>
          <div class="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
            <div class="flex gap-4">
              <div>
                <img src="../../assets/images/counter/counter__3.png" alt="" />
              </div>
              <div>
                <p class="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number="30">30</span>
                  <span>k</span>
                </p>
                <p class="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Total Students
                </p>
              </div>
            </div>
          </div>
          <div class="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
            <div class="flex gap-4">
              <div>
                <img src="../../assets/images/counter/counter__4.png" alt="" />
              </div>
              <div>
                <p class="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number="90">90</span>
                  <span>,000k</span>
                </p>
                <p class="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Total Earning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashbord;
