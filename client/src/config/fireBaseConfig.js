import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
  
let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_API_BASE_URL,
  projectId: "wispro-api",
  storageBucket: "wispro-api.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID
};

const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

export { storage, app, db};
export default firebase;
