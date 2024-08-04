import {
  auth,
  provider,
  setPersistence,
  browserLocalPersistence,
} from "./firebaseConfig.js";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const signInButton = document.getElementById("sign-in-button");
const signOutButton = document.getElementById("sign-out-button");
const profileLink = document.getElementById("profile-link");

async function handleSignIn(event) {
  event.preventDefault();
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
    updateUI();
  } catch (error) {
    console.error("Error signing in: ", error);
  }
}

async function handleSignOut(event) {
  event.preventDefault();
  try {
    await signOut(auth);
    updateUI();
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error signing out: ", error);
  }
}

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

    // Clear goals list only if it's on the current page
    const goalsList = document.querySelector(".goals-list");
    if (goalsList) {
      goalsList.innerHTML = "";
    }
  }
}

onAuthStateChanged(auth, (user) => {
  updateUI();
  if (!user && window.location.pathname !== "/index.html") {
    window.location.href = "index.html"; // Redirect to login if not authenticated
  }
});

//for ui update on page load
window.addEventListener("DOMContentLoaded", updateUI);

signInButton.addEventListener("click", handleSignIn);
signOutButton.addEventListener("click", handleSignOut);
