// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIgsGv_F-07x-adk9vCV93PSDHfl6dXIc",
    authDomain: "clone-8abba.firebaseapp.com",
    projectId: "clone-8abba",
    storageBucket: "clone-8abba.appspot.com",
    messagingSenderId: "870824472047",
    appId: "1:870824472047:web:45dbc08e0f840297b15a1a",
    measurementId: "G-W5Q1V01NTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };