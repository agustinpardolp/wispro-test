import { createActionTypes } from "../../../utils";

export default {
  ...createActionTypes("USERS", "FETCH_USERS"),
  ...createActionTypes("USERS", "UPDATE_USERS"),
  ...createActionTypes("USERS", "DELETE_USERS"),
  CLEAR_USERS_REQUEST: "CLEAR_USERS_REQUEST",
};
