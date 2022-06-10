import axios from "axios";
import {
  GET_FEED_LOADING,
  GET_FEED_SUCCESS,
  GET_FEED_ERROR,
} from "./feeds.type";

export const getFeedsapi = () => (dispatch) => {
  dispatch({ type: GET_FEED_LOADING });
  axios
    .get("http://localhost:8080/feeds")
    .then((r) => {
      dispatch({ type: GET_FEED_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_FEED_ERROR });
    });
};
