import axios from "axios";
import {
  GET_ALL_GENRES,
  POST_GENRE,
  DELETE_GENRE,
  PUT_GENRE,
} from "../actionsType";
import Swal from "sweetalert2";
const Api = `https://mangalime.herokuapp.com/api`;

export const getAllGenres = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(`${Api}/genre`, config)
    .then((res) => {
      dispatch({
        type: GET_ALL_GENRES,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addGenre = (input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/genre`, input, config)
      .then((res) => {
        dispatch(getAllGenres(token));
        dispatch({
          type: POST_GENRE,
          payload: res.data,
        });

        if (res.status === 201) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const deleteGenre = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .delete(`${Api}/genre/${id}`, config)
      .then((res) => {
        dispatch(getAllGenres(token));
        dispatch({
          type: DELETE_GENRE,
          payload: res.data,
        });

        if (res.status === 200) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your data has been deleted",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const putGenre = (id, input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/csrf-cookie").then((response) => {
    axios
      .put(`${Api}/genre/${id}`, input, config)
      .then((res) => {
        dispatch(getAllGenres(token));
        dispatch({
          type: PUT_GENRE,
          payload: res.data,
        });
        if (res.status === 201) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your data has been updated",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
