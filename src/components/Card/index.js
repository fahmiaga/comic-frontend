import React from "react";

const Card = (props) => {
  return (
    <div className="comic-card">
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
