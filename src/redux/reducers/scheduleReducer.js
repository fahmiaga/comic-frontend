import { GET_DAYS, GET_SCHEDULE } from "../actionsType";

const initialState = {
  days: [],
  comics: [],
};

const scheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DAYS:
      return {
        ...state,
        days: payload,
      };
    case GET_SCHEDULE:
      return {
        ...state,
        comics: payload,
      };

    default:
      return state;
  }
};

export default scheduleReducer;
