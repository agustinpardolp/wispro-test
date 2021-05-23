import { combineReducers } from "redux";
import { login } from "./login/login-reducer";
import { notification } from "./notification/notifications-reducer";
import { users } from "./users/users-reducer";

const allReducers = combineReducers({
  login: login,
  notification,
  users,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
