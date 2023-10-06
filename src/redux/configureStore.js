import { combineReducers, createStore } from "redux";
import friendReducer from "./ducks/reducer";

const reducer = combineReducers({
  friend: friendReducer,
});

const store = createStore(reducer);

export default store;
