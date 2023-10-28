import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyC1v01h-m0y7CLgTcr-DY6T0dQYXEBLMgA",
	authDomain: "ibrahimkeles.firebaseapp.com",
	projectId: "ibrahimkeles",
	storageBucket: "ibrahimkeles.appspot.com",
	messagingSenderId: "785525431496",
	appId: "1:785525431496:web:25b83faa0d32cf321319fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

// Detect auth state
// onAuthStateChange(auth, (user) => {
//   if (user != null) {
//     console.log("logged in");
//   } else {
//     console.log("no user");
//   }
// });
