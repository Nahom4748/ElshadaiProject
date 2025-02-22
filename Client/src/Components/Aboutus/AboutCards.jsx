import React from "react";

import img_grid4 from "../../assets/images/about/Temp.png";
import img_grid1 from "../../assets/images/about/Temp1.png";
import img_grid2 from "../../assets/images/about/Temp3.png";
import img_grid5 from "../../assets/images/icon/video.png";

function AboutCards() {
  return (
    <>
      <div
        class="container 3xl:container-secondary-lg 4xl:container mx-auto p-0 filter-contents flex flex-wrap sm:-mx-15px"
        data-aos="fade-up"
      >
        <div class="w-full sm:w-1/2 lg:w-1/3 group grid-item px-4 filter1 filter3">
          <div class="flex flex-col">
            {/*  enroll section  */}
            <div
              class="py-33px px-25px shadow-event mb-30px bg-whiteColor dark:bg-whiteColor-dark rounded-md"
              data-aos="fade-up"
            >
              {/*  meeting thumbnail  */}
              <div class="overflow-hidden relative mb-5">
                <img src={img_grid4} alt="" class="w-full" />
                <div class="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center z-10">
                  <div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/watch?v=JESkrLKsnz8",
                          "_blank"
                        )
                      }
                      data-url="https://www.youtube.com/watch?v=JESkrLKsnz8"
                      className="lvideo relative w-15 h-15 md:h-20 md:w-20 lg:w-15 lg:h-15 2xl:h-70px 2xl:w-70px 3xl:h-20 3xl:w-20 bg-secondaryColor rounded-full flex items-center justify-center"
                    >
                      <span className="animate-buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full"></span>
                      <span className="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full"></span>
                      <img src={img_grid5} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-5" data-aos="fade-up"></div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 group grid-item px-4 filter1 filter3">
          <div class="flex flex-col">
            {/*  enroll section  */}
            <div
              class="py-33px px-25px shadow-event mb-30px bg-whiteColor dark:bg-whiteColor-dark rounded-md"
              data-aos="fade-up"
            >
              {/*  meeting thumbnail  */}
              <div class="overflow-hidden relative mb-5">
                <img src={img_grid2} alt="" class="w-full" />
                <div class="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center z-10">
                  <div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/watch?v=p7W9FUB3WuQ",
                          "_blank"
                        )
                      }
                      data-url="https://www.youtube.com/watch?v=p7W9FUB3WuQ"
                      class="lvideo relative w-15 h-15 md:h-20 md:w-20 lg:w-15 lg:h-15 2xl:h-70px 2xl:w-70px 3xl:h-20 3xl:w-20 bg-secondaryColor rounded-full flex items-center justify-center"
                    >
                      <span class="animate-buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full"></span>
                      <span class="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full"></span>
                      <img src={img_grid5} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-5" data-aos="fade-up"></div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 group grid-item px-4 filter1 filter3">
          <div class="flex flex-col">
            {/*  enroll section  */}
            <div
              class="py-33px px-25px shadow-event mb-30px bg-whiteColor dark:bg-whiteColor-dark rounded-md"
              data-aos="fade-up"
            >
              {/*  meeting thumbnail  */}
              <div class="overflow-hidden relative mb-5">
                <img src={img_grid1} alt="" class="w-full" />
                <div class="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center z-10">
                  <div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/watch?v=SQ9xqf7DMHg&t=7s",
                          "_blank"
                        )
                      }
                      data-url="https://www.youtube.com/watch?v=SQ9xqf7DMHg&t=7s"
                      class="lvideo relative w-15 h-15 md:h-20 md:w-20 lg:w-15 lg:h-15 2xl:h-70px 2xl:w-70px 3xl:h-20 3xl:w-20 bg-secondaryColor rounded-full flex items-center justify-center"
                    >
                      <span class="animate-buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full"></span>
                      <span class="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full"></span>
                      <img src={img_grid5} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-5" data-aos="fade-up"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCards;
