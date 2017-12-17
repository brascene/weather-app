import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import weather from "./WeatherReducer";
import locationData from "./LocationReducer";

export default combineReducers({
  weather,
  locationData,
  router: routerReducer
});
