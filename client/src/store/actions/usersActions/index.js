import types from "./types";
import { usersServices } from "../../../services/usersServices";

const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (data) => {

  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: { data: data },
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  return usersServices
    .fetchUsers()
    .then((querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach(function (doc) {
        usersArray.push(doc.data());
      });

      return dispatch(fetchUsersSuccess(usersArray));
    })
    .catch((error) => dispatch(fetchUsersFailure(error)));
};

const updateUserRequest = () => {
  return {
    type: types.UPDATE_USERS_REQUEST,
  };
};
const updateUserSuccess = () => {
  return {
    type: types.UPDATE_USERS_SUCCESS,
  };
};
const updateUserFailure = (error) => {
  return {
    type: types.UPDATE_USERS_FAILURE,
    payload: error,
  };
};
export const updateUser = (dni, userValues) => (dispatch) => {
  dispatch(updateUserRequest());
  return usersServices
    .updateUser(dni, userValues)
    .then((res) => {
      return dispatch(updateUserSuccess(res));
    })
    .catch((error) => dispatch(updateUserFailure(error)));
};

const deleteUserRequest = () => {
  return {
    type: types.DELETE_USERS_REQUEST,
  };
};
const deleteUserSuccess = () => {
  return {
    type: types.DELETE_USERS_SUCCESS,
  };
};
const deleteUserFailure = (error) => {
  return {
    type: types.DELETE_USERS_FAILURE,
    payload: error,
  };
};
export const deleteUser = (id) => (dispatch) => {
  dispatch(deleteUserRequest());
  return usersServices
    .deleteUser(id)
    .then((res) => {
      return dispatch(deleteUserSuccess(res));
    })
    .catch((error) => dispatch(deleteUserFailure(error)));
};
