import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_URL,
  projectId: process.env.REACT_APP_FB_PROJID,
  storageBucket: process.env.REACT_APP_FB_SBUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MSID,
  appId: process.env.REACT_APP_FB_APPID
};

firebase.initializeApp(config);

export default firebase;
