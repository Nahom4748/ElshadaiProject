import React from 'react'
import img_grid1 from '../../assets/images/grid/grid_1.png'
import img_grid_small_1 from '../../assets/images/grid/grid_small_1.jpg'
import img_grid2 from '../../assets/images/grid/grid_2.png'
import img_grid3 from '../../assets/images/grid/grid_3.png'

function AboutCards() {
  return (
    <>
      <div
        class="container 3xl:container-secondary-lg 4xl:container mx-auto p-0 filter-contents flex flex-wrap sm:-mx-15px"
        data-aos="fade-up"
      >
        {/* <!-- card 1 --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 group grid-item filter1 filter3">
          <div class="tab-content-wrapper sm:px-15px mb-30px">
            <div class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* <!-- card image --> */}
              <div class="relative mb-4">
                <a
                  href="course-details.html"
                  class="w-full overflow-hidden rounded"
                >
                  <img
                    src={img_grid1}
                    alt=""
                    class="w-full transition-all duration-300 group-hover:scale-110"
                  />
                </a>
                <div class="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                  <div>
                    <p class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold">
                      Data & Tech
                    </p>
                  </div>
                  <a
                    class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                    href="#"
                  >
                    <i class="icofont-heart-alt text-base py-1 px-2"></i>
                  </a>
                </div>
              </div>
              {/* <!-- card content --> */}
              <div>
                <div class="grid grid-cols-2 mb-15px">
                  <div class="flex items-center">
                    <div>
                      <i class="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                    </div>
                    <div>
                      <span class="text-sm text-black dark:text-blackColor-dark">
                        23 Lesson
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div>
                      <i class="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                    </div>
                    <div>
                      <span class="text-sm text-black dark:text-blackColor-dark">
                        1 hr 30 min
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="course-details.html"
                  class="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Foundation course to under stand about softwere
                </a>
                {/* <!-- price --> */}
                <div class="text-lg font-semibold text-primaryColor font-inter mb-4">
                  $32.00
                  <del class="text-sm text-lightGrey4 font-semibold">
                    / $67.00
                  </del>
                  <span class="ml-6">
                    <del class="text-base font-semibold text-secondaryColor3">
                      Free
                    </del>
                  </span>
                </div>
                {/* <!-- author and rating--> */}
                <div class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                  <div>
                    <a
                      href="instructor-details.html"
                      class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                    >
                      <img
                        class="w-[30px] h-[30px] rounded-full mr-15px"
                        src={img_grid_small_1}
                        alt=""
                      />
                      <span class="flex">Micle john</span>
                    </a>
                  </div>
                  <div class="text-start md:text-end">
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <span class="text-xs text-lightGrey6">(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card 2 --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 group grid-item filter2 filter3">
          <div class="tab-content-wrapper sm:px-15px mb-30px">
            <div class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* <!-- card image --> */}
              <div class="relative mb-4">
                <a
                  href="course-details.html"
                  class="w-full overflow-hidden rounded"
                >
                  <img
                    src={img_grid2}
                    alt=""
                    class="w-full transition-all duration-300 group-hover:scale-110"
                  />
                </a>
                <div class="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                  <div>
                    <p class="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                      Mechanical
                    </p>
                  </div>
                  <a
                    class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                    href="#"
                  >
                    <i class="icofont-heart-alt text-base py-1 px-2"></i>
                  </a>
                </div>
              </div>
              {/* <!-- card content --> */}
              <div>
                <div class="grid grid-cols-2 mb-15px">
                  <div class="flex items-center">
                    <div>
                      <i class="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                    </div>
                    <div>
                      <span class="text-sm text-black dark:text-blackColor-dark">
                        29 Lesson
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div>
                      <i class="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                    </div>
                    <div>
                      <span class="text-sm text-black dark:text-blackColor-dark">
                        2 hr 10 min
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="course-details.html"
                  class="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Nidnies course to under stand about <br /> softwere
                </a>
                {/* <!-- price --> */}
                <div class="text-lg font-semibold text-primaryColor font-inter mb-4">
                  $32.00
                  <del class="text-sm text-lightGrey4 font-semibold">
                    / $67.00
                  </del>
                  <span class="ml-6">
                    <del class="text-base font-semibold text-greencolor">
                      Free
                    </del>
                  </span>
                </div>
                {/* <!-- author and rating--> */}
                <div class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                  <div>
                    <a
                      href="instructor-details.html"
                      class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                    >
                      <img
                        class="w-[30px] h-[30px] rounded-full mr-15px"
                        src={img_grid_small_1}
                        alt=""
                      />
                      Rinis Jhon
                    </a>
                  </div>
                  <div class="text-start md:text-end">
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <span class="text-xs text-lightGrey6">(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card 3 --> */}
        <div class="w-full sm:w-1/2 lg:w-1/3 group grid-item filter4 filter5">
          <div class="tab-content-wrapper sm:px-15px mb-30px">
            <div class="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* <!-- card image --> */}
              <div class="relative mb-4">
                <a
                  href="course-details.html"
                  class="w-full overflow-hidden rounded"
                >
                  <img
                    src={img_grid3}
                    alt=""
                    class="w-full transition-all duration-300 group-hover:scale-110"
                  />
                </a>
                <div class="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                  <div>
                    <p class="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold">
                      Development
                    </p>
                  </div>
                  <a
                    class="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                    href="#"
                  >
                    <i class="icofont-heart-alt text-base py-1 px-2"></i>
                  </a>
                </div>
              </div>
              {/* <!-- card content --> */}
              <div>
                <div class="grid grid-cols-2 mb-15px">
                  <div class="flex items-center">
                    <div>
                      <i class="icofont-book-alt pr-5px text-primaryColor text-lg"></i>
                    </div>
                    <div>
                      <span class="text-sm text-black dark:text-blackColor-dark">
                        25 Lesson
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div>
                      <i class="icofont-clock-time pr-5px text-primaryColor text-lg"></i>
                    </div>
                    <div>
                      <span class="text-sm text-black dark:text-blackColor-dark">
                        1 hr 40 min
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="course-details.html"
                  class="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Minws course to under stand about <br /> solution
                </a>
                {/* <!-- price --> */}
                <div class="text-lg font-semibold text-primaryColor font-inter mb-4">
                  $40.00
                  <del class="text-sm text-lightGrey4 font-semibold">
                    / $67.00
                  </del>
                  <span class="ml-6">
                    <del class="text-base font-semibold text-secondaryColor3">
                      Free
                    </del>
                  </span>
                </div>
                {/* <!-- author and rating--> */}
                <div class="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                  <div>
                    <a
                      href="instructor-details.html"
                      class="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                    >
                      <img
                        class="w-[30px] h-[30px] rounded-full mr-15px"
                        src={img_grid_small_1}
                        alt=""
                      />
                      Micle John
                    </a>
                  </div>
                  <div class="text-start md:text-end">
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <i class="icofont-star text-size-15 text-yellow"></i>
                    <span class="text-xs text-lightGrey6">(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCards
