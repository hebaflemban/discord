import { LOGIN, SIGNUP, LOGOUT, ERROR, RESET } from "../actions/";

const initialState = {
  user: null,
  errorMessage: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
    case SIGNUP:
    case LOGOUT:
      return {
        ...state,
        user: payload,
        errorMessage: false,
      };

    case ERROR:
      return { ...state, user: null, errorMessage: payload };
    case RESET:
      return { user: null, errorMessage: false };
    default:
      return state;
  }
};

export default reducer;
