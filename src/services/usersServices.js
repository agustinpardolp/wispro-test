import {  db } from "../config/fireBaseConfig";


const fetchUsers = async () => {
  const response = db.collection("users").get(); //get all users from firebase
  return response;
};
export const usersServices = { fetchUsers };
