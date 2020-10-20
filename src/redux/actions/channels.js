import { SET_CHANNELS, ADD_CHANNEL } from "./actionTypes";
import instance from "./instance";

/* Channels
fetchChannels: gets a list of all channels. Requires authentication.
addChannel: creates a new channel. Requires authentication
            Expects a payload like this: {name: <NEW_CHANNEL_NAME>}
*/

export const fetchChannels = () => async (dispatch) => {
  try {
    const res = await instance.get("/channels/");
    const channels = res.data;
    dispatch({
      type: SET_CHANNELS,
      payload: channels,
    });
  } catch (error) {
    console.error(error);
    console.log("Channels couldn't be fetched");
  }
};

export const addChannel = (channelName) => async (dispatch) => {
  try {
    const res = await instance.post("channels/create/ ", channelName);
    const newChannel = res.data;
    dispatch({
      type: ADD_CHANNEL,
      payload: newChannel,
    });
  } catch (error) {
    console.error(error.response.data);
    console.log("Channel couldn't be created");
  }
};
