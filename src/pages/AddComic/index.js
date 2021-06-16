import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import AdminNavbar from "../../components/AdminNavbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllComics } from "../../redux/actions/comicAction";
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

  console.log("komikk", comics);

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
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default AddComic;
