import { SET_MESSEGES, UPDATE_MESSEGES, SEND } from "../actions";

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSEGES:
      const messeges = payload;
      return messeges;

    case UPDATE_MESSEGES:
      return payload;

    case SEND:
      const newMessege = payload;
      return [...state, newMessege];

    default:
      return state;
  }
};

export default reducer;
