import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDnvet0JejdYA4sm4W6nACrD55JCkZnVQ",
  authDomain: "discord-2-yt.firebaseapp.com",
  projectId: "discord-2-yt",
  storageBucket: "discord-2-yt.appspot.com",
  messagingSenderId: "767373405444",
  appId: "1:767373405444:web:27fb3e299ea6923035f451",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
