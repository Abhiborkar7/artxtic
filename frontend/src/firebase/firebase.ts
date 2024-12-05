// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7atORuNyf2TuABNA_SvkYOueSkFHJGC8",
    authDomain: "artxtic-a471a.firebaseapp.com",
    projectId: "artxtic-a471a",
    storageBucket: "artxtic-a471a.firebasestorage.app",
    messagingSenderId: "422786156647",
    appId: "1:422786156647:web:512752a6aadef659e3acc2",
    measurementId: "G-7ZK45E29JX"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { app, auth };