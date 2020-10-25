import {
  SET_MESSEGES,
  UPDATE_MESSEGES,
  SEND,
  RESET_LOADING,
} from "./actionTypes";
import instance from "./instance";

/* Messeges
fetchMesseges: gets all the messages in a specific channel. Requires authentication.
updateMesseges: gets only the messages in a specific channel that are after a specific timestamp. 
Requires authentication.
send: sends a message to a specific channel. Requires authentication
      Expects a payload like this: {message: <MESSAGE_TEXT>}
*/

export const fetchMesseges = (CHANNEL_ID) => async (dispatch) => {
  try {
    const res = await instance.get(`channels/${CHANNEL_ID}/`);
    const messages = res.data;
    dispatch({
      type: SET_MESSEGES,
      payload: messages,
    });
  } catch (error) {
    console.error(error);
    console.log("messages for this channel couldn't be fetched");
  }
};

//const timestamp = Date(document.data.event_date).toString();

export const updateMesseges = (CHANNEL_ID, TIMESTAMP) => async (dispatch) => {
  try {
    const res = await instance.get(
      `channels/${CHANNEL_ID}/?latest=${TIMESTAMP}`
    );
    const messages = res.data;
    dispatch({
      type: UPDATE_MESSEGES,
      payload: messages,
    });
  } catch (error) {
    console.error(error);
    console.log("updated messages for this channel couldn't be fetched");
  }
};

export const send = (CHANNEL_ID, message) => async (dispatch) => {
  try {
    const msg = { message };
    const res = await instance.post(`channels/${CHANNEL_ID}/send/ `, msg);
    const newMessage = res.data;
    console.log("messege sent ");
    dispatch({
      type: SEND,
      payload: newMessage,
    });
  } catch (error) {
    console.error(error.response.data);
    console.log("Messege couldn't be posted");
  }
};

export const resetLoading = () => {
  return {
    type: RESET_LOADING,
  };
};
