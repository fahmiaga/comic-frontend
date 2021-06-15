const initialState = {
  comics: [],
};

const comicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_COMICS":
      return {
        ...state,
        comics: payload,
      };
    default:
      return state;
  }
};

export default comicReducer;
