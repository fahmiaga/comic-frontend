import React, { useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getContentByIdEpisode,
  deleteImage,
} from "../../redux/actions/contentAction";
import { useParams, useHistory } from "react-router-dom";

const ListContent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const contents = useSelector((state) => state.content.contents);
  const history = useHistory();

  useEffect(() => {
    document.title = "List Content";
    dispatch(getContentByIdEpisode(id, token));
  }, [dispatch, id, token]);

  const handleDelete = (id_image) => {
    dispatch(deleteImage(id_image, id, token));
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <button
            className="btn btn-primary mb-2"
            onClick={() => history.push(`/form-add-content/${id}`)}
          >
            Add Content
          </button>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contents === undefined
                ? "Loading..."
                : contents.map((content, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>
                        <img
                          src={content.image}
                          alt=""
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="badge bg-warning me-2"
                          onClick={() =>
                            history.push(`/edit-content/${content.id}`)
                          }
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="badge bg-danger"
                          onClick={() => handleDelete(content.id)}
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

export default ListContent;
