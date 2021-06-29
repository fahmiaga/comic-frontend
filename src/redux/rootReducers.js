import { combineReducers } from "redux";
import comicReducer from "./reducers/comicReducer";
import authReducer from "./reducers/authReducer";
import genreReducer from "./reducers/genreReducer";
import episodeReducer from "./reducers/episodeReducer";
import contentReducer from "./reducers/contentReducer";
import scheduleReducer from "./reducers/scheduleReducer";
import commentReducer from "./reducers/commentReducer";

export default combineReducers({
  comics: comicReducer,
  user: authReducer,
  genre: genreReducer,
  episode: episodeReducer,
  content: contentReducer,
  day: scheduleReducer,
  comment: commentReducer,
});
