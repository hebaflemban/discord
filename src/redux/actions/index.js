// Types
export {
  SET_CHANNELS,
  SELECT_CHANNEL,
  ADD_CHANNEL,
  SET_MESSEGES,
  UPDATE_MESSEGES,
  SEND,
  LOGIN,
  SIGNUP,
  LOGOUT,
} from "./actionTypes";

/* Channels
fetchChannels: gets a list of all channels. Requires authentication.
addChannel: creates a new channel. Requires authentication
            Expects a payload like this: {name: <NEW_CHANNEL_NAME>}
*/
export { fetchChannels, addChannel, selectChannel } from "./channels";

/* Messeges
fetchMesseges: gets all the messages in a specific channel. Requires authentication.
updateMesseges: gets only the messages in a specific channel that are after a specific timestamp. 
Requires authentication.
send: sends a message to a specific channel. Requires authentication
      Expects a payload like this: {message: <MESSAGE_TEXT>}
*/
export { fetchMesseges, updateMesseges, send } from "./messeges";

// Authentication
export { login, logout, signup, isTokenValid } from "./authentication";
