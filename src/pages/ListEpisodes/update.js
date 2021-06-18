import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateEpisode } from "../../redux/actions/episodeAction";

const Update = ({ id, idepisode, name, setBool }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    name: name,
  });

  useEffect(() => {
    setInput({ name: name });
  }, [name]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateEpisode(id, idepisode, input, token));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-add-wrapper">
          <div className="input-group mb-3 mt-5 input-width">
            <span className="input-group-text" id="basic-addon1">
              Name
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="EpisodeName"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="name"
              onChange={handleChange}
              value={input.name}
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
