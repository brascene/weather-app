import { actionTypes } from './actionTypes';

export const getCurrentLocationSuccess = data => ({
  type: actionTypes.GET_GEOLOCATION_DATA_SUCCESS,
  payload: data,
});

export const getCurrentLocationError = error => ({
  type: actionTypes.GET_GEOLOCATION_DATA_ERROR,
  payload: error,
});

export const getCurrentLocationStart = () => ({
  type: actionTypes.GET_GEOLOCATION_DATA_START,
});
