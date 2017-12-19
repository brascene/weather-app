import { actionTypes } from './../actions/actionTypes';
import { fahrenheitToCelsius, celsiusToFahrenheit, kelvinToCelsius, round } from '../../utils';

export const initialState = {
  data: null,
  loading: false,
  success: false,
  error: false,
  celsius: true,
};

function changeUnit(initial, data, celsius) {
  let result = [];
  if (initial) {
    result = data.map(m => Object.assign(
      {}, m,
      {
        temp:
                {
                  day: round(kelvinToCelsius(parseInt(m.temp.day, 10)), 1),
                  min: round(kelvinToCelsius(parseInt(m.temp.min, 10)), 1),
                  max: round(kelvinToCelsius(parseInt(m.temp.max, 10)), 1),
                  night: round(kelvinToCelsius(parseInt(m.temp.night, 10)), 1),
                  eve: round(kelvinToCelsius(parseInt(m.temp.eve, 10)), 1),
                  morn: round(kelvinToCelsius(parseInt(m.temp.morn, 10)), 1),
                },
      },
    ));
  } else if (celsius) {
    result = data.map(m => Object.assign(
      {}, m,
      {
        temp:
                  {
                    day: round(celsiusToFahrenheit(m.temp.day), 1),
                    min: round(celsiusToFahrenheit(m.temp.min), 1),
                    max: round(celsiusToFahrenheit(m.temp.max), 1),
                    night: round(celsiusToFahrenheit(m.temp.night), 1),
                    eve: round(celsiusToFahrenheit(m.temp.eve), 1),
                    morn: round(celsiusToFahrenheit(m.temp.morn), 1),
                  },
      },
    ));
  } else {
    result = data.map(m => Object.assign(
      {}, m,
      {
        temp:
                  {
                    day: round(fahrenheitToCelsius(m.temp.day), 1),
                    min: round(fahrenheitToCelsius(m.temp.min), 1),
                    max: round(fahrenheitToCelsius(m.temp.max), 1),
                    night: round(fahrenheitToCelsius(m.temp.night), 1),
                    eve: round(fahrenheitToCelsius(m.temp.eve), 1),
                    morn: round(fahrenheitToCelsius(m.temp.morn), 1),
                  },
      },
    ));
  }
  return result;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_WEATHER_DATA_SUCCESS: {
      const allData = action.data;
      const rList = changeUnit(true, action.data.list, true);
      allData.list = rList;
      localStorage.setItem('weather_data', JSON.stringify(allData));
      return {
        ...state,
        data: allData,
        success: true,
        loading: false,
      };
    }
    case actionTypes.FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.TOGGLE_TEMPERATURE_UNIT: {
      if (state.data) {
        const rList = changeUnit(false, state.data.list, action.payload);
        const currentData = state.data;
        currentData.list = rList;
        return {
          ...state,
          celsius: action.payload,
          data: currentData,
        };
      }
      return state;
    }
    case actionTypes.RELOAD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
