import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SchedulePage from "../../components/SchedulePage";

const Schedules = () => {
  useEffect(() => {
    document.title = "Comic Schedules";
  }, []);
  return (
    <>
      <Navbar />
      <SchedulePage />
      <Footer />
    </>
  );
};

export default Schedules;
