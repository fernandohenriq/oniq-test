import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrzM974OPQmsGr-ySY_p9K9FYM2pChqUk",
  authDomain: "falemais-b91a6.firebaseapp.com",
  databaseURL: "https://falemais-b91a6.firebaseio.com",
  projectId: "falemais-b91a6",
  storageBucket: "falemais-b91a6.appspot.com",
  messagingSenderId: "859405045923",
  appId: "1:859405045923:web:fd11e82abae315c6b22f16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();