import React from "react";
import logo from "../../assets/logo/logoflat.png";
import { useHistory } from "react-router-dom";

const ContentNavbar = () => {
  const history = useHistory();
  return (
    <>
      <div className="content-navbar-container">
        <img src={logo} alt="" onClick={() => history.push("/")} />
        <div className="comic-navigation-navbar">
          <button>
            <i class="fas fa-caret-left"></i>
          </button>
          <p>#01</p>
          <button>
            <i class="fas fa-caret-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentNavbar;
