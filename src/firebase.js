// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAblrOJq7N9LzfTG8EkmqzXi1J8tx6gTYc",
  authDomain: "mailbox-dfe9c.firebaseapp.com",
  databaseURL: "https://mailbox-dfe9c-default-rtdb.firebaseio.com",
  projectId: "mailbox-dfe9c",
  storageBucket: "mailbox-dfe9c.appspot.com",
  messagingSenderId: "736622306054",
  appId: "1:736622306054:web:d174c6920f09f8ea62b487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};

