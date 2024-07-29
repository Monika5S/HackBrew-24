import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD72Ui-9O9qb1OhX3rgktbGVgqeb70BIds",
  authDomain: "litalamp-98a3d.firebaseapp.com",
  projectId: "litalamp-98a3d",
  storageBucket: "litalamp-98a3d.appspot.com",
  messagingSenderId: "189443806144",
  appId: "1:189443806144:web:79ceba1ee1709448c0ae25",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, firestore, provider, collection, addDoc, getDocs };
