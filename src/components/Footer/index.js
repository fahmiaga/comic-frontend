import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="footer-container">
        <div className="comic-footer">
          <p>Mangalime &copy; {year}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
