import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClJz-WLoVT3nzMPdwINi6nboZvh_3O46k",
    authDomain: "lonely-milk-4878-masai.firebaseapp.com",
    projectId: "lonely-milk-4878-masai",
    storageBucket: "lonely-milk-4878-masai.appspot.com",
    messagingSenderId: "1096118088593",
    appId: "1:1096118088593:web:9bfa87206a37f85f13e030",
    measurementId: "G-H6FM5P66X7"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };