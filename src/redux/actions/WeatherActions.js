import { actionTypes } from './actionTypes';

export const weatherData = {
  weatherDataStart: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_START,
    payload,
  }),
  weatherDataError: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_ERROR,
    payload,
  }),
  weatherDataSuccess: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
    payload,
  }),
};

export const weatherDataByCoord = {
  weatherDataCoordStart: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_START_COORD,
    payload,
  }),
  weatherDataCoordError: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_ERROR_COORD,
    payload,
  }),
  weatherDataCoordSuccess: payload => ({
    type: actionTypes.FETCH_WEATHER_DATA_SUCCESS_COORD,
    payload,
  }),
};

export const toggleTemperature = celsius => ({
  type: actionTypes.TOGGLE_TEMPERATURE_UNIT,
  payload: celsius,
});

export const reloadData = data => ({
  type: actionTypes.RELOAD_DATA,
  payload: data,
});

