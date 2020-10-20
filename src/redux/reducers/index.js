import { combineReducers } from "redux";

// Reducers
import authRes from "./authentication";
import channels from "./channels";
import messeges from "./messeges";

const rootReducer = combineReducers({
  authRes,
  channels,
  messeges,
});

export default rootReducer;
