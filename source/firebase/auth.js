import { auth, provider } from "./firebaseConfig.js";
import {
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const signInButton = document.getElementById("sign-in-button");
const signOutButton = document.getElementById("sign-out-button");
const profileLink = document.getElementById("profile-link");

signInButton.addEventListener("click", async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
    updateUI();
  } catch (error) {
    console.error("Error signing in: ", error);
  }
});

signOutButton.addEventListener("click", async () => {
  try {
    await signOut(auth);
    updateUI();
  } catch (error) {
    console.error("Error signing out: ", error);
  }
});

function updateUI() {
  const user = auth.currentUser;
  if (user) {
    signInButton.style.display = "none";
    signOutButton.style.display = "block";
    profileLink.style.display = "block";
    profileLink.href = "profile.html";
  } else {
    signInButton.style.display = "block";
    signOutButton.style.display = "none";
    profileLink.style.display = "none";
  }
}

// Initial UI update
updateUI();
