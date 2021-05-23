import { createActionTypes } from "../../../utils";
// User Actions

export default {
  ...createActionTypes("USER", "LOGIN_USER"),
  ...createActionTypes("USER", "LOGOUT_USER"),
};
