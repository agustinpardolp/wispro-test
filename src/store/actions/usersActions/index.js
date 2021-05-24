import types from "./types";
import { usersServices } from "../../../services/usersServices";

export const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (data) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: { data: data },
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    usersServices
      .fetchUsers()
      .then((querySnapshot) => {
        let usersArray = [];
        querySnapshot.forEach(function (doc) {
          usersArray.push(doc.data());
        });
        return dispatch(fetchUsersSuccess(usersArray))
      })
      .catch((error) => dispatch(fetchUsersFailure(error)));
  };
};
