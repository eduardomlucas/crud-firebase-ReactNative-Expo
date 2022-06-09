import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4P2yyA0NIFpCQa1fCFZ83suyBmjCrNH4",
    authDomain: "kura-web-94c53.firebaseapp.com",
    projectId: "kura-web-94c53",
    storageBucket: "kura-web-94c53.appspot.com",
    messagingSenderId: "751785506244",
    appId: "1:751785506244:web:02e6c9ed1094554eeaa091",
    measurementId: "G-300SJZ7FP0"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

