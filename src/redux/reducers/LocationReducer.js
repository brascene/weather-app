import { actionTypes } from './../actions/actionTypes';

export const initialState = {
  locationData: null,
  loading: false,
  success: false,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GEOLOCATION_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_GEOLOCATION_DATA_SUCCESS:
      localStorage.setItem('userLocation', JSON.stringify({
        lat: action.payload.latitude,
        lon: action.payload.longitude,
      }));
      return {
        ...state,
        locationData: action.payload,
        success: true,
        loading: false,
      };
    case actionTypes.GET_GEOLOCATION_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
