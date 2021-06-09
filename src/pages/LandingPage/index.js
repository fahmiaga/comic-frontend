import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import NewComic from "../../components/NewComic";
import Schedule from "../../components/Schedule";

const LandingPage = () => {
  useEffect(() => {
    document.title = "MANGALIME - Read Comics Online";
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron />
      <NewComic />
      <Schedule />
    </>
  );
};

export default LandingPage;
