// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBI7Fl3NWvS_5wy6BaNw1quKcRI5GytZlk",

  authDomain: "notesapp-d2cb1.firebaseapp.com",

  projectId: "notesapp-d2cb1",

  storageBucket: "notesapp-d2cb1.appspot.com",

  messagingSenderId: "873602921960",

  appId: "1:873602921960:web:80a86797f55432ed8ee05d",

//   measurementId: "G-NKK52J4LGV"

};


// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)