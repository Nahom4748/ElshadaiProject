import React, { useState } from "react";

function Question() {
  const [activeIndex, setActiveIndex] = useState(0); // First accordion is open by default

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Close the current open accordion if clicked again
  };

  return (
    <>
      <section>
        <div className="container 3xl:container-secondary-lg 4xl:container mx-auto 2xl:py-100px">
          <div className="fees faq grid grid-cols-1 lg:grid-cols-12 gap-30px">
            <div className="lg:col-start-1 lg:col-span-3" data-aos="fade-up">
              <div className="lg:-rotate-90 lg:translate-y-3/4 relative">
                <h4 className="text-size-150 lg:text-size-140 2xl:text-size-200 text-lightGrey dark:text-blackColor-dark opacity-50 uppercase font-bold leading-[1]">
                  FAQ
                </h4>
              </div>
            </div>
            {/* Accordions */}
            <div className="lg:col-start-4 lg:col-span-9" data-aos="fade-up">
              <ul className="accordion-container rounded-md">
                {/* Accordion 1 */}
                <li
                  className={`accordion ${activeIndex === 0 ? "active" : ""}`}
                >
                  <div className="bg-darkdeep border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/* Controller */}
                    <div>
                      <button
                        className="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        onClick={() => toggleAccordion(0)}
                      >
                        <span>ምዝገባ መኣስ ይጅምር</span>
                        <svg
                          className="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* Content */}
                    <div
                      className={`accordion-content transition-all duration-500 overflow-hidden ${
                        activeIndex === 0 ? "h-auto" : "h-0"
                      }`}
                    >
                      <div className="content-wrapper py-4 px-5">
                        <p className="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          ምዝገባ ዝጅመረሉ ካብ ሚያዝያ 1 - ነሓሰ 30 (April 1 - August 30) እዩ። 
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Accordion 2 */}
                <li
                  className={`accordion ${activeIndex === 1 ? "active" : ""}`}
                >
                  <div className="bg-darkdeep border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/* Controller */}
                    <div>
                      <button
                        className="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        onClick={() => toggleAccordion(1)}
                      >
                        <span>ናይ ክላስ ስዓትን መዓልትን መኣስ ኢዩ?</span>
                        <svg
                          className="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* Content */}
                    <div
                      className={`accordion-content transition-all duration-500 overflow-hidden ${
                        activeIndex === 1 ? "h-auto" : "h-0"
                      }`}
                    >
                      <div className="content-wrapper py-4 px-5">
                        <p className="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          ክላስ ዝውሃበሉ ንተቐማጦ ኣመሪካን፣ ካናዳን፣ ኣውስትራልያን ሶሉስ 9፡00PM ብኣቆጻጽራ ዋሽንግቶን ዲሲ ክኸውን እንከሎ፣ ንተቐማጦ ኣፍሪቃን፣ ኤሮፓን፣ ማእኸላይ ምብራቕን ድማ 8፡00PM ብኣቆጻጽራ በርሊን ኢዩ።  
                          እቶም ናይ ክላስ ሰዓታት ዝይጥዕሞም ድማ፣ ኣብ ኦንላይን ንኹሉ ትምህርቲታት ክከታተሉ ይኽእሉ ኢዮም። 
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Accordion 3 */}
                <li
                  className={`accordion ${activeIndex === 2 ? "active" : ""}`}
                >
                  <div className="bg-dardeep border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/* Controller */}
                    <div>
                      <button
                        className="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        onClick={() => toggleAccordion(2)}
                      >
                        <span>ድሕሪ ምዝዛም ትምህርቲ፣ ወረቐት ምስክርነት ኣሎ ዲዩ?</span>
                        <svg
                          className="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* Content */}
                    <div
                      className={`accordion-content transition-all duration-500 overflow-hidden ${
                        activeIndex === 2 ? "h-auto" : "h-0"
                      }`}
                    >
                      <div className="content-wrapper py-4 px-5">
                        <p className="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          እወ፣ ድሕሪ ምዝዛም 1ይ ዓመት ናይ ሓደ ዓመት ምስክርነት ዲፕሎማ ንህበ ኢና። ነቶም ናይ 2ይ ዓመት ተማሃሮ ድማ ከምኡ ናይ ክልተ ዓመት ምስክርነት ዲፕሎማ ንህበ ኢና።
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Accordion 4 */}
                <li
                  className={`accordion ${activeIndex === 3 ? "active" : ""}`}
                >
                  <div className="bg-dardeep border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/* Controller */}
                    <div>
                      <button
                        className="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent"
                        onClick={() => toggleAccordion(3)}
                      >
                        <span>ድሕሪ ምዝገባ እንታይ ይስዕብ?</span>
                        <svg
                          className="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/* Content */}
                    <div
                      className={`accordion-content transition-all duration-500 overflow-hidden ${
                        activeIndex === 3 ? "h-auto" : "h-0"
                      }`}
                    >
                      <div className="content-wrapper py-4 px-5">
                        <p className="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          ድሕሪ ምዝገባ፡ ኣባላት ስታፍና ብቐጥታ ብምድዋል ዘድሊ ናይ ትምህርቲ ሓበሬታትን ንዝለኩም ሕቶታትን ንምልስ። 
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Question;
