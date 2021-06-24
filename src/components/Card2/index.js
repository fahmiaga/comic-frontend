import React from "react";
import { useHistory } from "react-router-dom";

const Card2 = (props) => {
  const history = useHistory();

  return (
    <>
      <div
        className="comic-card2"
        style={{ backgroundImage: `url(${props.image})` }}
        onClick={() => history.push(`/comic-info/${props.id}`)}
      >
        <div className="comic-card2-container">
          <div className="comic-card2-rating">
            <i className="fas fa-star"></i>
            <p>{props.rating}</p>
          </div>
          <div className="comic-information-container">
            <h4>{props.title}</h4>
            <p className="comic-genre">{props.genre}</p>

            <p className="comic-desc">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
