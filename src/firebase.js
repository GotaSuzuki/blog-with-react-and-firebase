import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmtf8zjYllvs2nxNOZYpCZQ2Hv4YSel7E",
  authDomain: "blog-77044.firebaseapp.com",
  projectId: "blog-77044",
  storageBucket: "blog-77044.appspot.com",
  messagingSenderId: "164384296362",
  appId: "1:164384296362:web:123ec7021db5739b386fd3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };