import axios from "axios";
import {
  GET_CONTENT_BY_ID_EPISODE,
  POST_CONTENT,
  PUT_CONTENT,
} from "../actionsType";
import Swal from "sweetalert2";
const Api = `http://localhost:8000/api`;
const crsf = `http://localhost:8000`;

export const getContentByIdEpisode = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(`${Api}/image/${id}`, config)

    .then((res) => {
      dispatch({
        type: GET_CONTENT_BY_ID_EPISODE,
        payload: res.data.images,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addContent = (id, token, formData) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "multipart/form-data",
  };

  axios.defaults.withCredentials = true;
  axios.get(`${crsf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .post(`${Api}/image/${id}`, formData, config)
      .then((res) => {
        dispatch(getContentByIdEpisode(id, token));
        dispatch({
          type: POST_CONTENT,
          payload: res.data,
        });

        if (res.status === 201) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your comic has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        // dispatch({
        //   type: POST_COMIC,
        //   payload: {
        //     message: err.response.data,
        //     status: err.response.status,
        //   },
        // });
      });
  });
};

export const deleteImage = (id_image, id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get(`${crsf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .delete(`${Api}/delete-image/${id_image}`, config)
      .then((res) => {
        dispatch(getContentByIdEpisode(id, token));

        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Your comic has been Deleted",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
};

export const updateImage = (id, token, formData) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get(`${crsf}/sanctum/csrf-cookie`).then((response) => {
    axios
      .post(`${Api}/update-image/${id}`, formData, config)
      .then((res) => {
        dispatch(getContentByIdEpisode(id, token));
        dispatch({
          type: PUT_CONTENT,
          payload: res.data,
        });
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Your comic has been Updated",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
};
