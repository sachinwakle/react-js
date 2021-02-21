import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
// store.subscribe(() => console.log("Updated State", store.getState()));

export default store;
