import { POST_LOGIN, POST_REGISTER } from "../actionsType";

const initialState = {
  signIn: "",
  message: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_LOGIN:
      return {
        ...state,
        message: payload,
      };
    case POST_REGISTER:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
