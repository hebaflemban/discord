import { combineReducers } from "redux";

import authRes from "./authentication";
import channelsReducer from "./channels";
import messegesReducer from "./messeges";

const rootReducer = combineReducers({
  authRes,
  channelsReducer,
  messegesReducer,
});

export default rootReducer;
