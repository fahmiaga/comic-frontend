import { GET_COMMENT_BY_ID_EPISODE, POST_COMMENT } from "../actionsType";

const initialState = {
  comments: [],
  message: "",
};

const commentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENT_BY_ID_EPISODE:
      return {
        ...state,
        comments: payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
