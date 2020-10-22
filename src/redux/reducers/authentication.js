import { LOGIN, SIGNUP, LOGOUT, ERROR, RESET } from "../actions/";

const initialState = {
  user: null,
  errorMessage: false,
  loading: true
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
        loading: false
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
