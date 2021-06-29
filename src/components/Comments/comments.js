import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentByIdEpisode } from "../../redux/actions/commentAction";
import { useParams } from "react-router-dom";
import defaultUser from "../../assets/img/defaultUser.jpg";

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getCommentByIdEpisode(id, token));
  }, [dispatch, id, token]);

  return (
    <>
      {comments
        .map((comment, i) => (
          <div className="comments-container" key={i}>
            <img
              src={
                comment.profile_image === "default.jpg"
                  ? defaultUser
                  : comment.profile_image
              }
              alt=""
            />
            <div className="user-comment">
              <p>
                {comment.name}{" "}
                <span>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(comment.created_at))}
                </span>
              </p>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))
        .reverse()}
    </>
  );
};

export default Comment;
