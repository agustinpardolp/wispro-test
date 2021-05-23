import types from "./types";
import { usersServices } from "../../../services/usersServices";

export const fetchusersSRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
};
export const fetchusersSSuccess = (data) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: { data: data },
  };
};
export const fetchusersSFailure = (error) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchusersS = () => {
  return (dispatch) => {
    dispatch(fetchusersSRequest());
    usersServices
      .fetchusersS()
      .then((res) => dispatch(fetchusersSSuccess(res.data)))
      .catch((error) => dispatch(fetchusersSFailure(error)));
  };
};
