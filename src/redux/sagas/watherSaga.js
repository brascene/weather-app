import { call, put } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
import { fetchWeatherDataByCity, fetchWeatherDataByCoord } from '../../api';

export function* getWeatherDataCity(action) {
  try {
    const data = yield call(fetchWeatherDataByCity, action.payload);
    yield put({ type: actionTypes.FETCH_WEATHER_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_WEATHER_DATA_ERROR, message: e });
  }
}

export function* getWeatherDataCoord(action) {
  try {
    const data = yield call(fetchWeatherDataByCoord, action.payload.lat, action.payload.lon);
    yield put({ type: actionTypes.FETCH_WEATHER_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_WEATHER_DATA_ERROR, message: e });
  }
}

export default {
  getWeatherDataCity,
  getWeatherDataCoord,
};
