import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCBRligFl8eH-gB75ukoqUlnRb2dAUNIrA",
  authDomain: "saigonunivercity.firebaseapp.com",
  projectId: "saigonunivercity",
  storageBucket: "saigonunivercity.appspot.com",
  messagingSenderId: "852884362927",
  appId: "1:852884362927:web:49fb83c864ecd8c9cd665a",
  measurementId: "G-MJYX0M1KHW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
   
   db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
