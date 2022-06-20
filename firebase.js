import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
        apiKey: "AIzaSyDFoFWBGyipXLMZMW0DJqXAV-K1CqrGjpM",
        authDomain: "loxmobiletest.firebaseapp.com",
        projectId: "loxmobiletest",
        storageBucket: "loxmobiletest.appspot.com",
        messagingSenderId: "984093760679",
        appId: "1:984093760679:web:95e535d69a9546a7f04f82",
        measurementId: "G-1Z7M4YFJML"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleprovider = new firebase.auth.GoogleAuthProvider();
const facebookprovider = new firebase.auth.FacebookAuthProvider();

export { auth, googleprovider, facebookprovider };
export default db;