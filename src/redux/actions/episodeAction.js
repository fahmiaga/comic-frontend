import axios from "axios";
// import apiClient from "../actions/api";
import {
  GET_EPISODES_BY_COMIC_ID,
  POST_EPISODE,
  PUT_EPISODE,
} from "../actionsType";
import Swal from "sweetalert2";

const Api = `https://mangalime-endpoint.herokuapp.com/api`;

export const getEpisodeByComicId = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios
    .get(`${Api}/episode/${id}`, config)
    .then((res) => {
      dispatch({
        type: GET_EPISODES_BY_COMIC_ID,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // })
};

export const AddEpisode = (id, input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime-endpoint.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/episode/${id}`, input, config)
      .then((res) => {
        dispatch(getEpisodeByComicId(id, token));
        dispatch({
          type: POST_EPISODE,
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

export const UpdateEpisode = (id, idepisode, input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime-endpoint.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .put(`${Api}/episode/${idepisode}`, input, config)
      .then((res) => {
        dispatch(getEpisodeByComicId(id, token));
        dispatch({
          type: PUT_EPISODE,
          payload: res.data,
        });

        if (res.status === 200) {
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

export const deleteEpisode = (id, idepisode, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime-endpoint.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .delete(`${Api}/episode/${idepisode}`, config)
      .then((res) => {
        dispatch(getEpisodeByComicId(id, token));
        // dispatch({
        //   type: PUT_EPISODE,
        //   payload: res.data,
        // });

        if (res.status === 200) {
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
