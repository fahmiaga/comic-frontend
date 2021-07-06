import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchComic } from "../../redux/actions/comicAction";
import Card2 from "../Card2";

const SearchResult = ({ input }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchComic(input, token));
  }, [dispatch, token, input]);

  const comics = useSelector((state) => state.comics.comicsResult);

  return (
    <>
      <div className="search-result-container">
        <div className="search-result">
          {comics.map((comic, i) => (
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

export default SearchResult;
