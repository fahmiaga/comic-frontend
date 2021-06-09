import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(false);
  };

  return (
    <>
      <div className="navbar-container">
        <img src={logo} alt="" />
        <div className="link-list">
          <ul>
            <li>Genres</li>
            <li>All Comics</li>
            <li>
              <img
                src="http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
        {/* for mobile */}
        <div className="link-list-mobile">
          <div className="active">
            <i className="fas fa-home"></i>
          </div>
          <div className="">
            <i className="far fa-folder"></i>
          </div>
          <div className="">
            <i className="far fa-folder-open"></i>
          </div>
          <div className="">
            <i className="far fa-user"></i>
          </div>
          <div className="">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
