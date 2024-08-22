import firebase from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyD9xKjrt82tBrgcbVybfvXn6GUaFz3xBNs",
    authDomain: "linkedinclone-998e0.firebaseapp.com",
    projectId: "linkedinclone-998e0",
    storageBucket: "linkedinclone-998e0.appspot.com",
    messagingSenderId: "487147912078",
    appId: "1:487147912078:web:4ec5e4b130c973680842df"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db , auth};