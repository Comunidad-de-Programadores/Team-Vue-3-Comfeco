import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDxSttkDyJIOap8fYwvJ0oUyI2Ck5Z6n6M",
  authDomain: "comfeco-app-tv3.firebaseapp.com",
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: "comfeco-app-tv3",
  storageBucket: "comfeco-app-tv3.appspot.com",
  messagingSenderId: "125962885290",
  appId: "1:125962885290:web:aafd77f8f170654897d8d3"
};

/* var firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,appId: process.env.VUE_APP_APPID
 }; */

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}