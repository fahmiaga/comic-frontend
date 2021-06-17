import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import AdminNavbar from "../../components/AdminNavbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllComics, deleteComic } from "../../redux/actions/comicAction";
import { useHistory } from "react-router-dom";

const AddComic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const comics = useSelector((state) => state.comics.comics);
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.title = "Add Comic";
    dispatch(getAllComics(token));
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteComic(id, token));
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <button
            className="btn btn-primary mb-2"
            onClick={() => history.push("/form-add-comic")}
          >
            Add New Comic
          </button>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {comics === undefined
                ? "Loading.."
                : comics.map((comic, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{comic.title}</td>
                      <td>{comic.genre}</td>
                      <td>
                        <div
                          className="badge bg-warning me-2"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.push(`/comic-edit-form/${comic.id}`)
                          }
                        >
                          <i className="fas fa-edit"></i>
                        </div>
                        <div
                          className="badge bg-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(comic.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </div>
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

export default AddComic;
