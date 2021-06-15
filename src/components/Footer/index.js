import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="comic-footer">
        <p>Mangalime &copy; {year}</p>
      </div>
    </>
  );
};

export default Footer;
