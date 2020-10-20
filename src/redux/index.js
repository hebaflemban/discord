import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// Actions
import { fetchChannels, fetchMesseges, isTokenValid } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(isTokenValid());

if (store.dispatch(isTokenValid()))
  console.log("the res", store.dispatch(isTokenValid()));
store.dispatch(fetchChannels());
store.dispatch(fetchMesseges(828));

export default store;
