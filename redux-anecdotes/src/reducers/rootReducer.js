import { combineReducers } from "redux";
import anecdoteReducer from "./anecdoteReducer";
import notificationReducer from "./notificationReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  filter: filterReducer
});

export default rootReducer;
