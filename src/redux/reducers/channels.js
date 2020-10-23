import { SET_CHANNELS, ADD_CHANNEL, SELECT_CHANNEL } from "../actions";

const initialState = {
  channels: [],
  current_channel: {},
  loading: true,
  localStorage: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHANNELS:
      const channels = payload;
      return {
        channels: channels,
        current_channel: state.current_channel,
        loading: false,
        localStorage: "",
      };

    case ADD_CHANNEL:
      const newChannel = payload;
      return {
        channels: [...state.channels, newChannel],
        current_channel: state.current_channel,
        loading: false,
        localStorage: "",
      };

    case SELECT_CHANNEL:
      const { channel_id, localStorage } = payload;
      const current_channel = state.channels.find(
        (channel) => channel.id === channel_id
      );
      return {
        ...state,
        current_channel,
        loading: false,
        localStorage,
      };

    default:
      return state;
  }
};

export default reducer;
