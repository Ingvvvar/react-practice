import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyBMfw9khcAlYGMpfWwmc8pyxXl98imumKo",
//     authDomain: "restaurants-60826.firebaseapp.com",
//     databaseURL: "https://restaurants-60826-default-rtdb.firebaseio.com",
//     projectId: "restaurants-60826",
//     storageBucket: "restaurants-60826.appspot.com",
//     messagingSenderId: "394552474624",
//     appId: "1:394552474624:web:f4b93a6299dab64f59ece5",
//     measurementId: "G-Q3VM862W36"
//   };

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