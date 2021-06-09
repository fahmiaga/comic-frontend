import React from "react";
import onepiece from "../../assets/background/one-piece.png";
import conan from "../../assets/background/conan.png";
import jojo from "../../assets/background/jojo.png";
import naruto from "../../assets/background/naruto.png";

const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="carousel-custom">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={onepiece}
                  className="d-block w-100 img-comic-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={conan}
                  className="d-block w-100 img-comic-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={jojo}
                  className="d-block w-100 img-comic-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={naruto}
                  className="d-block w-100 img-comic-carousel"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
