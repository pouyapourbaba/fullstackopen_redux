import { combineReducers } from "redux";
import anecdoteReducer, {initializeAnecdotes} from "./anecdoteReducer";
import notificationReducer from "./notificationReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
});

export default rootReducer;
