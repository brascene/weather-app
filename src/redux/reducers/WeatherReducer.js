import { actionTypes } from "./../actions/actionTypes";

export const initialState = {
  data: null,
  loading: false,
  success: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GEOLOCATION_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GEOLOCATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        success: true,
        loading: false
      };
    case actionTypes.GEOLOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
