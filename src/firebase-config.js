// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUWlJWSoas9D0VbGZHUQ0-4-A1imXadzM",
    authDomain: "curation-140fd.firebaseapp.com",
    projectId: "curation-140fd",
    storageBucket: "curation-140fd.appspot.com",
    messagingSenderId: "880133764787",
    appId: "1:880133764787:web:a12915f573e4bc6407a2c6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);