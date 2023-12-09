import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "imagegen-2fd0c.firebaseapp.com",
  projectId: "imagegen-2fd0c",
  storageBucket: "imagegen-2fd0c.appspot.com",
  messagingSenderId: "973708784013",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { Auth, Provider, db, storage };
