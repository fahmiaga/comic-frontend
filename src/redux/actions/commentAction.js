import axios from "axios";
import { GET_COMMENT_BY_ID_EPISODE, POST_COMMENT } from "../actionsType";
import {} from "react-notifications";

const Api = `https://mangalime.herokuapp.com/api`;

export const getCommentByIdEpisode = (id, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(`${Api}/comment/${id}`, config)
    .then((res) => {
      dispatch({
        type: GET_COMMENT_BY_ID_EPISODE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddComment = (id, input, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios.defaults.withCredentials = true;
  axios.get("https://mangalime.herokuapp.com/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`${Api}/comment/${id}`, input, config)
      .then((res) => {
        dispatch(getCommentByIdEpisode(id, token));
        dispatch({
          type: POST_COMMENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
