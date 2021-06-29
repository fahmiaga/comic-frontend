import React, { useEffect } from "react";
import Profile from "../../components/Profile";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UpdateProfie = () => {
  useEffect(() => {
    document.title = "Update Profile";
  }, []);

  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
};

export default UpdateProfie;
