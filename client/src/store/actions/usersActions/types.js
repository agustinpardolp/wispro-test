import { createActionTypes } from "../../../utils";

export default {
  ...createActionTypes("USERS", "FETCH_USERS"),
  ...createActionTypes("USERS", "UPDATE_USERS"),
  ...createActionTypes("USERS", "DELETE_USERS"),
};
