import {
  GET_ALL_COMICS,
  POST_COMIC,
  GET_COMIC_BY_ID,
  GET_COMICS_BY_GENRE,
  POST_RATING,
  SEARCH_COMIC,
} from "../actionsType";

const initialState = {
  comics: [],
  comicsResult: [],
  comic: "",
  rating: "",
  message: "",
  comicG: [],
};

const comicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_COMICS:
      return {
        ...state,
        comics: payload,
      };
    case POST_COMIC:
      return {
        ...state,
        message: payload,
      };
    case GET_COMIC_BY_ID:
      return {
        ...state,
        comic: payload,
      };
    case GET_COMICS_BY_GENRE:
      return {
        ...state,
        comicG: payload,
      };
    case POST_RATING:
      return {
        ...state,
        rating: payload,
      };
    case SEARCH_COMIC:
      return {
        ...state,
        comicsResult: payload,
      };
    default:
      return state;
  }
};

export default comicReducer;
