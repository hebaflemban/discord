import { LOGIN, SIGNUP, LOGOUT } from "./actionTypes";
import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";

export const isTokenValid = () => {
  console.log("do we have a token yet ", !!Cookies.get("token"));

  return (dispatch) => {
     const token = Cookies.get("token");
    if (token) {
      const user = decode(token);
      console.log("do we have a token, user?", token, user);

      if (user.exp >= Date.now() / 1000) {
        instance.defaults.headers.Authorization = `jwt ${token}`;
        dispatch({
          type: LOGIN,
          payload: user,
        });
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/login/", user);
      const { token } = res.data;
      instance.defaults.headers.Authorization = `jwt ${token}`;
      Cookies.set("token", token);
      dispatch({
        type: LOGIN,
        payload: decode(token),
      });
    } catch (error) {
      console.log("Couldn't login");
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup/", user);
      const { token } = res.data;
      instance.defaults.headers.Authorization = `jwt ${token}`;
      Cookies.set("token", token);
      dispatch({
        type: SIGNUP,
        payload: decode(token),
      });
    } catch (error) {
      console.log("Couldn't sign you up");
    }
  };
};

export const logout = () => {
  delete instance.defaults.headers.Authorization;
  Cookies.remove("token");
  return {
    type: LOGOUT,
    payload: null,
  };
};
