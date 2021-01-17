// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBedqpd-Ak1hnlRTwyTRYBxuOIapK680Sk",
    authDomain: "e-plus-clone.firebaseapp.com",
    projectId: "e-plus-clone",
    storageBucket: "e-plus-clone.appspot.com",
    messagingSenderId: "897276026933",
    appId: "1:897276026933:web:0be63e6616ba0472cdd17c",
    measurementId: "G-Y2KJP7H7Q4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth =  firebase.auth();

  export { db, auth };