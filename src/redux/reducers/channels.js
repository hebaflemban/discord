import { SET_CHANNELS, ADD_CHANNEL } from "../actions";

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHANNELS:
      const channels = payload;
      return channels;

    case ADD_CHANNEL:
      const newChannel = payload;
      return [...state, newChannel];

    default:
      return state;
  }
};

export default reducer;
