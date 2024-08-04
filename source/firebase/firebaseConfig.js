import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBD5vp6DUGuFNwe9Lc4QKB82OTmx74HJ_Q",
  authDomain: "my-app-12490.firebaseapp.com",
  projectId: "my-app-12490",
  storageBucket: "my-app-12490.appspot.com",
  messagingSenderId: "89300345223",
  appId: "1:89300345223:web:7470a1f09b5a458fd6f322",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  firestore,
  provider,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setPersistence,
  browserLocalPersistence,
};
