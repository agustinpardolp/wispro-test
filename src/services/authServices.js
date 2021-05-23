import {  app } from "../config/fireBaseConfig";

const login = async (username, password, rememberUser) => {
  let response = await app.auth().signInWithEmailAndPassword(username, password);
  console.log(response);
  if (response && response.user.uid) {
    if (rememberUser) {
      localStorage.setItem("token_data", JSON.stringify(response.user.uid));
      return response;
    } else return response;
  } else throw Error("invalid user");
};

const logout = (dispatchToStore) => {
  localStorage.removeItem("token_data");
  return dispatchToStore;
};

export const authServices = { login, logout };
