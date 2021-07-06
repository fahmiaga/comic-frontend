import axios from "axios";
import { GET_DAYS, GET_SCHEDULE, POST_SCHEDULE } from "../actionsType";
import Swal from "sweetalert2";
const Api = `https://mangalime.herokuapp.com/api`;
const crsf = `https://mangalime.herokuapp.com`;

export const getDays = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(`${Api}/days`, config)

    .then((res) => {
      dispatch({
        type: GET_DAYS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSchedule = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(`${Api}/schedule/${id}`, config)

    .then((res) => {
      dispatch({
        type: GET_SCHEDULE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addSchedule = (id, input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get(`${crsf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .post(`${Api}/schedule/${id}`, input, config)
      .then((res) => {
        dispatch(getSchedule(id, token));
        dispatch({
          type: POST_SCHEDULE,
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
        if (err.response.status === 406) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
            // footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  });
};

export const deleteSchedule = (id, idSchedule, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get(`${crsf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .delete(`${Api}/schedule/${idSchedule}`, config)
      .then((res) => {
        dispatch(getSchedule(id, token));

        if (res.status === 200) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your work has been deleted",
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
