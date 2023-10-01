import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBz40UdaWT-eq00MAOsZhgdV8wJuNrhmw0",
  authDomain: "react-line-clone-dfa16.firebaseapp.com",
  projectId: "react-line-clone-dfa16",
  storageBucket: "react-line-clone-dfa16.appspot.com",
  messagingSenderId: "616057740502",
  appId: "1:616057740502:web:b8a1bf9b1b11c9d53afd77"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };