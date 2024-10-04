import React from 'react'
import img_test1 from '../../assets/images/testimonial/testi_1.png'
import img_test2 from '../../assets/images/testimonial/testi_2.png'
import img_test3 from '../../assets/images/testimonial/testi__group__1.png'

function Testimonial() {
  return (
    <>
      <section>
        <div
          class="bg-blackColor1 dark:bg-lightGrey10-dark relative z-0 overflow-hidden"
        >
          <div
            class="container py-50px md:py-70px lg:py-20 2xl:pt-145px 2xl:pb-154px"
          >
            <div
              class="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px lg:gap-0"
            >
              {/*   testimonial Left   */} 
              <div data-aos="fade-up">
                <h3
                  class="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold"
                >
                  Hear from students
                </h3>
                <h1
                  class="text-3xl text-whiteColor md:text-size-35 lg:text-size-42 2xl:text-size-47 leading-10 md:leading-45px lg:leading-12 2xl:leading-50px dark:text-blackColor-dark font-bold mb-15px"
                >
                  Students Testimonial
                </h1>

                {/*   Swiper   */} 
                <div class="swiper testimonial-2">
                  <div class="swiper-wrapper">
                    {/*   testimonial 1   */} 
                    <div class="swiper-slide">
                      <div>
                        <p
                          class="md:text-xl md:leading-10 text-lightGrey dark:text-whiteColor"
                        >
                          <i
                            class="icofont-quote-left quote__left text-primaryColor text-xl"
                          ></i>
                          The other hand we denounce with righteou indg ation
                          and dislike men who are so beguiled and demorali ed by
                          the of pleasure of the moment.Dislike men who are so
                          beguiled and demoraliz worlds ed by the charms of
                          pleasure of the moment. Lorem ipsum dolor sit amet.
                          <i
                            class="icofont-quote-right quote__right text-primaryColor text-xl"
                          ></i>
                        </p>

                        <div class="flex items-center pt-10">
                          <div class="pr-18px">
                            <img
                              src={img_test1}
                              alt=""
                              class="w-18 h-78 rounded-full"
                            />
                          </div>
                          <div>
                            <h4>
                              <a
                                href="#"
                                class="text-size-22 font-semibold text-contentColor hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark"
                                >Mirnsdo Jons</a
                              >
                            </h4>
                            <a href="#" class="text-primaryColor"
                              >Ui/Ux Designer</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*   testimonial 2   */} 
                    <div class="swiper-slide">
                      <div>
                        <p
                          class="md:text-xl md:leading-10 text-lightGrey dark:text-whiteColor"
                        >
                          <i
                            class="icofont-quote-left quote__left text-primaryColor text-xl"
                          ></i>
                          The other hand we denounce with righteou indg ation
                          and dislike men who are so beguiled and demorali ed by
                          the of pleasure of the moment.Dislike men who are so
                          beguiled and demoraliz worlds ed by the charms of
                          pleasure of the moment. Lorem ipsum dolor sit amet.
                          <i
                            class="icofont-quote-right quote__right text-primaryColor text-xl"
                          ></i>
                        </p>

                        <div class="flex items-center pt-10">
                          <div class="pr-18px">
                            <img
                              src={img_test2}
                              alt=""
                              class="w-18 h-78 rounded-full"
                            />
                          </div>
                          <div>
                            <h4>
                              <a
                                href="#"
                                class="text-size-22 font-semibold text-contentColor hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark"
                                >Mirnsdo Jons</a
                              >
                            </h4>
                            <a href="#" class="text-primaryColor"
                              >Ui/Ux Designer</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*   testimonial 3   */} 
                    <div class="swiper-slide">
                      <div>
                        <p
                          class="md:text-xl md:leading-10 text-lightGrey dark:text-whiteColor"
                        >
                          <i
                            class="icofont-quote-left quote__left text-primaryColor text-xl"
                          ></i>
                          The other hand we denounce with righteou indg ation
                          and dislike men who are so beguiled and demorali ed by
                          the of pleasure of the moment.Dislike men who are so
                          beguiled and demoraliz worlds ed by the charms of
                          pleasure of the moment. Lorem ipsum dolor sit amet.
                          <i
                            class="icofont-quote-right quote__right text-primaryColor text-xl"
                          ></i>
                        </p>

                        <div class="flex items-center pt-10">
                          <div class="pr-18px">
                            <img
                              src={img_test2}
                              alt=""
                              class="w-18 h-78 rounded-full"
                            />
                          </div>
                          <div>
                            <h4>
                              <a
                                href="#"
                                class="text-size-22 font-semibold text-contentColor hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark"
                                >Mirnsdo Jons</a
                              >
                            </h4>
                            <a href="#" class="text-primaryColor"
                              >Ui/Ux Designer</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*   slide controller   */} 
                  <div
                    class="absolute bottom-0 right-0 flex flex-row-reverse gap-0.5"
                  >
                    <div
                      class="static swiper-button-next w-15 h-15 bg-whiteColor text-blackColor transition-all duration-300 text-3xl hover:bg-primaryColor hover:text-whiteColor dark:hover:bg-secondaryColor after:hidden before:hidden"
                    >
                      <i class="icofont-long-arrow-right active"></i>
                    </div>
                    <div
                      class="static swiper-button-prev w-15 h-15 transition-all duration-300 bg-whiteColor text-blackColor text-3xl hover:bg-primaryColor hover:text-whiteColor dark:hover:bg-secondaryColor after:hidden before:hidden"
                    >
                      <i class="icofont-long-arrow-left"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/*   testimonial right   */} 
              <div data-aos="fade-up">
                <div class="tilt pl-0 md:pl-70px">
                  <img
                    class="w-full"
                    src={img_test3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
