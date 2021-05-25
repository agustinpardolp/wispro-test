import types from "./types";
import { authServices } from "../../../services/authServices";

/*-------- LOGIN USER -------------- */

export const loginRequest = () => {
  return {
    type: types.LOGIN_USER_REQUEST,
  };
};
export const loginSuccess = (data) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: data,
  };
};
export const loginFailure = (error) => {
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const login = (user) => (dispatch) => {
  dispatch(loginRequest());
  return authServices
    .login(user.email, user.password, user.rememberUser)
    .then((response) => dispatch(loginSuccess(response)))
    .catch((error) => dispatch(loginFailure({ error })));
};

/*-------- LOGOUT USER -------------- */
export const logoutRequest = () => {
  return {
    type: types.LOGOUT_USER_REQUEST,
  };
};
export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_USER_SUCCESS,
  };
};
export const logoutFailure = (error) => {
  return {
    type: types.LOGOUT_USER_FAILURE,
    payload: error,
  };
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  return authServices.logout(dispatch(logoutSuccess()));
};
