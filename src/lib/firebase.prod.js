import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAPzya4JI61uenf_hTXUMbHpE0Ec-mAjt0",
  authDomain: "bingescape-8caf5.firebaseapp.com",
  projectId: "bingescape-8caf5",
  storageBucket: "bingescape-8caf5.appspot.com",
  messagingSenderId: "724991744401",
  appId: "1:724991744401:web:1874d14c16de5d808fa230"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
