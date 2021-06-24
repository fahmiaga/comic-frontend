import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComics } from "../../redux/actions/comicAction";
import { useHistory } from "react-router-dom";

const AddEpisodes = () => {
  const token = localStorage.getItem("token");
  const comics = useSelector((state) => state.comics.comics);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Add Episodes";
    dispatch(getAllComics(token));
  }, [dispatch, token]);

  // const handleDelete = () => {};

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
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
                          className="badge bg-info me-2"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.push(`/list-episodes/${comic.id}`)
                          }
                        >
                          <i className="fas fa-info-circle"></i>
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

export default AddEpisodes;
