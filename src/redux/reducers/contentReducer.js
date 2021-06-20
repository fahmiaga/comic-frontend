import {
  GET_CONTENT_BY_ID_EPISODE,
  POST_CONTENT,
  PUT_CONTENT,
} from "../actionsType";

const initialState = {
  contents: [],
  message: "",
};

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTENT_BY_ID_EPISODE:
      return {
        ...state,
        contents: payload,
      };
    case POST_CONTENT:
      return {
        ...state,
        message: payload,
      };
    case PUT_CONTENT:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
