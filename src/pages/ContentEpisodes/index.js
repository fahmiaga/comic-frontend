import React, { useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getEpisodeByComicId } from "../../redux/actions/episodeAction";
import { useParams, useHistory } from "react-router-dom";

const ContentEpisode = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episode.episodes);
  const history = useHistory();

  useEffect(() => {
    document.title = "Content Episode";
    dispatch(getEpisodeByComicId(id, token));
  }, [dispatch, id, token]);

  return (
    <>
      <AdminNavbar />

      <div className="admin-comic-container">
        <div className="content-comic-container">
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
                          className="badge bg-primary me-2"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.push(`/list-content/${episode.id_episode}`)
                          }
                        >
                          <i className="fas fa-angle-double-right"></i>
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

export default ContentEpisode;
