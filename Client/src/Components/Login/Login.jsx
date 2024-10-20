import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img_her2 from "../../assets/images/education/hero_shape2.png";
import img_her3 from "../../assets/images/education/hero_shape3.png";
import img_her4 from "../../assets/images/education/hero_shape4.png";
import img_her5 from "../../assets/images/education/hero_shape5.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [res, setRes] = useState();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      // Extract the user_token from response.data.data
      const { user_token } = response.data.data;

      // Check if the token exists
      if (!user_token) {
        setError("Login failed: No token received");
        return;
      }

      // Save the token to local storage
      // localStorage.setItem("authToken", user_token);
      localStorage.setItem("authToken", JSON.stringify(response.data.data));

      // Redirect to the dashboard or homepage after successful login

      // Optionally save the response for further use or debugging
      setRes(response.data);
    } catch (err) {
      // Handle errors, such as invalid credentials
      setError("Invalid email or password");
    }
  };
  console.log(res);
  return (
    <>
      <section className="relative">
        <div className="container py-100px">
          <div className="tab md:w-2/3 mx-auto">
            <div className="tab-links grid grid-cols-2 gap-11px text-black text-lg lg:text-size-22 font-semibold font-hind mb-43px mt-30px md:mt-0">
              <button className="py-9px lg:py-6 hover:text-primaryColor bg-lightGrey7 hover:bg-white relative group/btn shadow-bottom hover:shadow-bottom rounded-standard">
                <span className="absolute w-full h-1 bg-primaryColor top-0 left-0 group-hover/btn:w-full"></span>
                Login
              </button>
              <button className="py-9px lg:py-6 hover:text-primaryColor bg-contentColor hover:bg-white relative group/btn hover:shadow-bottom rounded-standard">
                <Link to="/create-account" className="hover:text-primaryColor">
                  Sign up
                </Link>
              </button>
            </div>

            <div className="shadow-container bg-lightGrey7 pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
              <div className="block opacity-100 transition-opacity duration-150 ease-linear">
                <div className="text-center">
                  <h3 className="text-size-32 font-bold text-blackColor mb-2 leading-normal">
                    Login
                  </h3>
                  <p className="text-contentColor mb-15px">
                    Don't have an account yet?
                    <Link
                      to="/create-account"
                      className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>

                <form className="pt-25px" onSubmit={handleLogin}>
                  <div className="mb-25px">
                    <label className="text-contentColor mb-10px block">
                      Username or email
                    </label>
                    <input
                      type="text"
                      placeholder="Your username or email"
                      className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor border border-contentColor placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-25px">
                    <label className="text-contentColor mb-10px block">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor border border-contentColor placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm mb-4">{error}</div>
                  )}

                  <div className="text-contentColor flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-18px h-18px mr-2 block box-content"
                      />
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>

                  <div className="my-25px text-center">
                    <button
                      type="submit"
                      className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group"
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            loading="lazy"
            className="absolute right-[14%] top-[30%] animate-move-var"
            src={img_her2}
            alt="Shape"
          />
          <img
            loading="lazy"
            className="absolute left-[5%] top-1/2 animate-move-hor"
            src={img_her3}
            alt="Shape"
          />
          <img
            loading="lazy"
            className="absolute left-1/2 bottom-[60px] animate-spin-slow"
            src={img_her4}
            alt="Shape"
          />
          <img
            loading="lazy"
            className="absolute left-1/2 top-10 animate-spin-slow"
            src={img_her5}
            alt="Shape"
          />
        </div>
      </section>
    </>
  );
}

export default Login;
