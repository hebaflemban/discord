import { SET_CHANNELS, ADD_CHANNEL, SELECT_CHANNEL } from "./actionTypes";
import {fetchMesseges} from './index'
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
    const data = { name: channelName };
    const res = await instance.post("channels/create/ ", data);
    const newChannel = res.data;
    console.log("channel has been added");

    dispatch({
      type: ADD_CHANNEL,
      payload: newChannel,
    });
  } catch (error) {
    console.error(error.response.data);
    console.log("Channel couldn't be created");
  }
};

// this one is to save the current channel ()
let interval = null;
export const selectChannel = (channel_id) => async (dispatch) => {
  clearInterval(interval);
  interval = setInterval(() => {
    dispatch(fetchMesseges(channel_id))
  }, 5000);
  return {
    type: SELECT_CHANNEL,
    payload: channel_id,
  };

};