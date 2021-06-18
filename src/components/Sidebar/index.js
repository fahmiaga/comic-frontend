import React from "react";
import logo from "../../assets/logo/logo.png";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  let history = useHistory();

  return (
    <>
      <div className="admin-comic-sidebar">
        <img
          src={logo}
          alt=""
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
        />

        <div className="admin-list-wrapper">
          <div
            className="admin-list"
            onClick={() => history.push("/add-comic")}
          >
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
          <div
            className="admin-list"
            onClick={() => history.push("/add-genre")}
          >
            <i className="fas fa-stethoscope"></i> <p>Add Genre</p>
          </div>
          <div
            className="admin-list"
            onClick={() => history.push("/add-episodes")}
          >
            <i className="fab fa-buffer"></i> <p>Add Episodes</p>
          </div>
          <div className="admin-list">
            <i className="far fa-calendar-alt"></i> <p>Add Schedule</p>
          </div>
          <div className="admin-list">
            <i className="far fa-images"></i> <p>Add Content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
