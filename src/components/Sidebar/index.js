import React from "react";
import logo from "../../assets/logo/logo.png";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  let history = useHistory();

  return (
    <>
      <div className="admin-comic-sidebar">
        <img src={logo} alt="" />

        <div className="admin-list-wrapper">
          <div
            className="admin-list"
            onClick={() => history.push("/add-comic")}
          >
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
          <div className="admin-list">
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
          <div className="admin-list">
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
          <div className="admin-list">
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
          <div className="admin-list">
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
          <div className="admin-list">
            <i className="fas fa-database"></i> <p>Add Comic</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
