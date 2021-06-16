import { GET_ALL_GENRES, POST_GENRE, PUT_GENRE } from "../actionsType";

const initialState = {
  genres: [],
  message: "",
};

const genreReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case POST_GENRE:
      return {
        ...state,
        message: payload,
      };
    case PUT_GENRE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
