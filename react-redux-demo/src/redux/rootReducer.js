import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
