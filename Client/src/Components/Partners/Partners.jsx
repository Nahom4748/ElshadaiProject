import React from 'react'
"../../"
import BannerComp from '../Banner/BannerComp'
import img_count1 from "../../assets/images/counter/counter__1.png";
import img_count2 from "../../assets/images/counter/counter__2.png";
import img_count3 from "../../assets/images/counter/counter__3.png";
import img_count4 from "../../assets/images/counter/counter__4.png";
import img_about2 from "../../assets/images/about/Ppic1.png";
import img_about3 from "../../assets/images/about/pas-Tlitt.png";
import img_about4 from "../../assets/images/about/about_4.png";
import img_about11 from "../../assets/images/about/about_11.png";
import { useTranslation } from "react-i18next";
import TeamStuf from '../Teams/TeamStuf';

function Partners() {
  const { t } = useTranslation();
  return (
    <div>
      <BannerComp />
      <section>
        <div className="container 3xl:container-secondary-lg 4xl:container mx-auto">
          {/*   about section    */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
            {/*   about left   */}
            <div
              className="relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
              data-aos="fade-up"
            >
              <div className="tilt">
                <img className="md:ml-[70px]" src={img_about2} alt="" />
                {/* <img
                  className="absolute right-0 sm:right-[-17px] md:right-36 lg:right-4 bottom-[91px] md:bottom-0"
                  src="{img_about3}"
                  alt=""
                /> */}
                {/* <img
                  className="absolute top-[-18px] left-[30px] animate-move-hor z-[-1]"
                  src={img_about4}
                  alt=""
                /> */}
                {/* <img
                  className="absolute top-[30%] left-0 z-[-1]"
                  src={img_about11}
                  alt=""
                /> */}
              </div>
              {/*   experience   */}
             
            </div>
            {/*   about right   */}
            <div data-aos="fade-up">
              <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                {t("Partners.about")}
              </span>
              <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-whiteColor dark:text-blackColor-dark pb-25px">
                {t("Partners.title")} <br />
                <span className="relative after:w-full after:h-[2px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5">
                  {/* {t("about.Elshaddai")} */}
                </span>
                {/* &nbsp; {t("about.Apostolic")} */}
              </h3>
              <p className="text-sm md:text-base leading-7 text-whiteColor text-opacity-65 mb-6 pl-3 border-l-2 border-primaryColor">
                {t("Partners.description")}
              </p>
            </div>
          </div>
          {/*   about counter   */}
        </div>
      </section>
      <TeamStuf />
    </div>
  );
}

export default Partners
