import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initailState = {};
const store = createStore(
  rootReducer,
  initailState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
