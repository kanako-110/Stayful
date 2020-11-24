import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBqPVVI_SMu9bwKLs1AYopi7GrwG5bWBGs",
	authDomain: "stayful-9fb54.firebaseapp.com",
	databaseURL: "https://stayful-9fb54.firebaseio.com",
	projectId: "stayful-9fb54",
	storageBucket: "stayful-9fb54.appspot.com",
	messagingSenderId: "1011569342248",
	appId: "yarn1:1011569342248:web:22ae454191ca3eec3d421d",
	measurementId: "G-2NY0QE3XQV",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBqPVVI_SMu9bwKLs1AYopi7GrwG5bWBGs",
//     authDomain: "stayful-9fb54.firebaseapp.com",
//     databaseURL: "https://stayful-9fb54.firebaseio.com",
//     projectId: "stayful-9fb54",
//     storageBucket: "stayful-9fb54.appspot.com",
//     messagingSenderId: "1011569342248",
//     appId: "1:1011569342248:web:22ae454191ca3eec3d421d",
//     measurementId: "G-2NY0QE3XQV"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
