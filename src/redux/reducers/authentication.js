import { LOGIN, SIGNUP, LOGOUT } from "../actions/";

const initialState = null;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
    case SIGNUP:
    case LOGOUT:
      return payload;
    default:
      return state;
  }
};

export default reducer;
