import { getFeeds } from "./feeds.action";
import {
  GET_FEED_LOADING,
  GET_FEED_SUCCESS,
  GET_FEED_ERROR,
} from "./feeds.type";

const initialState = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FEED_LOADING: {
      return {
        ...state,
        getFeeds: { ...state.getFeeds, loading: true, error: false },
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        getFeeds: { ...state.getFeeds, loading: false, error: false },
        data: payload,
      };
    }
    case GET_FEED_ERROR: {
      return {
        ...state,
        getFeeds: { ...state.getFeeds, loading: false, error: true },
      };
    }
    default: {
      return state;
    }
  }
};
