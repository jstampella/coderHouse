// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTaW2ELIgdd5JrsQJppmLI7p2jdpmlVEk",
  authDomain: "myprimerapp-220100.firebaseapp.com",
  projectId: "myprimerapp-220100",
  storageBucket: "myprimerapp-220100.appspot.com",
  messagingSenderId: "397457439791",
  appId: "1:397457439791:web:159edca8af73a5e3255ada",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
