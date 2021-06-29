import axios from "axios";
// import apiClient from "../actions/api";

import {
  POST_REGISTER,
  POST_LOGOUT,
  POST_LOGIN,
  POST_PROFILE,
  GET_USER_PROFILE,
} from "../actionsType";

const Api = `http://localhost:8000/api`;
const csrf = `http://localhost:8000`;

export const postLogin = (userData) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios.defaults.withCredentials = true;
  axios.get(`${csrf}/sanctum/csrf-cookie`).then((response) => {
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
  axios.get(`${csrf}/sanctum/csrf-cookie`).then((response) => {
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

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios.defaults.withCredentials = true;
  axios.get(`${csrf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .delete(`${Api}/logout`, config)
      .then((res) => {
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

export const updateProfile = (formData, token) => (dispatch) => {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios.defaults.withCredentials = true;
  axios.get(`${csrf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .post(`${Api}/update-profile`, formData, config)
      .then((res) => {
        localStorage.setItem("userdata", JSON.stringify(res.data.data));
        dispatch({
          type: POST_PROFILE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const getUserById = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: "Bearer " + token },
  };

  axios.defaults.withCredentials = true;
  axios.get(`${csrf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .get(`${Api}/user/${id}`, config)
      .then((res) => {
        dispatch({
          type: GET_USER_PROFILE,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
