import React, { useState, useEffect, useRef } from "react";
import img_count1 from "../../assets/images/counter/counter__1.png";
import img_count2 from "../../assets/images/counter/counter__2.png";
import img_count3 from "../../assets/images/counter/counter__3.png";
import img_count4 from "../../assets/images/counter/counter__4.png";
import img_about2 from "../../assets/images/about/about_pasT.png";
import img_about4 from "../../assets/images/about/about_4.png";
import img_about11 from "../../assets/images/about/about_11.png";
import AboutCards from "./AboutCards";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const [counter1, setCounter1] = useState(0); // Counter up to 35
  const [counter2, setCounter2] = useState(0); // Counter up to 75
  const [counter3, setCounter3] = useState(0); // Counter up to 300
  const [counter4, setCounter4] = useState(0); // Counter up to 103
  const [counter5, setCounter5] = useState(0); // Counter up to 100

  const sectionRef = useRef(null); // Only one section to observe
  const { t } = useTranslation();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the section becomes visible, increment the counters
          if (counter1 === 0) {
            incrementCounters();
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.4, // Trigger when 10% of the section is visible
    });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [counter1]); // Trigger the observer when `counter1` is still 0 (prevents re-incrementing)

  const incrementCounters = () => {
    // Increment counter1 to 35
    let currentCount1 = 0;
    const interval1 = setInterval(() => {
      setCounter1((prev) => {
        currentCount1 = prev + 1;
        return currentCount1;
      });
      if (currentCount1 >= 34) {
        clearInterval(interval1);
      }
    }, 70);

    // Increment counter2 to 75
    let currentCount2 = 0;
    const interval2 = setInterval(() => {
      setCounter2((prev) => {
        currentCount2 = prev + 1;
        return currentCount2;
      });
      if (currentCount2 >= 699) {
        clearInterval(interval2);
      }
    }, 30);

    // Increment counter3 to 300
    let currentCount3 = 0;
    const interval3 = setInterval(() => {
      setCounter3((prev) => {
        currentCount3 = prev + 2;
        return currentCount3;
      });
      if (currentCount3 >= 337) {
        clearInterval(interval3);
      }
    }, 40);

    // Increment counter4 to 103
    let currentCount4 = 0;
    const interval4 = setInterval(() => {
      setCounter4((prev) => {
        currentCount4 = prev + 1;
        return currentCount4;
      });
      if (currentCount4 >= 102) {
        clearInterval(interval4);
      }
    }, 50);

    // Increment counter5 to 100
    let currentCount5 = 0;
    const interval5 = setInterval(() => {
      setCounter5((prev) => {
        currentCount5 = prev + 1;
        return currentCount5;
      });
      if (currentCount5 >= 99) {
        clearInterval(interval5);
      }
    }, 70);
  };
  return (
    <>
      <section>
        <div className="container 3xl:container-secondary-lg 4xl:container mx-auto">
          {/*   about section    */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
            {/*   about left   */}
            <div
              className="relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
              data-aos="fade-up"
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Main Image Container */}
                <div className="relative md:ml-[70px] w-auto max-w-none">
                  <img
                    className="w-auto h-auto max-h-[500px] md:max-h-none object-contain mx-auto md:mx-0 transform transition-transform duration-500 group-hover:scale-105"
                    src={img_about2}
                    alt="Main Content"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblack via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/20 via-transparent to-secondaryColor/20 animate-shimmer opacity-30" />
                  </div>

                  {/* Floating Decorative Element */}
                  <img
                    className="absolute top-[20px] left-[-40px] w-[80px] h-[80px] animate-float z-0 opacity-80"
                    src={img_about4}
                    alt="Decorative"
                    style={{
                      filter:
                        "blur(3px) drop-shadow(0 4px 6px rgba(59, 130, 246, 0.2))",
                      animation: "subtle-float 8s ease-in-out infinite",
                      mixBlendMode: "soft-light",
                    }}
                  />
                </div>

                {/* Hover Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-darkblack via-darkblack/90 to-transparent   group-hover:opacity-100 transition-opacity duration-300">
                  <div className="backdrop-blur-sm bg-darkblack/30 p-4 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold text-primaryColor mb-2">
                      ፓስተር ተመስገን ሰዩም
                    </h4>
                    <p className="text-white text-sm font-light">
                      ሓሳብ ኣምላኽ ዘሎዎ ሕብረተሰብ ብምህናጽ ኣብ ማአከል ወሎዶ ናይ ጽድቂ ጽልዋ ምምጻእ’ዩ።
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primaryColor/20 transition-all duration-500 rounded-2xl">
                  <div className="absolute inset-0 border-2 border-primaryColor/10 rounded-2xl animate-border-pulse" />
                </div>
              </div>
              {/*   experience   */}
              <div
                ref={sectionRef}
                className="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience bg-darkdeep1 dark:bg-whiteColor-dark animate-move-var w-[290px]"
              >
                <div className="counter flex items-center">
                  <p className="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                    <span>{counter1}</span>+
                  </p>
                  <p className="text-whiteColor dark:text-blackColor-dark font-bold leading-26px">
                    {t("about.years")} <br /> {t("about.ministry")}
                  </p>
                </div>
              </div>
            </div>
            {/*   about right   */}
            <div data-aos="fade-up">
              <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                {t("about.About")}
              </span>
              <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-whiteColor dark:text-blackColor-dark pb-25px">
                {t("about.Welcome")} <br />
                <span className="relative after:w-full after:h-[2px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5">
                  {t("about.Elshaddai")}
                </span>
                &nbsp; {t("about.Apostolic")}
              </h3>
              <p className="text-sm md:text-base leading-7 text-whiteColor text-opacity-65 mb-6 pl-3 border-l-2 border-primaryColor">
                {t("about.ApostolicMission")}
              </p>
              <ul className="space-y-5">
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-whiteColor text-opacity-65">
                    {t("about.build")}
                  </p>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-whiteColor text-opacity-65">
                    {t("about.develop")}
                  </p>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-whiteColor text-opacity-65">
                    {t("about.teach")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*   about counter   */}
          <div className="counter flex flex-wrap py-[70px] lg:py-20 gap-y-30px lg:gap-y-0">
            <div
              className="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div className="flex gap-4">
                <div>
                  <img src={img_count1} alt="" />
                </div>
                <div>
                  <p className="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="27">{counter2}</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    {t("about.Total")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div className="flex gap-4">
                <div>
                  <img src={img_count2} alt="" />
                </div>
                <div>
                  <p className="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="145">{counter3}</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    {t("about.active")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div className="flex gap-4">
                <div>
                  <img src={img_count3} alt="" />
                </div>
                <div>
                  <p className="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="10">{counter4}</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    {t("about.Partners")}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-full sm:basis-1/2 lg:basis-1/4"
              data-aos="fade-up"
            >
              <div className="flex gap-4">
                <div>
                  <img src={img_count4} alt="" />
                </div>
                <div>
                  <p className="text-size-34 leading-[1.1] text-whiteColor text-opacity-65 font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="214">{counter5}</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-whiteColor text-opacity-65 font-medium leading-[18px] dark:text-blackColor-dark">
                    {t("about.Countries")}
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

export default AboutUs;
