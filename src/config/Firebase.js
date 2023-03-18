import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHMI4sBu9RFjhJsm7NUxGRnTX4p3H8BH4",
  authDomain: "auth-23674.firebaseapp.com",
  projectId: "auth-23674",
  storageBucket: "auth-23674.appspot.com",
  messagingSenderId: "79398741297",
  appId: "1:79398741297:web:803bc783d76e55d0ebbc10",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const twitter = new TwitterAuthProvider();
export const github = new GithubAuthProvider();
