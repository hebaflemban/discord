import { combineReducers } from "redux";

// Reducers
import user from "./authentication";
import channelsReducer from "./channels";
import messeges from "./messeges";

const rootReducer = combineReducers({
  user,
  channelsReducer,
  messeges,
});

export default rootReducer;
