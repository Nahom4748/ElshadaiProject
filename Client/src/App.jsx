import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "../src/assets/js/counterup.js";
import "../src/assets/js/vanilla-tilt.js";
import "../src/assets/css/icofont.min.css";
import "../src/assets/css/popup.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/video-modal.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/style.css";

import Header from "./Components/Header/Header.jsx";
import Home from "./Page/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import AdminPage from "./Page/Admin/AdminPage.jsx";
import StudentDashBoard from "./Page/Student/StudentDashBoard.jsx";
import FirstYearQuarterOne from "./Page/Student/FirstYear/FirstYearQuarterOne.jsx";
import FirstYearQuarterTwo from "./Page/Student/FirstYear/FirstYearQuarterTwo.jsx";
import FirstYearQuarterThree from "./Page/Student/FirstYear/FirstYearQuarterThree.jsx";

import SecondYearQuarterOne from "./Page/Student/SecondYear/SecondYearQuarterOne.jsx";
import SecondYearQuarterTwo from "./Page/Student/SecondYear/SecondYearQuarterTwo.jsx";
import SecondYearQuarterThree from "./Page/Student/SecondYear/SecondYearQuarterThree.jsx";

import LoginPage from "./Page/LoginPage/LoginPage.jsx";
import CreateAccPage from "./Page/CreateAccoun/CreateAccPage.jsx";
import AdminAddEmployee from "./Page/Admin/AdminAddEmployee.jsx";
import AboutUsPage from "./Page/AboutUsPage/AboutUsPage.jsx";
import BibleSchoolPa from "./Page/BibleSchool/BibleSchoolPa.jsx";
import ContactUsPag from "./Page/ContactUs/ContactUsPag.jsx";
import UsersList from "./Page/Admin/UsersList.jsx";
import Video from "./Components/Admin/Video/Year1-Q1.jsx";
import Videos from "./Page/Admin/Videos.jsx";
import Year1Q2 from "./Components/Admin/Video/Year1Q2.jsx";
import Year1Q3 from "./Components/Admin/Video/Year1Q3.jsx";
import Year2Q1 from "./Components/Admin/Video/Year2Q1.jsx";
import Year2Q2 from "./Components/Admin/Video/Year2Q2.jsx";
import Year2Q3 from "./Components/Admin/Video/Year2Q3.jsx";
import UsersByQuarter from "./Components/Admin/Payment/Payment.jsx";
import Payment from "./Components/Admin/Payment/Payment.jsx";
import YearlyDocuments from "./Components/Admin/DocumentsComponent/DocumentsComponent.jsx";

import RequestPasswordReset from "./Page/RequestPasswordReset/RequestPasswordReset.jsx";
import ResetPassword from "./Page/ResetPassword/ResetPassword.jsx";
import PartnerVideo from "./Components/Admin/PartnerVideo/PartnerVideo.jsx";
import Partner from "./Page/Partner/Partner.jsx";
import { useAuth } from "./Contexts/AuthContext.jsx";
import PrivateAuthRoute from "../Auth/PrivateAuthRoute.jsx";

function App() {
  const { userType, isLogged, user } = useAuth();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      {!isLogged && (
        <div className=" text-white">
          <Header />
        </div>
      )}

      <Routes>
        {!isLogged ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPag />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset-password" element={<RequestPasswordReset />} />
            <Route path="/reset/:token" element={<ResetPassword />} />
            <Route path="/bible-school" element={<BibleSchoolPa />} />
            <Route path="/create-account" element={<CreateAccPage />} />
          </>
        ) : (
          <>
            <Route element={<PrivateAuthRoute />}>
              {user?.user_role == 2 || user?.user_role == 4 ? (
                <>
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                    path="/"
                    element={<Navigate to="/student-dashboard" />}
                  />
                  <Route
                    path="/student-dashboard"
                    element={<StudentDashBoard />}
                  />

                  <Route
                    path="/api/quarter1/videos"
                    element={<FirstYearQuarterOne />}
                  />
                  <Route
                    path="/api/quarter2/videos"
                    element={<FirstYearQuarterTwo />}
                  />
                  <Route
                    path="/api/quarter3/videos"
                    element={<FirstYearQuarterThree />}
                  />

                  <Route
                    path="/api/y2-quarter1/videos"
                    element={<SecondYearQuarterOne />}
                  />
                  <Route
                    path="/api/y2-quarter2/videos"
                    element={<SecondYearQuarterTwo />}
                  />
                  <Route
                    path="/api/y2-quarter3/videos"
                    element={<SecondYearQuarterThree />}
                  />
                </>
              ) : (
                <>
                  {user?.user_role == 1 ? (
                    <>
                      <Route path="/login" element={<LoginPage />} />

                      <Route
                        path="/"
                        element={<Navigate to="/admin-dashboard" />}
                      />
                      <Route path="/admin-dashboard" element={<AdminPage />} />
                      <Route path="/all-users/role" element={<UsersList />} />
                      <Route
                        path="/admin-employee"
                        element={<AdminAddEmployee />}
                      />
                      <Route path="/admin-usersList" element={<UsersList />} />
                      <Route path="/videos" element={<Videos />} />
                      <Route
                        path="/details/Year-One/Quarter-1"
                        element={<Video />}
                      />
                      <Route
                        path="/details/Year-One/Quarter-2"
                        element={<Year1Q2 />}
                      />
                      <Route
                        path="/details/Year-One/Quarter-3"
                        element={<Year1Q3 />}
                      />
                      <Route
                        path="/details/Year-Two/Quarter-1"
                        element={<Year2Q1 />}
                      />
                      <Route
                        path="/details/Year-Two/Quarter-2"
                        element={<Year2Q2 />}
                      />
                      <Route
                        path="/details/Year-Two/Quarter-3"
                        element={<Year2Q3 />}
                      />
                      <Route
                        path="/details/Year-One/Document-1"
                        element={<YearlyDocuments />}
                      />
                      <Route path="/users" element={<UsersByQuarter />} />
                      <Route path="/Partners" element={<PartnerVideo />} />
                      <Route path="/Payments" element={<Payment />} />
                      <Route
                        path="/api/partners/videos"
                        element={<Partner />}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </Route>
          </>
        )}
      </Routes>
      {!isLogged && <Footer />}
    </Router>
  );
}

export default App;
