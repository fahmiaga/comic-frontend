import { combineReducers } from "redux";
import comicReducer from "./reducers/comicReducer";
import authReducer from "./reducers/authReducer";
import genreReducer from "./reducers/genreReducer";
import episodeReducer from "./reducers/episodeReducer";

export default combineReducers({
  comics: comicReducer,
  user: authReducer,
  genre: genreReducer,
  episode: episodeReducer,
});
