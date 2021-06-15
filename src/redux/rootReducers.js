import { combineReducers } from "redux";
import comicReducer from "./reducers/comicReducer";
import authReducer from "./reducers/authReducer";

export default combineReducers({
  comics: comicReducer,
  user: authReducer,
});
