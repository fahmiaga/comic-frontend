import React, { useEffect } from "react";
import Card2 from "../../components/Card2";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../../redux/actions/genreAction";
import { getComicByGenre } from "../../redux/actions/comicAction";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const GenrePage = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const comics = useSelector((state) => state.comics.comicG);
  // const comicAll =
  const [active, setActive] = useState("");
  const location = useLocation();
  const states = location.state === undefined ? "Comedy" : location.state;

  useEffect(() => {
    dispatch(getAllGenres(token));
    dispatch(getComicByGenre(states, token));
  }, [dispatch, states, token]);

  const handleClick = (genre) => {
    dispatch(getComicByGenre(genre, token));
    setActive(genre);
  };
  // console.log("genress =>", states);

  return (
    <>
      <div className="comic-genre-page-container">
        <div className="comic-genre-page">
          {/* <div className="genre-button">All</div> */}
          {genres.map((genre, i) => (
            <div
              className={
                active === genre.genre
                  ? "genre-button genre-active"
                  : "genre-button"
              }
              key={i}
              onClick={() => handleClick(genre.genre)}
            >
              {genre.genre}
            </div>
          ))}
        </div>
        <div className="comics-genre-page">
          {comics.reverse().map((comic, i) => (
            <Card2
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
    </>
  );
};

export default GenrePage;
