import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodeByComicId } from "../../redux/actions/episodeAction";
import { useParams, useHistory } from "react-router-dom";

const ListEpisode = (comic) => {
  const dispatch = useDispatch();
  const eps = useSelector((state) => state.episode.episodes);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getEpisodeByComicId(id, token));
  }, [dispatch, id, token]);

  console.log("episode =>", comic);

  return (
    <>
      <div className="list-episode-container">
        <div className="synopsis-list-wrapper">
          <div className="list-episode">
            <div className="list-episode-info-wrapper">
              <p>MANGALIME</p>
            </div>
            {eps.reverse().map((episode, i) => (
              <div className="episode-button" key={i}>
                <p>{episode.name}</p>
                <div className="episode-date-number">
                  <p>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(new Date(episode.created_at))}
                  </p>
                  <i>#{i + 1}</i>
                </div>
              </div>
            ))}
          </div>
          <div className="synopsis-list-episode">
            <h5>Synopsis</h5>
            <div className="comic-info-synopsis">
              <p className="synopsis-content">
                {comic.data === undefined ? "Loading..." : comic.data.synopsis}
              </p>
              <button>First Episode</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListEpisode;
