import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDLYmfSliEilDv2sPl_Nyi2AzDOlmAtJq4",

  authDomain: "missingperson-28ad0.firebaseapp.com",

  databaseURL: "https://missingperson-28ad0-default-rtdb.firebaseio.com",

  projectId: "missingperson-28ad0",

  storageBucket: "missingperson-28ad0.appspot.com",

  messagingSenderId: "684326167777",

  appId: "1:684326167777:web:034e56d781e5690d8b83a0",

  measurementId: "G-547ZVZDCW7"

  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const db = firebaseApp.firestore();
  //const store = firebaseApp.storage();
  //const auth =firebaseApp.auth();
  export default firebaseApp;
