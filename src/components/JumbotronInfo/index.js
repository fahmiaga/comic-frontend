import React, { useState } from "react";
import loading from "../../assets/logo/loading.gif";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "../../redux/actions/comicAction";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const JumbotronInfo = (props) => {
  const comic = props.data === undefined ? loading : props.data;
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [alert, setAlert] = useState(false);
  const [input, setInput] = useState({
    rating: "",
  });

  const starRating = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    // color: "blue",
    // activeColor: "red",
    onChange: (value) => {
      setInput({
        rating: value,
      });
    },
  };
  const dispatch = useDispatch();
  const message = useSelector((state) => state.comics.rating);

  const handleClick = () => {
    dispatch(addRating(id, input, token));
  };

  useEffect(() => {
    if (message.status === 405 || message.status === 422) {
      setAlert(true);
    }
    if (message.status === 201) {
      NotificationManager.success("", "Rating successfully added", 3000);
    }
  }, [message]);

  // console.log(message.status);

  return (
    <>
      <div
        className="jumbotron-info-container"
        style={{
          backgroundImage: `url(${comic.drop_image})`,
          backgroundSize: "cover",
        }}
      >
        <p>{comic.genre}</p>
        <h1>{comic.title}</h1>
        <p className="comic-rating">
          <i className="fas fa-star"></i> {comic.rating}
          &nbsp;<button onClick={() => setModal(true)}>Rate</button>
        </p>
        <div className="comic-info-synopsis">
          <p>
            {comic.synopsis === undefined
              ? ""
              : comic.synopsis.substring(0, 100)}
            &nbsp;
            <i className="fas fa-sort-down" onClick={() => setActive(true)}></i>
          </p>
          <div
            className="synopsis-detail"
            style={active === true ? { display: "block" } : { display: "none" }}
          >
            <i className="fas fa-times" onClick={() => setActive(false)}></i>
            <p>{comic.synopsis}</p>
          </div>
        </div>
      </div>
      {modal === false ? (
        ""
      ) : (
        <div className="modal-rate">
          <div className="rating-container">
            {alert === false ? (
              ""
            ) : (
              <i style={{ color: "red" }}>{message.message.message}</i>
            )}
            <div className="star-rate">
              <ReactStars {...starRating} />
              <i>Click star to give a rate</i>
            </div>
            <button onClick={handleClick} className="rate-button-submit">
              Submit
            </button>
            <button
              className="rate-button-cancel"
              onClick={() => {
                setModal(false);
                setAlert(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <NotificationContainer />
    </>
  );
};

export default JumbotronInfo;
