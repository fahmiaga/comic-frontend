import {
  POST_LOGIN,
  POST_REGISTER,
  POST_LOGOUT,
  GET_USER_PROFILE,
  POST_PROFILE,
} from "../actionsType";

const initialState = {
  signIn: "",
  message: "",
  user: "",
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
    case POST_LOGOUT:
      return {
        ...state,
        message: payload,
      };
    case POST_PROFILE:
      return {
        ...state,
        message: payload,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
