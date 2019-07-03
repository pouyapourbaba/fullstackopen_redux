import React from "react";
import { connect } from "react-redux";

const Notification = ({ notifications }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  // if (notifications[0].message.length === 0) return null;
  if (notifications.length === 0) return null;
  return notifications.map(notification => (
    <div key={notification.id} style={style}>
      {notification.message}
    </div>
  ));
};

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(mapStateToProps)(Notification);
