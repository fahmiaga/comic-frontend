import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getEpisodeByComicId } from "../../redux/actions/episodeAction";
import { deleteEpisode } from "../../redux/actions/episodeAction";
import { useParams } from "react-router-dom";
import Insert from "./insert";
import Update from "./update";

const ListEpisodes = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const episodes = useSelector((state) => state.episode.episodes);
  const [bool, setBool] = useState(false);
  const [name, setName] = useState("");
  const [idEpisode, setIdEpisode] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "List Episodes";
    dispatch(getEpisodeByComicId(id, token));
  }, [dispatch, id, token]);

  const handleEdit = (data) => {
    setName(data.name);
    setIdEpisode(data.id_episode);
    setBool(true);
  };

  const handleDelete = (idepisode) => {
    dispatch(deleteEpisode(id, idepisode, token));
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-comic-container">
        <div className="content-comic-container">
          {bool === true ? (
            <Update
              id={id}
              idepisode={idEpisode}
              name={name}
              setBool={setBool}
            />
          ) : (
            <Insert />
          )}

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {episodes === undefined
                ? "Loading..."
                : episodes.map((episode, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{episode.name}</td>
                      <td>
                        <div
                          className="badge bg-warning me-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleEdit(episode)}
                        >
                          <i className="fas fa-edit"></i>
                        </div>
                        <div
                          className="badge bg-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(episode.id_episode)}
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

export default ListEpisodes;
