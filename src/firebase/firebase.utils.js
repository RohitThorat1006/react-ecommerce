import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWx5xFb0QxLnOCHVuNGP6GJ1emo065jB8",
  authDomain: "crwn-clothing-7c5e5.firebaseapp.com",
  projectId: "crwn-clothing-7c5e5",
  storageBucket: "crwn-clothing-7c5e5.appspot.com",
  messagingSenderId: "603787840671",
  appId: "1:603787840671:web:8aaf942382857c456026aa",
  measurementId: "G-0G2TQXYLTH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
