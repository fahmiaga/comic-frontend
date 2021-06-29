import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddComment } from "../../redux/actions/commentAction";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Input = () => {
  const [input, setInput] = useState({
    comment: "",
  });
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const message = useSelector((state) => state.comment.message);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(AddComment(id, input, token));
    setInput({
      comment: "",
    });
  };

  useEffect(() => {
    if (message.status === 201) {
      setDisable(false);
    }
  }, [message]);

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div className="post-comment-container">
          <input
            type="text"
            name="comment"
            placeholder="Leave a comment here..."
            onChange={handleChange}
            autoComplete="off"
            value={input.comment}
          />
          <button disabled={disable}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Input;
