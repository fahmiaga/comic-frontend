import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addGenre } from "../../redux/actions/genreAction";

const Insert = () => {
  useEffect(() => {
    document.title = "Add Genres";
  }, []);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    genre: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGenre(input, token));
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
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
            />
          </div>
          <button
            className="btn btn-primary mt-3"
            style={{
              height: "40px",
              marginLeft: "5px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Insert;
