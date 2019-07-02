import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

render();
store.subscribe(render);
