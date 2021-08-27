import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDR9h36OrPjaOl9BGgHlluJl2yXOYsMjPg",
    authDomain: "discord-clone-d9810.firebaseapp.com",
    projectId: "discord-clone-d9810",
    storageBucket: "discord-clone-d9810.appspot.com",
    messagingSenderId: "727559948232",
    appId: "1:727559948232:web:f49e2a763df85d7b0ce2fd",
    measurementId: "G-M31WYQEVXJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;