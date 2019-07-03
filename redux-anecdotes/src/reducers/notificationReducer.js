import uuid from "uuid";

const initialState = [];

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return [...state, action.payload];
    case "REMOVE_NOTIFICATION":
      const newState = state.filter(
        notification => notification.id !== action.payload.id
      );
      return newState;
    default:
      return state;
  }
};

export const setNotification = (notification, duration = 5) => {
  return async dispatch => {
    const id = uuid();
    notification.id = id;
    dispatch({
      type: "SET_NOTIFICATION",
      payload: notification
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        payload: notification
      });
    }, duration * 1000);
  };
};

export default notificationReducer;
