import { GET_ALL_COMICS, POST_COMIC, GET_COMIC_BY_ID } from "../actionsType";

const initialState = {
  comics: [],
  comic: "",
  message: "",
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
    default:
      return state;
  }
};

export default comicReducer;
