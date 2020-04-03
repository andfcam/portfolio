import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnxGehcAKNExbH-0CYNbpMYQIVXZFtI9A",
    authDomain: "a67-portfolio.firebaseapp.com",
    databaseURL: "https://a67-portfolio.firebaseio.com",
    projectId: "a67-portfolio",
    storageBucket: "a67-portfolio.appspot.com",
    messagingSenderId: "509050981039",
    appId: "1:509050981039:web:d31d8b00d4e974ae2d225a",
    measurementId: "G-KK5F9DEHH2"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
