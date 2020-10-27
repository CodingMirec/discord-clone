import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-aNbaywrYIH2nJHtt3ZscUQQ281K472w",
  authDomain: "mirec-discord-clone.firebaseapp.com",
  databaseURL: "https://mirec-discord-clone.firebaseio.com",
  projectId: "mirec-discord-clone",
  storageBucket: "mirec-discord-clone.appspot.com",
  messagingSenderId: "359645592833",
  appId: "1:359645592833:web:33ef2d4ffd3e6b26156f00",
  measurementId: "G-XFQ26VBH9H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
