import React from 'react'

function Question() {
  return (
    <>
      <section>
        <div class="container 3xl:container-secondary-lg 4xl:container mx-auto 2xl:py-100px">
          <div class="fees faq grid grid-cols-1 lg:grid-cols-12 gap-30px">
            <div class="lg:col-start-1 lg:col-span-3" data-aos="fade-up">
              <div class="lg:-rotate-90 lg:translate-y-3/4 relative">
                <h4 class="text-size-150 lg:text-size-140 2xl:text-size-200 text-lightGrey dark:text-blackColor-dark opacity-50 uppercase font-bold leading-[1]">
                  faq
                </h4>
              </div>
            </div>
            {/*   accordions  */}
            <div class="lg:col-start-4 lg:col-span-9" data-aos="fade-up">
              <ul class="accordion-container rounded-md">
                {/*   accordion  */}
                <li class="accordion active">
                  <div class="bg-darkdeep border border-borderColor dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/*   controller  */}
                    <div>
                      <button class="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent">
                        <span>Can I cancel my account at any time?</span>

                        <svg
                          class="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/*   content  */}
                    <div class="accordion-content transition-all duration-500 overflow-hidden">
                      <div class="content-wrapper py-4 px-5">
                        <p class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          Non similique culpa in provident quos sit commodi
                          beatae ea laborum suscipit id autem velit aut iusto
                          odio et deleniti quis et doloremque enim vel
                          consequuntur quos.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion">
                  <div class="bg-darkdeep border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/*   controller  */}
                    <div>
                      <button class="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent">
                        <span>What happens after the license expires?</span>
                        <svg
                          class="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/*   content  */}
                    <div class="h-0 accordion-content transition-all duration-500 overflow-hidden">
                      <div class="content-wrapper py-4 px-5">
                        <p class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          Non similique culpa in provident quos sit commodi
                          beatae ea laborum suscipit id autem velit aut iusto
                          odio et deleniti quis et doloremque enim vel
                          consequuntur quos.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion">
                  <div class="bg-dardeep border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/*   controller  */}
                    <div>
                      <button class="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent">
                        <span>Does Harry have any documentations?</span>
                        <svg
                          class="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/*   content  */}
                    <div class="h-0 accordion-content transition-all duration-500 overflow-hidden">
                      <div class="content-wrapper py-4 px-5">
                        <p class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          Non similique culpa in provident quos sit commodi
                          beatae ea laborum suscipit id autem velit aut iusto
                          odio et deleniti quis et doloremque enim vel
                          consequuntur quos.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="accordion">
                  <div class="bg-dardeep border border-borderColor border-t-0 dark:bg-whiteColor-dark dark:border-borderColor-dark">
                    {/*   controller  */}
                    <div>
                      <button class="accordion-controller flex justify-between items-center text-xl text-whiteColor font-bold w-full px-10px pt-14px pb-15px md:px-25px md:pt-6 md:pb-25px dark:text-headingColor-dark font-hind leading-[20px] outline-4 outline-transparent transition-none border-b border-transparent">
                        <span>How long do I get support & updates?</span>
                        <svg
                          class="transition-all duration-500 rotate-0"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="#212529"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    {/*   content  */}
                    <div class="h-0 accordion-content transition-all duration-500 overflow-hidden">
                      <div class="content-wrapper py-4 px-5">
                        <p class="leading-7 text-contentColor dark:text-contentColor-dark mb-15px">
                          Non similique culpa in provident quos sit commodi
                          beatae ea laborum suscipit id autem velit aut iusto
                          odio et deleniti quis et doloremque enim vel
                          consequuntur quos.
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

export default Question
