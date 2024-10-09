import React from 'react'
import img_count1 from '../../assets/images/counter/counter__1.png'
import img_count2 from '../../assets/images/counter/counter__2.png'
import img_count3 from '../../assets/images/counter/counter__3.png'
import img_count4 from '../../assets/images/counter/counter__4.png'
import img_about2 from '../../assets/images/about/about_pasT.png'
import img_about3 from '../../assets/images/about/pas-Tlitt.png'
import img_about4 from '../../assets/images/about/about_4.png'
import img_about11 from '../../assets/images/about/about_11.png'
import AboutCards from './AboutCards'

function AboutUs() {
  return (
    <>
      <section>
        <div class="container 3xl:container-secondary-lg 4xl:container mx-auto">
          {/*   about section    */}
          <div class="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
            {/*   about left   */}
            <div
              class="relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
              data-aos="fade-up"
            >
              <div class="tilt">
                <img class="md:ml-[70px]" src={img_about2} alt="" />
                <img
                  class="absolute right-0 sm:right-[-17px] md:right-36 lg:right-4 bottom-[91px] md:bottom-0"
                  src={img_about3}
                  alt=""
                />
                <img
                  class="absolute top-[-18px] left-[30px] animate-move-hor z-[-1]"
                  src={img_about4}
                  alt=""
                />
                <img
                  class="absolute top-[30%] left-0 z-[-1]"
                  src={img_about11}
                  alt=""
                />
              </div>
              {/*   experience   */}
              <div class="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience absolute bottom-0 left-0 bg-darkdeep1 dark:bg-whiteColor-dark animate-move-var w-[290px]">
                <div class="counter flex items-center">
                  <p class="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                    <span data-countup-number="25">35</span>+
                  </p>
                  <p class="text-whiteColor dark:text-blackColor-dark font-bold leading-26px">
                    YEARS <br /> IN MINISTRY
                  </p>
                </div>
              </div>
            </div>
            {/*   about right   */}
            <div data-aos="fade-up">
              <span class="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                About Us
              </span>
              <h3 class="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-whiteColor dark:text-blackColor-dark pb-25px">
                Welcome to <br />
                <span class="relative after:w-full after:h-[2px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5">
                  Elshaddai Apostolic Mission
                </span>
              </h3>
              <p class="text-sm md:text-base leading-7 text-whiteColor text-opacity-65 mb-6 pl-3 border-l-2 border-primaryColor">
                El Shaddai Apostolic Mission is dedicated to delivering the Word
                of God with clarity, revelation, and purpose, guiding
                individuals toward deep spiritual transformation. Our ministry
                is rooted in the belief that biblical teachings, when applied
                with understanding, can create a God-centered society that
                upholds righteousness and influences positive change in all
                areas of life.
              </p>
              <ul class="space-y-5">
                <li class="flex items-center group">
                  <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p class="text-sm md:text-base font-medium text-whiteColor text-opacity-65">
                    To build a Godly-minded society
                  </p>
                </li>
                <li class="flex items-center group">
                  <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p class="text-sm md:text-base font-medium text-whiteColor text-opacity-65">
                    To develop and build the next generation of leaders and
                    God's servants through ongoing training and equipping.
                  </p>
                </li>
                <li class="flex items-center group">
                  <i class="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p class="text-sm md:text-base font-medium text-whiteColor text-opacity-65">
                    To teach and counsel through the wisdom of the Word of God,
                    perfecting all saints.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*   about counter   */}
          <div class="counter flex flex-wrap py-[70px] lg:py-20 gap-y-30px lg:gap-y-0">
            <div
              class="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div class="flex gap-4">
                <div>
                  <img src={img_count1} alt="" />
                </div>
                <div>
                  <p class="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="27"> 700</span>
                    <span>+</span>
                  </p>
                  <p class="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    Total Graduates
                  </p>
                </div>
              </div>
            </div>
            <div
              class="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div class="flex gap-4">
                <div>
                  <img src={img_count2} alt="" />
                </div>
                <div>
                  <p class="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="145">342</span>
                    <span>+</span>
                  </p>
                  <p class="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    active STUDENTS
                  </p>
                </div>
              </div>
            </div>
            <div
              class="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div class="flex gap-4">
                <div>
                  <img src={img_count3} alt="" />
                </div>
                <div>
                  <p class="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="10">103</span>
                    <span>+</span>
                  </p>
                  <p class="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    Total Partners
                  </p>
                </div>
              </div>
            </div>
            <div
              class="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div class="flex gap-4">
                <div>
                  <img src={img_count4} alt="" />
                </div>
                <div>
                  <p class="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="214">214</span>
                    <span>+</span>
                  </p>
                  <p class="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    Countries OVER THE WORLD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AboutCards />
        </div>
      
      </section>
    </>
  );
}

export default AboutUs
