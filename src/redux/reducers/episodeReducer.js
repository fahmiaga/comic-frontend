import {
  GET_EPISODES_BY_COMIC_ID,
  POST_EPISODE,
  PUT_EPISODE,
} from "../actionsType";

const initialState = {
  episodes: [],
  message: "",
};

const episodeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EPISODES_BY_COMIC_ID:
      return {
        ...state,
        episodes: payload,
      };
    case POST_EPISODE:
      return {
        ...state,
        message: payload,
      };
    case PUT_EPISODE:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
};

export default episodeReducer;
