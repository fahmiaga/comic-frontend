import React from "react";
import Sidebar from "../../components/Sidebar";
import AdminNavbar from "../../components/AdminNavbar";

const AddComic = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <p>comic container</p>
      </div>
      <Sidebar />
    </>
  );
};

export default AddComic;
