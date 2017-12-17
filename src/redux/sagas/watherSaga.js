import { call, put } from 'redux-saga/effects'
import { actionTypes } from '../actions/actionTypes';
import { fetchWeatherData } from "../../api";

export function* getWeatherData (action) {
  try {
    const data = yield call(fetchWeatherData);
    yield put({ type: actionTypes.FETCH_WEATHER_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_WEATHER_DATA_ERROR, message: e });
  }
}

export default {
  getWeatherData
}