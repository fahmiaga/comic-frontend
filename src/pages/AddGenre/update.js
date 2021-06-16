import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putGenre } from "../../redux/actions/genreAction";

const Update = ({ id, genre, setBool }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    genre: genre,
  });

  useEffect(() => {
    setInput({ genre: genre });
  }, [genre]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putGenre(id, input, token));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-add-wrapper">
          <div className="input-group mb-3 mt-5 input-width">
            <span className="input-group-text" id="basic-addon1">
              Genre
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Genre"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="genre"
              onChange={handleChange}
              value={input.genre}
            />
          </div>
          <button
            className="btn btn-primary mt-3"
            style={{
              height: "40px",
              marginLeft: "5px",
            }}
          >
            Update
          </button>
        </div>
        <button
          className="btn btn-danger "
          style={{
            height: "40px",
            marginLeft: "5px",
          }}
          onClick={() => setBool(false)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default Update;
