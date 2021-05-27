import { db } from "../config/fireBaseConfig";

const fetchUsers = async () => {
  const response = db.collection("users").get(); //get all users from firebase
  return response;
};

const deleteUser = (id) => {
  const collectionRef = db.collection("users"); //logical delete over selected user
  return collectionRef.doc(id).delete();
};
const updateUser = (dni, values) => {
  const collectionRef = db.collection("users"); //update user data
  return collectionRef.doc(dni).update(values);
};
export const usersServices = { fetchUsers, deleteUser, updateUser };
