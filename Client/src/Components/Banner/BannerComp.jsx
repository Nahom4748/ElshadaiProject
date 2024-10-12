import React from 'react'
import img_hero1 from '../../assets/images/herobanner/herobanner__1.png'
import img_hero2 from '../../assets/images/herobanner/herobanner__2.png'
import img_hero3 from '../../assets/images/herobanner/herobanner__3.png'
import img_hero5 from '../../assets/images/herobanner/herobanner__5.png'

function BannerComp() {
  return (
    <>
      <div className="bg-lightGrey1 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-50px md:py-20 lg:py-100px 2xl:pb-150px 2xl:pt-40.5">
        {/*  animated icons  */}
        <div className="bg-transparent">
          <img
            className="absolute left-0 bottom-0 md:left-[14px] lg:left-[50px] lg:bottom-[21px] 2xl:left-[165px] 2xl:bottom-[60px] animate-move-var z-10"
            src={img_hero1}
            alt=""
          />
          <img
            className="absolute left-0 top-0 lg:left-[50px] lg:top-[100px] animate-spin-slow"
            src={img_hero2}
            alt=""
          />
          <img
            className="absolute right-[30px] top-0 md:right-10 lg:right-[575px] 2xl:top-20 animate-move-var2 opacity-50 hidden md:block"
            src={img_hero3}
            alt=""
          />

          <img
            className="absolute right-[30px] top-[212px] md:right-10 md:top-[157px] lg:right-[45px] lg:top-[100px] animate-move-hor"
            src={img_hero5}
            alt=""
          />
        </div>
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-whiteColor dark:text-blackColor-dark mb-7 md:mb-6 pt-3">
              Welcome
            </h1>
            <ul className="flex gap-1 justify-center">
              <li>
                <a
                  href="index.html"
                  className="text-lg text-lightGrey2 dark:text-blackColor2-dark"
                >
                  Home <i className="icofont-simple-right"></i>
                </a>
              </li>
              <li>
                <span className="text-lg text-lightGrey2 dark:text-blackColor2-dark">
                  Course-Details
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerComp
