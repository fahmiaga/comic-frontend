import React, { useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getAllComics } from "../../redux/actions/comicAction";
import { useHistory } from "react-router-dom";

const AddContent = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const comics = useSelector((state) => state.comics.comics);
  const history = useHistory();

  useEffect(() => {
    document.title = "Add Content";
    dispatch(getAllComics(token));
  }, [dispatch, token]);

  // console.log(comics);

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
                            history.push(`/content-episodes/${comic.id}`)
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

export default AddContent;
