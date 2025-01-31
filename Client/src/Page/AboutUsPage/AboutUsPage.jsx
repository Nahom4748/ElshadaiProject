import React, {useState} from 'react'
import img_teacher1 from "../../assets/images/teacher/P--Teme.png";
import img_hero1 from '../../assets/images/herobanner/herobanner__1.png'
import img_hero2 from '../../assets/images/grid/grid_1.png'
import AboutUs from '../../Components/Aboutus/AboutUs';
import BannerComp from '../../Components/Banner/BannerComp';

function AboutUsPage() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="bg-transparent">
        {/*  banner section  */}
        <BannerComp />
        <AboutUs />
        <section>
          <div className="container 3xl:container-secondary-lg 4xl:container mx-auto pb-50px md:pb-70px lg:pb-20 2xl:pb-70px">
            {/*   overview tabs   */}
            <div data-aos="fade-up" className="tab">
              <div className="tab-links flex flex-wrap md:flex-nowrap mb-10px lg:mb-50px rounded gap-10px lg:gap-35px">
                <button
                  className="{activeTab === 'tab1' ? 'tab-button active' : 'tab-button'}is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-contentColor transition-all duration-300 shadow-experience hover:text-secondaryColor bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 active"
                  onClick={() => handleTabClick("tab1")}
                >
                  About
                </button>

                <button
                  className="{activeTab === 'tab2' ? 'tab-button active' : 'tab-button'}is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-contentColor transition-all duration-300 shadow-experience hover:text-secondaryColor bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 active"
                  onClick={() => handleTabClick("tab2")}
                >
                  ብዛዕባና
                </button>

                <button
                  className="{activeTab === 'tab3' ? 'tab-button active' : 'tab-button'}is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-contentColor transition-all duration-300 shadow-experience hover:text-secondaryColor bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 active"
                  onClick={() => handleTabClick("tab3")}
                >
                  Pastor Temesghen Seum
                </button>

                <button
                  className="{activeTab === 'tab4' ? 'tab-button active' : 'tab-button'}is-checked relative py-10px px-25px md:py-10px md:px-10 lg:py-15px lg:px-60px font-bold uppercase text-contentColor transition-all duration-300 shadow-experience hover:text-secondaryColor bg-whiteColor hover:bg-primaryColor dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 active"
                  onClick={() => handleTabClick("tab4")}
                >
                  EDUCATION
                </button>
              </div>
              <div className="tab-contents">
                {activeTab === "tab1" && (
                  <div id="tab1">
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      El Shaddai Apostolic Mission is dedicated to delivering
                      the Word of God with clarity, revelation, and purpose,
                      guiding individuals toward deep spiritual transformation.
                      Our ministry is rooted in the belief that biblical
                      teachings, when applied with understanding, can create a
                      God-centered society that upholds righteousness and
                      influences positive change in all areas of life.
                      <br /> Grateful for your continued participation in our
                      mission, we are honored to witness the growth and
                      transformation of believers around the world. Through the
                      power of the Word, we strive to cultivate Godly-minded
                      individuals who live out their faith daily, becoming
                      beacons of light in their families, communities, and
                      beyond.
                      <br />
                      <br /> Our website has become an essential tool in this
                      mission, serving as a global platform to disseminate the
                      message of the Gospel. It allows us to reach people in
                      different nations and cultures, breaking barriers and
                      uniting believers in their pursuit of spiritual growth.
                      Through teachings, resources, and ongoing communication,
                      the website is helping spread God’s truth, empowering
                      individuals to walk in righteousness and to fulfill their
                      divine purpose.
                      <br />
                      <br /> As we continue to build and strengthen this global
                      community, we remain committed to nurturing and supporting
                      believers in their spiritual journeys, equipping them with
                      the tools they need to develop strong foundations in
                      Christ. Together, with your support, we are shaping a
                      future generation of leaders who will carry forward the
                      mission of spreading the Word of God and embodying His
                      righteousness in every aspect of life.
                    </p>
                    <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Our Vision
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      To build a Godly-minded society and create an influence of
                      righteousness in every community we reach.
                    </p>
                    <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Our Mission
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                      To teach and counsel through the wisdom of the Word of
                      God, perfecting all saints.
                      <br /> To develop and build the next generation of leaders
                      and God's servants through ongoing training and equipping.
                    </p>
                  </div>
                )}

                {activeTab === "tab2" && (
                  <div id="tab2">
                    <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      መልእኽቲ ፓስተር ተመስገን ሰዩም
                    </h4>{" "}
                    <br />
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      ናብ’ዚ መራኸቢ ብዙሃን (Website) ኤልሻዳይ ሃዋርያዊ ተልእኾ እንቋዕ ብደሓን መጻኹም።
                      ብትምህርቲ ቓል ኣምላኽ፡ ኣምላኻዊ ሓሳብ ዘሎዎ ሕበረተሰብ ንምፍጣር; ዕላማን ተልእኾን
                      ወንጌል ንምፍጻም ተሳተፍቲ ምዃንኩም ደስ ይብለኒ። እዚ መራኸቢ ብዙሃን: (Website) ኣብ
                      ኩሉ ክፍሊ ዓለም ትምህርቲ መጽሓፍ ቅዱስ ንምዝርጋሕ ኣዚዩ ጠቓሚ መሳርሒ’ዩ። ዕላማ ኤልሻዳይ
                      ሃዋርያዊ ተልእኾ፡ ቃል ኣምላኽ ብግልጸትን ብዝርዳእ ኣገባብን ብምምሃር፡ ኣብ ኩሉ ክፍሊ
                      ዓለም ንዘሎ ህዝብና፡ ኣብ ህይወቱ መሰረታዊ ለውጢ ንምምጻእ’ዩ። ካብ እግዚኣብሄር
                      ዝተወሃብናዮ ተልእኾ፡ ኣብ ኩሉ ዓለም ዘሎ ህዝብና ቓል ኣምላኽ ንኽመሃር፡ ነቲ ተካኢ ወሎዶ
                      ዝኾኑ መራሕትን ኣገልገልትን፡ ምስልጣንን፡ ምዕጣቕን፡ምፍራይን’ዩ። በዚ ዓለም ለኻዊ ዝኾነ
                      ራእይ፡ ኤልሻዳይ ሃዋርያዊ ተልእኾ ኣብ ዓለም ዘሎ ህዝብና ጽልዋ ከም ዘሕድርን መሰረታዊ
                      ለውጢ ከም ዘመጽእን ንእግዚኣብሄር ንኣምኖ ኢና። ተልእኾ ወንጌል ንኽንፍጽም ብጸሎት ኮነ
                      ብንዋት፡ ደገፍ ንትገብሩልና ኣብ ኩሉ ዓለም ዘሎኹም መተዓየይትና፡ ስለ ትግሃትኩምን
                      ጸዓትኩምን እግዚኣብሄር ይባርኽኩም።
                    </p>
                    <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      ራእይና
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      ሓሳብ ኣምላኽ ዘሎዎ ሕብረተሰብ ብምህናጽ ኣብ ማአከል ወሎዶ ናይ ጽድቂ ጽልዋ ምምጻእ’ዩ።
                    </p>
                    <h4 className="text-xl font-medium text-whiteColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      ዕላማና
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                      1.ንኹሎም ኣመንቲ ብክርስቶስ ምሉኣት ኮይኖም ምእንቲ ክቖሙ ብጥበብ ቃል ኣምላኽ ምምዓድን
                      ምምሃርን።
                      <br /> 2. ነቲ ተካኢ ወሎዶ ዝኾኑ መራሕትን ኣገልገልትን፡ ምስልጣንን፡
                      ምዕጣቕን፡ምፍራይን’ዩ።
                    </p>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div id="tab3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20px items-center">
                      {/*   card 1   */}
                      <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 gap-y-5 sm:gapy-y-0 group p-15px transition-all duration-300 shadow-experience   dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded">
                        <div data-aos="fade-up" class="group">
                          <div class="mb-30px relative flex flex-col items-center">
                            <div>
                              <img
                                src={img_teacher1}
                                class="rounded-full"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="text-center">
                            <h5>
                              <a
                                href="instructor-details.html"
                                class="text-size-28 leading-45px font-semibold text-contentColor capitalize dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                              >
                                Pastor Temesghen Seum
                              </a>
                            </h5>
                            <p className="text-xl text-primaryColor font-medium leading-6 mb-10px">
                              Sinior Pastor
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*   card 2   */}
                      <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 gap-y-5 sm:gapy-y-0 group p-2px transition-all duration-300 shadow-experience dark:bg-whiteColor-dark dark:hover:bg-whiteColor rounded">
                            <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                              ናብ’ዚ መራኸቢ ብዙሃን (Website) ኤልሻዳይ ሃዋርያዊ ተልእኾ እንቋዕ
                              ብደሓን መጻኹም። ብትምህርቲ ቓል ኣምላኽ፡ ኣምላኻዊ ሓሳብ ዘሎዎ ሕበረተሰብ
                              ንምፍጣር; ዕላማን ተልእኾን ወንጌል ንምፍጻም ተሳተፍቲ ምዃንኩም ደስ ይብለኒ።
                              እዚ መራኸቢ ብዙሃን: (Website) ኣብ ኩሉ ክፍሊ ዓለም ትምህርቲ መጽሓፍ
                              ቅዱስ ንምዝርጋሕ ኣዚዩ ጠቓሚ መሳርሒ’ዩ። ዕላማ ኤልሻዳይ ሃዋርያዊ ተልእኾ፡
                              ቃል ኣምላኽ ብግልጸትን ብዝርዳእ ኣገባብን ብምምሃር፡ ኣብ ኩሉ ክፍሊ ዓለም
                              ንዘሎ ህዝብና፡ ኣብ ህይወቱ መሰረታዊ ለውጢ ንምምጻእ’ዩ። ካብ እግዚኣብሄር
                              ዝተወሃብናዮ ተልእኾ፡ ኣብ ኩሉ ዓለም ዘሎ ህዝብና ቓል ኣምላኽ ንኽመሃር፡ ነቲ
                              ተካኢ ወሎዶ ዝኾኑ መራሕትን ኣገልገልትን፡ ምስልጣንን፡ ምዕጣቕን፡ምፍራይን’ዩ።
                              በዚ ዓለም ለኻዊ ዝኾነ ራእይ፡ ኤልሻዳይ ሃዋርያዊ ተልእኾ ኣብ ዓለም ዘሎ
                              ህዝብና ጽልዋ ከም ዘሕድርን መሰረታዊ ለውጢ ከም ዘመጽእን ንእግዚኣብሄር ንኣምኖ
                              ኢና። ተልእኾ ወንጌል ንኽንፍጽም ብጸሎት ኮነ ብንዋት፡ ደገፍ ንትገብሩልና ኣብ
                              ኩሉ ዓለም ዘሎኹም መተዓየይትና፡ ስለ ትግሃትኩምን ጸዓትኩምን እግዚኣብሄር
                              ይባርኽኩም።
                            </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab4" && (
                  <div className="hidden">
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px"></p>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      World best education site - (Computer engeenering)
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-25px">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      useery
                    </p>
                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Web and user interface design - Development
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      useery
                    </p>

                    <h4 className="text-xl font-medium text-blackColor dark:text-blackCol font-thinor-dark dark:text-blackColor-dark">
                      Interaction design - Animation
                    </h4>
                    <p className="text-contentColor dark:text-contentColor-dark mb-30px">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      useery
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AboutUsPage
