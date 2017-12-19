import axios from 'axios';

import c from '../constants';

export const fetchWeatherDataByCity = city => axios
  .get(`${c.OPEN_WEATHER_API_URL}q=${city}&cnt=7&&APPID=${c.OPEN_WEATHER_APPID}`)
  .then(response => response.data)
  .catch(error => error);

export const fetchWeatherDataByCoord = (lat, lon) => axios
  .get(`${c.OPEN_WEATHER_API_URL}lat=${lat}&lon=${lon}&cnt=7&&APPID=${c.OPEN_WEATHER_APPID}`)
  .then(response => response.data)
  .catch(error => error);
