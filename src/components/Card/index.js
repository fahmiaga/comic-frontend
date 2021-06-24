import React from "react";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();

  // console.log("comic", props);
  return (
    <div
      className="comic-card"
      onClick={() => history.push(`/comic-info/${props.id}`)}
    >
      <img src={props.image} alt="" />
      <div className="comic-title">
        <h6>{props.title}</h6>
      </div>
      <div className="overlay">
        <h6>{props.title}</h6>
        <p>{props.description.substring(0, 180)}</p>
      </div>
    </div>
  );
};

export default Card;
