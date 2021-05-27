import types from "../../actions/loginActions/types";
import { REQUEST_STATUS } from "../../../constants/index";

export const login = (
  state = {
    user: { token: null } ,
    status: REQUEST_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { user, error } = {} } = action;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: { token: user.uid },
        status: REQUEST_STATUS.LOADED,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        status: REQUEST_STATUS.FAILED,
        error: error,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        user: { token: null },
        status: REQUEST_STATUS.LOADED,
      };

    default:
      return state;
  }
};
