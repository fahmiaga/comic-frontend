import axios from "axios";
import { POST_LOGIN } from "../actionsType";
import { POST_REGISTER } from "../actionsType";

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
        console.log(res);
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
