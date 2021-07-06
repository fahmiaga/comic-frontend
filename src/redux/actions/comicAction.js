import axios from "axios";
// import apiClient from "../actions/api";
import {
  GET_ALL_COMICS,
  POST_COMIC,
  DELETE_COMIC,
  GET_COMIC_BY_ID,
  PUT_COMIC,
  GET_COMICS_BY_GENRE,
  POST_RATING,
  SEARCH_COMIC,
} from "../actionsType";
import Swal from "sweetalert2";

const Api = `https://mangalime.herokuapp.com`;

export const getAllComics = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios
    .get(`${Api}/comics`, config)
    .then((res) => {
      // console.log(res.data.data.reverse());
      dispatch({
        type: GET_ALL_COMICS,
        payload: res.data.data.reverse(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // })
};

export const getComicById = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios
    .get(`${Api}/comics/${id}`, config)
    .then((res) => {
      dispatch({
        type: GET_COMIC_BY_ID,
        payload: {
          comic: res.data.data,
          status: res.status,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // })
};

export const addComic = (token, formData) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "multipart/form-data",
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/comics`, formData, config)
      .then((res) => {
        dispatch(getAllComics(token));
        dispatch({
          type: POST_COMIC,
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
        dispatch({
          type: POST_COMIC,
          payload: {
            message: err.response.data,
            status: err.response.status,
          },
        });
      });
  });
};

export const deleteComic = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    axios.defaults.withCredentials = true;
    axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
      axios
        .delete(`${Api}/comics/${id}`, config)
        .then((res) => {
          dispatch(getAllComics(token));
          dispatch({
            type: DELETE_COMIC,
            payload: res.data.data,
          });

          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Your comic has been deleted",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};

export const updateComic = (id, formData, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "multipart/form-data",
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/comics/${id}`, formData, config)
      .then((res) => {
        dispatch(getAllComics(token));
        dispatch({
          type: PUT_COMIC,
          payload: res.data,
        });

        if (res.status === 200) {
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your comic has been updated",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: PUT_COMIC,
          payload: {
            message: err.response.data,
            status: err.response.status,
          },
        });
      });
  });
};

export const getComicByGenre = (genre, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios
    .get(`${Api}/comics/get-comics-genre/${genre}`, config)
    .then((res) => {
      // console.log("genreeeeeee", genre);
      // console.log("okee", res.data);
      dispatch({
        type: GET_COMICS_BY_GENRE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // })
};

export const addRating = (id, input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/rate/${id}`, input, config)
      .then((res) => {
        // console.log("rating =>", res);
        dispatch(getComicById(id, token));
        dispatch({
          type: POST_RATING,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: POST_RATING,
          payload: {
            message: err.response.data,
            status: err.response.status,
          },
        });
      });
  });
};

export const searchComic = (input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // apiClient.get("sanctum/csrf-cookie").then((response) => {
  axios
    .get(`${Api}/comics/search/${input}`, config)
    .then((res) => {
      dispatch({
        type: SEARCH_COMIC,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // })
};
