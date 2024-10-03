import React from 'react'
import img_about1 from '../../assets/images/about/about_1.png'
import img_about8 from '../../assets/images/about/about_8.png'
import img_reg2 from '../../assets/images/register/register__2.png'
import img_her6 from '../../assets/images/herobanner/herobanner__6.png'
import img_her7 from '../../assets/images/herobanner/herobanner__7.png'

function Hero() {
  return (
    <>
      {/*   bannaer section  */}
      <div class="container2-xl bg-darkdeep1 pt-50px md:pt-20 pb-205px md:pb-35 rounded-2xl relative overflow-hidden shadow-brand">
        <div class="container grid grid-cols-1 lg:grid-cols-2 items-center">
          {/*   banner Left  */}
          <div data-aos="fade-up">
            <h3 class="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
              join our mission
            </h3>
            <h1 class="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
              Elshaddai <br class="hidden md:block" />
              Apostolic Mission
            </h1>
            <p class="text-size-15md:text-lg text-whiteColor text-opacity-65 font-medium mb-45px">
              Grateful for your continued participation in our mission, we are
              honored to witness the growth and transformation of believers
              around the world. Through the power of the Word, we strive to
              cultivate Godly-minded individuals who live out their faith daily,
              becoming beacons of light in their families, communities, and
              beyond.
            </p>

            <div>
              <a
                href="course.html"
                class="text-sm md:text-size-15 font-semibold text-darkdeep2 bg-whiteColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none"
              >
                Bible School
              </a>
              <a
                href="#"
                class="text-sm md:text-size-15 font-semibold text-whiteColor py-3 md:py-4 hover:text-secondaryColor inline-block"
              >
                Partner with us <i class="icofont-long-arrow-right"></i>
              </a>
            </div>
          </div>
          {/*   banner right  */}
          <div data-aos="fade-up">
            <div class="tilt relative">
              <img class="w-full" src={img_about8} alt="" />
              <img
                class="absolute left-0 top-0 lg:top-4 right-0 mx-auto"
                src={img_about1}
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <img
            class="absolute left-1/2 bottom-[15%] animate-spin-slow"
            src={img_reg2}
            alt=""
          />
          <img
            class="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
            src={img_her6}
            alt=""
          />
          <img class="absolute right-[5%] bottom-[15%]" src={img_her7} alt="" />
          <img class="absolute top-[5%] left-[45%]" src={img_her7} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero
