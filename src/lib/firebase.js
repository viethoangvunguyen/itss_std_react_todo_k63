import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_AaH3A3Nc7r8PyTn31YsbDSawheYOT_w",
    authDomain: "todos-f713a.firebaseapp.com",
    projectId: "todos-f713a",
    storageBucket: "todos-f713a.appspot.com",
    messagingSenderId: "845598667896",
    appId: "1:845598667896:web:7fb4affabf2be09469a98d",
    measurementId: "G-1RLLGRJP7X"
  };

  firebase.initializeApp(firebaseConfig);