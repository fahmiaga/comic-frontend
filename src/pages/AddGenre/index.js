import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  addGenre,
  deleteGenre,
  putGenre,
} from "../../redux/actions/genreAction";
import Insert from "./insert";
import Update from "./update";

const AddGenre = () => {
  const genres = useSelector((state) => state.genre.genres);
  const message = useSelector((state) => state.genre.message);
  const token = localStorage.getItem("token");
  const [genre, setGenre] = useState("");
  const [bool, setBool] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(getAllGenres(token));
  }, []);

  const dispatch = useDispatch();

  const handleEdit = (data) => {
    setGenre(data.genre);
    setId(data.id);
    setBool(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteGenre(id, token));
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          {bool === true ? (
            <Update id={id} genre={genre} setBool={setBool} />
          ) : (
            <Insert />
          )}

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Genre</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{genre.genre}</td>
                  <td>
                    <button
                      className="badge bg-warning me-2"
                      onClick={() => handleEdit(genre)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="badge bg-danger"
                      onClick={() => handleDelete(genre.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default AddGenre;
