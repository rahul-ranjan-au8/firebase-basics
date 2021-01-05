import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd-O9Z4w1Qi2_dkB05Jh33cmzmMRRjGwY",
  authDomain: "kanban-9e76a.firebaseapp.com",
  projectId: "kanban-9e76a",
  storageBucket: "kanban-9e76a.appspot.com",
  messagingSenderId: "442209211503",
  appId: "1:442209211503:web:ad354cc36eedd735e0e99a",
};

const fb = firebase.initializeApp(firebaseConfig);

const auth = fb.auth();
const db = fb.firestore();

export { auth, db };
