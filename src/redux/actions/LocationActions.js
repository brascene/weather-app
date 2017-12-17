import { actionTypes } from "./actionTypes";

export const logIn = {
  geolocationStart: payload => ({
    type: actionTypes.GEOLOCATION_START,
    payload
  }),
  geolocationError: payload => ({
    type: actionTypes.GEOLOCATION_ERROR,
    payload
  }),
  geolocationSuccess: payload => ({
    type: actionTypes.GEOLOCATION_SUCCESS,
    payload
  })
};
