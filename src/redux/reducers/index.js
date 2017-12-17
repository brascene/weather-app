import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import geolocation from "./LocationReducer";

export default combineReducers({
  geolocation,
  router: routerReducer
});
