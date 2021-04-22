import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVDa35OxIOlT94Sg2e9oKCw2mlsNw-0Io",
  authDomain: "challenge-3ed6a.firebaseapp.com",
  projectId: "challenge-3ed6a",
  storageBucket: "challenge-3ed6a.appspot.com",
  messagingSenderId: "558130832052",
  appId: "1:558130832052:web:a5b41d799395fc7597ede1",
  measurementId: "G-GEMJMLP30G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
