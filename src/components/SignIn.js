import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="formContainer">
      <h1>LINE風チャットアプリ</h1>
      <button className="signInButton" onClick={signInWithGoogle}>
        グーグルでサインイン
      </button>
    </div>
  );
}

export default SignIn;
