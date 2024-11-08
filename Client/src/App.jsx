import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/assets/js/counterup.js";
import "../src/assets/js/vanilla-tilt.js";
import "../src/assets/css/icofont.min.css";
import "../src/assets/css/popup.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/video-modal.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/style.css";

import Dashbord from "./Components/Admin/DashBord/Dashbord.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Page/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import AdminPage from "./Page/Admin/AdminPage.jsx";
import StudentDashBoard from "./Page/Student/StudentDashBoard.jsx";
import FirstYearQuarterOne from "./Page/Student/FirstYear/FirstYearQuarterOne.jsx";
import FirstYearQuarterTwo from "./Page/Student/FirstYear/FirstYearQuarterTwo.jsx";
import FirstYearQuarterThree from "./Page/Student/FirstYear/FirstYearQuarterThree.jsx";
import FirstYearQuarterFour from "./Page/Student/FirstYear/FirstYearQuarterFour.jsx";
import SecondYearQuarterOne from "./Page/Student/SecondYear/SecondYearQuarterOne.jsx";
import SecondYearQuarterTwo from "./Page/Student/SecondYear/SecondYearQuarterTwo.jsx";
import SecondYearQuarterThree from "./Page/Student/SecondYear/SecondYearQuarterThree.jsx";
import SecondYearQuarterFour from "./Page/Student/SecondYear/SecondYearQuarterFour.jsx";
import LoginPage from "./Page/LoginPage/LoginPage.jsx";
import CreateAccPage from "./Page/CreateAccoun/CreateAccPage.jsx";
import AdminAddEmployee from "./Page/Admin/AdminAddEmployee.jsx";
import AboutUsPage from "./Page/AboutUsPage/AboutUsPage.jsx";
import BibleSchoolPa from "./Page/BibleSchool/BibleSchoolPa.jsx";
import ContactUsPag from "./Page/ContactUs/ContactUsPag.jsx";
import UsersList from "./Page/Admin/UsersList.jsx";
import Video from "./Components/Admin/Video/Year1-Q1.jsx";
import YearlyContent from "./Components/Admin/VideoComponent/YearlyContent.jsx";
import Videos from "./Page/Admin/Videos.jsx";
import Year1Q2 from "./Components/Admin/Video/Year1Q2.jsx";
import Year1Q3 from "./Components/Admin/Video/Year1Q3.jsx";
import Year2Q1 from "./Components/Admin/Video/Year2Q1.jsx";
import Year2Q2 from "./Components/Admin/Video/Year2Q2.jsx";
import Year2Q3 from "./Components/Admin/Video/Year2Q3.jsx";
import UsersByQuarter from "./Components/Admin/Payment/Payment.jsx";
import Payment from "./Components/Admin/Payment/Payment.jsx";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <div className=" text-white">
        <Header />
        {/* <Home /> */}
        {/* <Dashbord /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPag />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bible-school" element={<BibleSchoolPa />} />
        <Route path="/create-account" element={<CreateAccPage />} />
        <Route path="/student-dashboard" element={<StudentDashBoard />} />
        <Route path="/admin-dashboard" element={<AdminPage />} />
        <Route path="/all-users/role" element={<UsersList />} />
        <Route path="/admin-employee" element={<AdminAddEmployee />} />
        <Route path="/admin-usersList" element={<UsersList />} />
        <Route path="/1st-year/quarter-1" element={<FirstYearQuarterOne />} />
        <Route path="/1st-year/quarter-2" element={<FirstYearQuarterTwo />} />
        <Route path="/1st-year/quarter-3" element={<FirstYearQuarterThree />} />
        <Route path="/1st-year/quarter-4" element={<FirstYearQuarterFour />} />
        <Route path="/2nd-year/quarter-1" element={<SecondYearQuarterOne />} />
        <Route path="/2nd-year/quarter-2" element={<SecondYearQuarterTwo />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/details/Year-One/Quarter-1" element={<Video />} />
        <Route path="/details/Year-One/Quarter-2" element={<Year1Q2 />} />
        <Route path="/details/Year-One/Quarter-3" element={<Year1Q3 />} />
        <Route path="/details/Year-Two/Quarter-1" element={<Year2Q1 />} />
        <Route path="/details/Year-Two/Quarter-2" element={<Year2Q2 />} />
        <Route path="/details/Year-Two/Quarter-3" element={<Year2Q3 />} />
        <Route path="/users" element={<UsersByQuarter />} />
        <Route path="/Payments" element={<Payment />} />
        <Route
          path="/2nd-year/quarter-3"
          element={<SecondYearQuarterThree />}
        />
        <Route path="/2nd-year/quarter-4" element={<SecondYearQuarterFour />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
