import { combineReducers } from "redux";

// Reducers
import user from "./authentication";
import channels from "./channels";
import messeges from "./messeges";

const rootReducer = combineReducers({
  user,
  channels,
  messeges,
});

export default rootReducer;
