import React from "react";
import logo from "../../assets/logo/logo.png";
import { useHistory } from "react-router-dom";
import { postLogout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  // const [active, setActive] = useState(false);

  // const handleActive = () => {
  //   setActive(false);
  // };
  const imgProfile =
    "http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg";

  let history = useHistory();

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userdata"));

  const handleLogout = () => {
    dispatch(postLogout(token));
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    history.push("/login");
    window.location.reload(true);
  };

  return (
    <>
      <div className="navbar-container">
        <img src={logo} alt="" onClick={() => history.push("/")} />
        <div className="search-navbar">
          <input type="text" placeholder="Search keyword..." />
          <i className="fas fa-search"></i>
        </div>
        <div className="link-list">
          <ul>
            <li onClick={() => history.push("/genres")}>Genres</li>
            <li onClick={() => history.push("/schedules")}>Schedules</li>
            <li>
              {/* <div className="dropdown"></div> */}
              <img
                src={
                  user.profile_image === "default.jpg"
                    ? imgProfile
                    : user.profile_image
                }
                alt=""
                className="dropdown-toggle"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => history.push("/update-profile")}
                  >
                    Update Profile
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* for mobile */}
        <div className="link-list-mobile">
          <div className="active-m">
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
