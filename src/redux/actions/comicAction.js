import axios from "axios";
import apiClient from "../actions/api";
import { GET_ALL_COMICS } from "../actionsType";

const Api = `http://localhost:8000/api`;
export const getAllComics = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios
    .get(`${Api}/comics`, config)
    .then((res) => {
      console.log("comics", res);
      dispatch({
        type: GET_ALL_COMICS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // })
};
