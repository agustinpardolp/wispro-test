import user from "../actions/loginActions/types";
import users from "../actions/usersActions/types";

export const successMessages = {
  [user.LOGIN_USER_SUCCESS]: "Sesion iniciada con éxito.",
  [users.UPDATE_USERS_SUCCESS]: "Usuario editado con éxito",
  [users.DELETE_USERS_SUCCESS]: "Usuario eliminadio con éxito.",
};
export const failureMessages = {
  [user.LOGIN_USER_FAILURE]: "Error al iniciar sesion.",
  [users.UPDATE_USERS_FAILURE]: "Error al editar el usuario",
  [users.DELETE_USERS_FAILURE]: "Error al eliminar el usuario",
};

