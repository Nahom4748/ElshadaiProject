import React from 'react'
import img_her2 from "../../assets/images/education/hero_shape2.png";
import img_her3 from "../../assets/images/education/hero_shape3.png";
import img_her4 from "../../assets/images/education/hero_shape4.png";
import img_her5 from "../../assets/images/education/hero_shape5.png";
import { Link } from 'react-router-dom';

function CreateAcc() {
  return (
    <>
      <section class="relative">
        <div class="container py-100px">
          <div class="tab md:w-2/3 mx-auto">
            {/*  tab controller */}
            <div class="tab-links grid grid-cols-2 gap-11px text-black text-lg lg:text-size-22 font-semibold font-hind mb-43px mt-30px md:mt-0">
              <button class="py-9px lg:py-6 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-contentColor dark:bg-whiteColor-dark dark:hover:bg-#0c0e2b hover:bg-white relative group/btn shadow-bottom hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard ">
                <span class="absolute w-full h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                <Link to="/login" class="hover:text-primaryColor">
                 Login
                </Link>
              </button>
              <button class="py-9px lg:py-6 hover:text-primaryColor dark:hover:text-primaryColor dark:text-whiteColor bg-lightGrey7 dark:bg-lightGrey7-dark hover:bg-white dark:hover:bg-whiteColor-dark relative group/btn hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard">
                <span class="absolute w-0 h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                <Link to="/create-account" class="hover:text-primaryColor">
                  Sing up
                </Link>
              </button>
            </div>

            {/*   tab contents */}
            <div class="shadow-container bg-lightGrey7 dark:bg-whiteColor-dark pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
              <div class="tab-contents">
                {/*  sign up form*/}
                <div class=" transition-opacity duration-150 ease-linear">
                  {/*  heading   */}
                  <div class="text-center">
                    <h3 class="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                      Sing Up
                    </h3>
                    <p class="text-contentColor dark:text-contentColor-dark mb-15px">
                      Already have an account?
                      <Link
                        to="/login"
                        class="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Log In
                      </Link>
                    </p>
                  </div>

                  <form class="pt-25px" data-aos="fade-up">
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                      <div>
                        <label class="text-contentColor dark:text-contentColor-dark mb-10px block">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          class="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-contentColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div>
                        <label class="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          class="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-contentColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                      <div>
                        <label class="text-contentColor dark:text-contentColor-dark mb-10px block">
                          WhatsApp #
                        </label>
                        <input
                          type="text"
                          placeholder="+1 123 456 7890"
                          class="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-contentColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div>
                        <label class="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Your Email"
                          class="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-contentColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                      <div>
                        <label class="text-contentColor dark:text-contentColor-dark mb-10px block">
                          City, Country
                        </label>
                        <input
                          type="password"
                          placeholder="Asmara, Eritria"
                          class="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-contentColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div>
                        <label class="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          class="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-contentColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                    </div>

                    <div class="text-contentColor dark:text-contentColor-dark flex items-center">
                      <input
                        type="checkbox"
                        id="accept-pp"
                        class="w-18px h-18px mr-2 block box-content"
                      />
                      <label for="accept-pp">
                        Accept the Terms and Privacy Policy
                      </label>
                    </div>
                    <div class="mt-25px text-center">
                      <button
                        type="submit"
                        class="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                      >
                        <Link to="/login">Log in</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  animated icons */}
        <div>
          <img
            loading="lazy"
            class="absolute right-[14%] top-[30%] animate-move-var"
            src={img_her2}
            alt="Shape"
          />
          <img
            loading="lazy"
            class="absolute left-[5%] top-1/2 animate-move-hor"
            src={img_her3}
            alt="Shape"
          />
          <img
            loading="lazy"
            class="absolute left-1/2 bottom-[60px] animate-spin-slow"
            src={img_her4}
            alt="Shape"
          />
          <img
            loading="lazy"
            class="absolute left-1/2 top-10 animate-spin-slow"
            src={img_her5}
            alt="Shape"
          />
        </div>
      </section>
    </>
  );
}

export default CreateAcc
