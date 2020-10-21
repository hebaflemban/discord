import { combineReducers } from "redux";

import authRes from "./authentication";
import channelsReducer from "./channels";
import messeges from "./messeges";

const rootReducer = combineReducers({
  authRes,
  channelsReducer,
  messeges,
});

export default rootReducer;
