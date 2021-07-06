import React from "react";

const AdminNavbar = () => {
  const user = JSON.parse(localStorage.getItem("userdata"));
  const imgProfile =
    "http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg";
  const name = user.name;

  return (
    <>
      <div className="admin-comic-navbar">
        <div className="admin-navbar-list">
          <p>{name.split(" ").slice(0, 2).join(" ")}</p>
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
              <button className="dropdown-item" type="button">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
