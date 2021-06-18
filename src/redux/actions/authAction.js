import axios from "axios";
// import apiClient from "../actions/api";

import { POST_REGISTER, POST_LOGOUT, POST_LOGIN } from "../actionsType";

const Api = `http://localhost:8000/api`;

export const postLogin = (userData) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios.defaults.withCredentials = true;
  axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/login`, userData, config)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userdata", JSON.stringify(res.data.user));
        dispatch({
          type: POST_LOGIN,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_LOGIN,
          payload: {
            status: err.response.status,
            message: err.response.data,
          },
        });
      });
  });
};
export const postRegister = (userData) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios.defaults.withCredentials = true;
  axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/register`, userData, config)
      .then((res) => {
        dispatch({
          type: POST_REGISTER,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_REGISTER,
          payload: {
            status: err.response.status,
            message: err.response.data,
          },
        });
      });
  });
};
export const postLogout = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };

  console.log(config);

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios.defaults.withCredentials = true;
  axios.get("http://localhost:8000/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/logout`, config)
      .then((res) => {
        console.log(res);
        dispatch({
          type: POST_LOGOUT,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
