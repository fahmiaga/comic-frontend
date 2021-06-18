import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddEpisode } from "../../redux/actions/episodeAction";
import { useParams } from "react-router-dom";

const Insert = () => {
  useEffect(() => {
    document.title = "Add Genres";
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddEpisode(id, input, token));
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
              placeholder="Episode Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="name"
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
