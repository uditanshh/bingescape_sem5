import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyD2Y0vcL6IoRFM5km4TUw0USwvhNj4tgIE",
  authDomain: "bingescape-1198.firebaseapp.com",
  projectId: "bingescape-1198",
  storageBucket: "bingescape-1198.appspot.com",
  messagingSenderId: "1085708734040",
  appId: "1:1085708734040:web:cde577522c146f15c5c42d"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
