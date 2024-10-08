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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccPage />} />
        <Route path="/student-dashboard" element={<StudentDashBoard />} />
        <Route path="/admin-dashboard" element={<AdminPage />} />
        <Route path="/admin-employee" element={<AdminAddEmployee />} />
        <Route path="/1st-year/quarter-1" element={<FirstYearQuarterOne />} />
        <Route path="/1st-year/quarter-2" element={<FirstYearQuarterTwo />} />
        <Route path="/1st-year/quarter-3" element={<FirstYearQuarterThree />} />
        <Route path="/1st-year/quarter-4" element={<FirstYearQuarterFour />} />
        <Route path="/2nd-year/quarter-1" element={<SecondYearQuarterOne />} />
        <Route path="/2nd-year/quarter-2" element={<SecondYearQuarterTwo />} />
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
