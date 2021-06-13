import React from "react";

const Card2 = (comic) => {
  //   console.log(comic);
  return (
    <>
      <div
        className="comic-card2"
        style={{ backgroundImage: `url(${comic.image})` }}
      >
        <div className="comic-card2-container">
          <div className="comic-card2-rating">
            <i className="fas fa-star"></i>
            <p>{comic.rating}</p>
          </div>
          <div className="comic-information-container">
            <h4>{comic.title}</h4>
            <p className="comic-genre">{comic.genre}</p>

            <p className="comic-desc">{comic.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
