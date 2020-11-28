import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDBF1NgLcH6NBxCOYzskD2dF9EGiagd24M",
    authDomain: "stayful-605a0.firebaseapp.com",
    databaseURL: "https://stayful-605a0.firebaseio.com",
    projectId: "stayful-605a0",
    storageBucket: "stayful-605a0.appspot.com",
    messagingSenderId: "223954608343",
    appId: "1:223954608343:web:69b6a89497df71c4ab1092",
    measurementId: "G-TY03EGBWBY"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
