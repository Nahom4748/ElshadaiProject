import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" text-white">
      <Header />
      <Dashbord />
    </div>
  );
}

export default App;
