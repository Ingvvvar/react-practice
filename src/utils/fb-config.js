import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCmjBk7__gfcmDQ9LuC-7yL0LRK1LJ2K-U",
  authDomain: "restaurants-menu-286ee.firebaseapp.com",
  databaseURL: "https://restaurants-menu-286ee-default-rtdb.firebaseio.com",
  projectId: "restaurants-menu-286ee",
  storageBucket: "restaurants-menu-286ee.appspot.com",
  messagingSenderId: "863076621562",
  appId: "1:863076621562:web:1f7e73ef62fde8c2857d43",
  measurementId: "G-566MC105XT"
};

firebase.initializeApp(firebaseConfig);

export default firebase;