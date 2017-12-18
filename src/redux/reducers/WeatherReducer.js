import { actionTypes } from './../actions/actionTypes';

export const initialState = {
  data: null,
  loading: false,
  success: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
      localStorage.setItem('weather_data', JSON.stringify(action.data));
      return {
        ...state,
        data: action.data,
        success: true,
        loading: false,
      };
    case actionTypes.FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
