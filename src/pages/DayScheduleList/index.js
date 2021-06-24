import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  getSchedule,
  addSchedule,
  deleteSchedule,
} from "../../redux/actions/scheduleAction";
import { useParams } from "react-router-dom";
import { getAllComics } from "../../redux/actions/comicAction";

const DayScheduleList = () => {
  const dispatch = useDispatch();
  const schedules = useSelector((state) => state.day.comics);
  const comics = useSelector((state) => state.comics.comics);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(false);
  const [comicId, setComicId] = useState({
    id_comic: "",
  });

  useEffect(() => {
    document.title = "Schedules";
    dispatch(getSchedule(id, token));
    dispatch(getAllComics(token));
  }, [dispatch, id, token]);

  const handleDelete = (idSchedule) => {
    dispatch(deleteSchedule(id, idSchedule, token));
  };

  const handleChange = (e) => {
    setHidden(false);
    setInput(([e.target.name] = e.target.value));
  };

  const handleCLick = (id, title) => {
    // setTitle(title);
    setInput(title);
    setComicId({
      id_comic: id,
    });
    setHidden(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSchedule(id, comicId, token));
    setInput("");
  };

  // console.log(comicId);
  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-auto search-container">
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="input keyword..."
                name="title"
                onChange={handleChange}
                autoComplete="off"
                value={input}
              />
              <input type="hidden" name="id_comic" value={input.id_comic} />
              <div
                className={
                  hidden === true
                    ? "auto-container hidden-container"
                    : "auto-container"
                }
              >
                {input === ""
                  ? ""
                  : comics
                      .filter((filter) =>
                        filter.title.toLowerCase().includes(input.toLowerCase())
                      )
                      .map((comic, i) => (
                        <div
                          className="auto-item-wrapper"
                          key={i}
                          onClick={() => handleCLick(comic.id, comic.title)}
                        >
                          <p>{comic.title}</p>
                          <img src={comic.comic_image} alt="" />
                        </div>
                      ))}
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </form>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {schedules === undefined
                ? "Loading..."
                : schedules.map((schedule, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{schedule.title}</td>
                      <td>
                        <button
                          className="badge bg-danger"
                          onClick={() => handleDelete(schedule.id_schedule)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
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

export default DayScheduleList;
