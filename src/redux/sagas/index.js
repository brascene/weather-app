import { takeEvery } from 'redux-saga/effects'

import { actionTypes } from '../actions/actionTypes'
import * as weatherSaga from './watherSaga'

export default function* rootSaga () {
  yield [
    takeEvery(actionTypes.FETCH_WEATHER_DATA_START, weatherSaga.getWeatherData),
  ]
}
