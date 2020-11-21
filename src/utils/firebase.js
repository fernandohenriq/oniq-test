import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FB_KEY || "AIzaSyCrzM974OPQmsGr-ySY_p9K9FYM2pChqUk",
  authDomain: process.env.REACT_APP_FB_DOMAIN || "falemais-b91a6.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FB_URL || "https://falemais-b91a6.firebaseio.com",
  projectId: process.env.REACT_APP_FB_PROJID || "falemais-b91a6",
  storageBucket: process.env.REACT_APP_FB_SBUCKET || "falemais-b91a6.appspot.com",
  messagingSenderId: process.env.REACT_APP_FB_MSID || "859405045923",
  appId: process.env.REACT_APP_FB_APPID || "1:859405045923:web:fd11e82abae315c6b22f16"
};

firebase.initializeApp(config);

export default firebase;
