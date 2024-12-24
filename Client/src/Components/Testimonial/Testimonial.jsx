
import React, { useState } from "react";
import img_test1 from "../../assets/images/testimonial/asterTesfamichael.png";
import img_test4 from "../../assets/images/testimonial/tesfalemTekie.png";
import img_test2 from "../../assets/images/testimonial/seamTesfom.png";
import img_test5 from "../../assets/images/testimonial/yohanesGebreyesus.png";
import img_test6 from "../../assets/images/testimonial/fisumGerzgher.png";
import img_test7 from "../../assets/images/testimonial/mhreteabYosief.png";
import img_test3 from "../../assets/images/testimonial/Test_group.png";

// Array of testimonials for dynamic rendering
const testimonials = [
  {
    text: "ኣብዚ ትምህርቲ እዚ ብዙሕ ተማሂረ ኢዩ። እምነተይ ዓብዩ፣ ኣብ ክርስቶስ ዘሎኒ ማንነት ኣጸቢቑ ክርደኣኒ ኣኽኢሉኒ ኢዩ። ቃል ኣምላኽ ኮፍ ኢልካ ክትመሃሮ እንከለኻ ኣብ ሂወትካ ኣትዩ ዝሰርሖ ብዙ ስራሕ ኣሎ። እምነትካ ይዓቢ፣ ርዲኢትካ ድማ ይስፍሕ። እምነቱን፣ ርድኢቱን፣ ኣብ ክርስቶስ ዘለዎ ማንነት ዝተረድኤ ሰብ ድማ ፣ ሓይሊ ዘለዎ ሂወት ኢኻ ትነብር፣ ብስልጣን ኢዩ ዝመላለስ። እዚ ትምህርቲ ድማ ብሓይሊ ክትመላለስ፣ ብእምነት ክትመላለስ፣ ኣብ ክርስቶስ ዘለካ ማንነት ኣጸቢቑ ክርዳኣካ ዝገብር ትምህርቲ ስለዝኾነ፣ ኩሉ ክመሃሮ ኣለዎ ይብል።",
    img: img_test1,
    name: "Aster Tesfamichael",
    role: "ተማሃሪት 2ይ ዓመት ",
    from: "USA",
  },
  // {
  //   text: "The other hand we denounce with righteous indignation and dislike men who are so beguiled...",
  //   img: img_test2,
  //   name: "Seam Tesfom",
  //   role: "ተማሃራይ 2ይ ዓመት",
  //   from: "Sweden",
  // },
  {
    text: "ኣብዚ ትምህርቲ እዚ ምርደኤይ ተለዊጡ፣ ኣጸላልያይ ተለዊጡ፣ እምነተይ ዓብዩ፣ ካብ ተጸባይነትን፣ መንፈሳዊ ቁልዕነትን ተናጊፈ። እዚ ከኸውን ድምጺ ኣምላኽ ሰሚዑ ፥ ተኣዚዙ መንፈሳዊ ፍልጠት ክረክብ ዝገበረ ፓስተር ተመስገን ስዩም እግዚኣብሄር ይባርኮ። ኣብዚ ትምህርቲ እዚ ስቡሕ መኣዲ እግዚኣብሄር፣ ምቁር ሕብስቲ ክርስቶስ፣ ካብ ሰማይ ዝወረደ ማና ተኻፈልቲ ክትኮኑ ብኽብሪ ይዕድመኩም ። ንዑ ተባረኹ፣ ንበረኸት ክትኮኑ፣ ንምድሓን ነብሳት ክትኮኑ፣ ክሳብ ወሰን ምድሪ ድማ ወንጌል ክተስፍሑ።",
    img: img_test4,
    name: "Tesfalem Tekie",
    role: "ተማሃራይ 2ይ ዓመት",
    from: "Egypt",
  },
  {
    text: "በዚ ትምህርቲ አዚ፡ ኣብ ሂወተይ ሕቶታት ዝኾነኒ ዝነበረ ነገራት መልሲ ረኺበሉ፣ ኣብ ሂወተይ ድማ ዓቢ መንፈሳዊ ለውጢ ረኺበ። ኣብዚ ኮርስ ካብ ተማሃርናዮ ፡ አተን ቀንዲ ኣብ ሂወተይ ምግላጽ ዝረኸብኩሉን ኮርሳት ከም ናይ አግዚኣብሄር ቃል፣ ሞሎኮታዊ ምርሒት፣ ናይ አምነት ሓይሊ ዝብላ ትምህርትታት ብዙሕ መረዳአታ ረኺበ። ኣብዚ ትምህርቲ አዚ ተበጻሒ ከም ዝኾንኩ ፣ ካልኦት ድማ በዚ ዕድል ተኻፈልቲ ክትኮኑ ይምሕጸን። ኣብ ሂወትካ ዓቢ ለውጢን፣ ንኻልኦት ዝሓቱና መልሲ ክንምልስ ዘኽእል ፍልጠት ሒዝኩም ትወጹ።",
    img: img_test5,
    name: "Yohanes Gebreyesus",
    role: "ተማሃራይ 2ይ ዓመት",
    from: "Finland",
  },
  // {
  //   text: "The other hand we denounce with righteous indignation and dislike men who are so beguiled...",
  //   img: img_test6,
  //   name: "Fisum Gerzgher",
  //   role: "ተማሃራይ 2ይ ዓመት",
  //   from: "Norway",
  // },
  // {
  //   text: "The other hand we denounce with righteous indignation and dislike men who are so beguiled...",
  //   img: img_test7,
  //   name: "Mhreteab Yosief",
  //   role: "ተማሃራይ 2ይ ዓመት",
  //   from: "ኣሜሪካ",
  // },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <div className="bg-blackColor1 dark:bg-lightGrey10-dark relative z-0 overflow-hidden">
        <div className="container py-50px md:py-70px lg:py-20 2xl:pt-145px 2xl:pb-154px">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px lg:gap-0">
            {/* Testimonial Left */}
            <div data-aos="fade-up">
              <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-[4px] font-semibold">
                Hear from students
              </h3>
              <h1 className="text-3xl text-whiteColor md:text-size-35 lg:text-size-42 2xl:text-size-47 leading-10 md:leading-45px lg:leading-12 2xl:leading-50px dark:text-blackColor-dark font-bold mb-15px">
                Students Testimonial
              </h1>
              <div className="relative">
                <div className="swiper-slide">
                  <p className="md:text-xl md:leading-10 text-lightGrey dark:text-whiteColor">
                    <i className="icofont-quote-left quote__left text-primaryColor text-xl"></i>
                    {testimonials[currentIndex].text}
                    <i className="icofont-quote-right quote__right text-primaryColor text-xl"></i>
                  </p>
                  <div className="flex items-center pt-10">
                    <img
                      src={testimonials[currentIndex].img}
                      alt={testimonials[currentIndex].name}
                      className="w-18 h-78 rounded-full"
                    />
                    <div className="pl-4">
                      <h4 className="text-size-22 font-semibold text-contentColor hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primaryColor">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-primaryColor">
                        {testimonials[currentIndex].from}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Slide controls */}
                <div className="absolute bottom-0 right-0 flex flex-row-reverse gap-0.5">
                  <button onClick={handlePrevious} className="">
                    <div class="static swiper-button-next w-15 h-15 bg-whiteColor text-blackColor transition-all duration-300 text-3xl hover:bg-primaryColor hover:text-whiteColor dark:hover:bg-secondaryColor after:hidden before:hidden">
                      <i class="icofont-long-arrow-right active"></i>
                    </div>
                  </button>
                  <button onClick={handleNext} className="">
                    <div class="static swiper-button-prev w-15 h-15 transition-all duration-300 bg-whiteColor text-blackColor text-3xl hover:bg-primaryColor hover:text-whiteColor dark:hover:bg-secondaryColor after:hidden before:hidden">
                      <i class="icofont-long-arrow-left"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Testimonial Right */}
            <div data-aos="fade-up">
              <div className="tilt pl-0 md:pl-70px">
                <img
                  src={img_test3}
                  alt="Testimonial group"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
