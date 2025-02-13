import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/ELSHADIA.png";
function Footer() {
  return (
    <footer className="bg-darkblack text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Subscription Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 pb-8 border-b border-gray-700">
          <div data-aos="fade-up">
            <h4 className="text-2xl md:text-3xl font-bold leading-tight">
              Still Need Our <span className="text-primaryColor">Support</span>?
            </h4>
            <p className="text-white text-opacity-75 mt-2">
              Don’t wait! Make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <div data-aos="fade-up">
            <form className="bg-gray-800 rounded-md flex overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-white bg-transparent border-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primaryColor hover:bg-gray-700 px-5 py-3 text-white transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Footer Main Section */}
        {/* Footer Main Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr_1fr] gap-8 py-10">
          {/* About Us */}
          <div
            data-aos="fade-up"
            className=" md:col-span-6 lg:col-span-1 pl-0 lg:pr-16"
          >
            {" "}
            {/* Add padding to the right to create space */}
            <h4 className="text-xl font-bold mb-3">About Us</h4>
            <p className="text-gray-400 leading-relaxed">
              Our website has become an essential tool in spreading the message
              of the Gospel. It allows us to reach people worldwide, breaking
              barriers and uniting believers in their spiritual growth.
            </p>
            <div className="flex items-center mt-4">
              <div className="bg-primaryColor p-3 rounded-full text-center">
                <i className="icofont-clock-time text-2xl text-white"></i>
              </div>
              <div className="ml-4">
                <h6 className="text-lg font-medium">OPENING HOURS</h6>
                <p className="text-sm text-gray-400">
                  Tue 9:00 PM ET - USA, Canada
                </p>
                <p className="text-sm text-gray-400">
                  Tue 8:00 PM Berlin - Europe
                </p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div
            data-aos="fade-up"
            className="col-span-6  md:col-span-1 lg:col-span-1 lg:pl-250px"
          >
            <h4 className="text-xl font-bold mb-3 ">Useful Links</h4>
            <ul className="space-y-2 ">
              {[
                "Home",
                "About Us",
                "Bible School",
                "Partners",
                "Contact Us",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-primaryColor transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32" />
          </Link>
          <p className="text-sm text-gray-400 text-center md:text-left mt-4 md:mt-0">
            Copyright © <span className="text-primaryColor">2025</span> by
            Elshaddai Apostolic Mission.
            <a
              href="https://any-tech-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryColor hover:text-white transition ml-2"
            >
              Designed By AnyTech
            </a>
          </p>
          <ul className="flex gap-3 mt-4 md:mt-0">
            {["facebook", "twitter", "vimeo", "linkedin", "skype"].map(
              (icon, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 hover:bg-primaryColor text-white rounded-full transition"
                  >
                    <i className={`icofont-${icon}`}></i>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
