import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDsCV7tzyGmLs9_Yg1y9sGzZaEXjty4mv0",
  authDomain: "wispro-api.firebaseapp.com",
  databaseURL: "https://wispro-api-default-rtdb.firebaseio.com",
  projectId: "wispro-api",
  storageBucket: "wispro-api.appspot.com",
  messagingSenderId: "1012034813791",
  appId: "1:1012034813791:web:4caadd4b934e77fc7580ea"
};

const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

export { storage, app, db};
export default firebase;
