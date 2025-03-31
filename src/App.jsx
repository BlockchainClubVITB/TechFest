import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Hidden from "../src/components/Hidden/Hidden";
import MainEvents from "./components/MainEvents/MainEvents";
import Homepage from "./pages/Homepage";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import AboutPage from "./pages/AboutPage";
import Register from "./components/common/Register/Register";
import ContactUs from "./components/ContactUs/ContactUs";
import Loading from "./components/common/Loading/Loading";
import Popup from "./components/common/Popup/Popup";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-257375779-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3900);
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Popup />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<MainEvents />} />
            <Route path="/events/:eventId" element={<SingleEventPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/hidden" element={<Hidden />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
