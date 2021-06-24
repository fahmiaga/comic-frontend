import React, { useEffect } from "react";
import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres } from "../../redux/actions/genreAction";
import { getComicByGenre } from "../../redux/actions/comicAction";
import { useHistory } from "react-router-dom";

const Genres = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genre.genres);
  const comics = useSelector((state) => state.comics.comicG);
  const token = localStorage.getItem("token");
  const indexGenre = Math.floor(Math.random() * genre.length);
  const indexGenre2 = Math.floor(Math.random() * genre.length);
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const comicGenre =
    genre[indexGenre] === undefined ? "Action" : genre[indexGenre].genre;

  useEffect(() => {
    dispatch(getAllGenres(token));
    dispatch(getComicByGenre(comicGenre, token));
  }, [dispatch, token]);

  // console.log("comics =>", comics);
  // console.log("gnre =>", comicGenre);

  return (
    <>
      <div className="genres-container">
        <div className="comic-title-section">
          <i className="fas fa-stethoscope"></i>
          <h5>COMICS GENRES</h5>
        </div>
        <div className="comic-genres">
          <div
            className="genres-card1"
            style={{ backgroundColor: `rgb(${r},${g},${b})` }}
            onClick={() =>
              history.push({
                pathname: "/genres",
                state: comicGenre,
              })
            }
          >
            <div className="genres-title">
              <h5>
                {genre[indexGenre] === undefined
                  ? "loading..."
                  : genre[indexGenre].genre}
              </h5>
              <p>&gt;</p>
            </div>
            <div className="genres-wise">
              <p>Good Laughter is all we need</p>
            </div>
          </div>
          <div className="new-comic-genres">
            {comics.slice(0, 3).map((comic, i) => (
              <Card
                key={i}
                title={comic.title}
                description={comic.synopsis}
                image={comic.comic_image}
                genre={comic.genre}
                rating={comic.rating}
                id={comic.id}
              />
            ))}
          </div>
        </div>
        <div className="comic-genres">
          <div
            className="genres-card2"
            style={{ backgroundColor: `rgb(${g},${b},${r})` }}
            onClick={() =>
              history.push({
                pathname: "/genres",
                state: comicGenre,
              })
            }
          >
            <div className="genres-title">
              <h5>
                {genre[indexGenre2] === undefined
                  ? "loading..."
                  : genre[indexGenre2].genre}
              </h5>
              <p>&gt;</p>
            </div>
            <div className="genres-wise">
              <p>Sometimes you need to get your adrenaline pumping</p>
            </div>
          </div>
          <div className="new-comic-genres">
            {comics
              .slice(0, 4)
              .reverse()
              .map((comic, i) => (
                <Card
                  key={i}
                  title={comic.title}
                  description={comic.synopsis}
                  image={comic.comic_image}
                  genre={comic.genre}
                  rating={comic.rating}
                  id={comic.id}
                />
              ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Genres;
