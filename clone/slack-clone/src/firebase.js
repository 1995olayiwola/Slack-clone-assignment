import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM9lGoo8O1VrXcJ5m9BuFBCUwY6sgxqlY",
  authDomain: "slack-clone-72719.firebaseapp.com",
  projectId: "slack-clone-72719",
  storageBucket: "slack-clone-72719.appspot.com",
  messagingSenderId: "472142820653",
  appId: "1:472142820653:web:64e1efb9626ae823efcfa4",
  measurementId: "G-K2ZQ7XLV7T"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};