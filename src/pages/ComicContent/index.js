import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContentByIdEpisode } from "../../redux/actions/contentAction";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments";
import ContentNavbar from "../../components/ContentNavbar";

const ComicContent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const contents = useSelector((state) => state.content.contents);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    dispatch(getContentByIdEpisode(id, token));
  }, [dispatch, id, token]);

  const handelClick = () => {
    setHide(!hide);
  };

  return (
    <>
      <div
        className="hide-navbar"
        style={
          hide === true
            ? { opacity: "0", transition: "0.3s" }
            : { opacity: "1", transition: "0.3s" }
        }
      >
        <ContentNavbar />
      </div>
      <div className="content-comic-container" onClick={handelClick}>
        {contents.map((content, i) => (
          <img key={i} src={content.image} alt="" />
        ))}
      </div>
      <Comments />
    </>
  );
};

export default ComicContent;
