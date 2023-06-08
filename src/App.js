import logo from './logo.svg';
import './App.css';
import React from 'react';


import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';
import  'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb1AUo8b9jSgF5l-zpue5n5c8sCI2MG30",
  authDomain: "chatproject-fdb2d.firebaseapp.com",
  projectId: "chatproject-fdb2d",
  storageBucket: "chatproject-fdb2d.appspot.com",
  messagingSenderId: "820154958756",
  appId: "1:820154958756:web:8a4d396bd2b177eaaa3731",
  measurementId: "G-1XGWDSH1F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p><SignIn/></p>
        <a></a>

      </header>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

export default App;
