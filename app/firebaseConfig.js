import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBIdxFANrLhieb-YKljHQpVaUbrTRqnFJY" ,
    authDomain: "lean-in-hacks-5.firebaseapp.com",
    projectId: "lean-in-hacks-5",
    storageBucket: "lean-in-hacks-5.appspot.com",
    messagingSenderId: "993429746220",
    appId: "1:993429746220:web:3756b75136394b75299789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { db , auth };