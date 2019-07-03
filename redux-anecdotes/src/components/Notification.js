import React from "react";

const Notification = ({ store }) => {
  // const { notification } = store.getState();
  const notification = { message: "" };
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  if (notification.message.length === 0) return null;
  return <div style={style}>{notification.message}</div>;
};

export default Notification;
