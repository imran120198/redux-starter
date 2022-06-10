import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import { authreducer } from "./auth/auth.reducer";
import { feedreducer } from "./feeds/feeds.reducer";

const rootReducer = combineReducers({ auth: authreducer, feed: feedreducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
