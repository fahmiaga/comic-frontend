import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import GenrePage from "../../components/GenrePage";
import Footer from "../../components/Footer";

const Genres = () => {
  useEffect(() => {
    document.title = "Comics Genre";
  }, []);

  return (
    <>
      <Navbar />
      <GenrePage />
      <Footer />
    </>
  );
};

export default Genres;
