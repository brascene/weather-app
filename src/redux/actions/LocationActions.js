import { actionTypes } from "./actionTypes";

export const weatherData = {
  weatherDataStart: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_START,
    payload
  }),
  weatherDataError: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_ERROR,
    payload
  }),
  weatherDataSuccess: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
    payload
  })
};

export const getCurrentLocationSuccess = data => {
	return {
		type: actionTypes.GET_GEOLOCATION_DATA_SUCCESS,
		payload: data
	}
}

export const getCurrentLocationError = error => {
	return {
		type: actionTypes.GET_GEOLOCATION_DATA_ERROR,
		payload: error
	}
}

export const getCurrentLocationStart = () => {
  return {
    type: actionTypes.GET_GEOLOCATION_DATA_START
  }
}