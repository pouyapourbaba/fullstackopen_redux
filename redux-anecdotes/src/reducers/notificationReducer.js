const initialState = {
  message: "I am a notification",
  type: ""
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      const { message, type } = action.payload;
      return { state, message: message, type: type };
    case "REMOVE_NOTIFICATION":
      return { state, message: "", type: "" };
    default:
      return state;
  }
};

export const setNotification = notification => {
  return {
    type: "SET_NOTIFICATION",
    payload: notification
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION"
  };
};

export default notificationReducer;
