import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCBMYFADj-b8JWokKD6exg3i6aofqUlNM",
  authDomain: "clone-2a675.firebaseapp.com",
  databaseURL: "https://clone-2a675.firebaseio.com",
  projectId: "clone-2a675",
  storageBucket: "clone-2a675.appspot.com",
  messagingSenderId: "64233284139",
  appId: "1:64233284139:web:15812663ccbc471323006e",
  measurementId: "G-D7MYRXNSNJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
