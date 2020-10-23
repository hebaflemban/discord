import { SET_MESSEGES, UPDATE_MESSEGES, SEND, RESET } from "../actions";

const initialState = {
  messeges: [],
  loading: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSEGES:
      const messeges = payload;
      return {
        messeges,
        loading: false,
      };

    case UPDATE_MESSEGES:
      return {
        messeges: payload,
        loading: false,
      };

    case SEND:
      const newMessege = payload;
      return {
        ...state,
        messeges: [...state.messeges, newMessege],
      };
    case RESET:
      return {
        ...state,
        laoding: true,
      };

    default:
      return state;
  }
};

export default reducer;
