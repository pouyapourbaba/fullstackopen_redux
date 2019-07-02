const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export const setFilter = filter => {
  return {
    type: "SET_FILTER",
    payload: filter
  };
};

export default filterReducer;
