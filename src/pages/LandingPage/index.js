import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import NewComic from "../../components/NewComic";
import Schedule from "../../components/Schedule";
import Genres from "../../components/Genres";
import All from "../../components/All";
import Footer from "../../components/Footer";

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
      <Genres />
      <All />
      <Footer />
    </>
  );
};

export default LandingPage;
