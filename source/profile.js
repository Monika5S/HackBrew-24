import { auth } from "./firebase/firebaseConfig.js";

const userPhoto = document.querySelector("#user-photo");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
async function updateUserInfo() {
  const user = auth.currentUser;
  if (user) {
    userPhoto.src =
      user.photoURL ||
      "https://img.freepik.com/free-vector/pixel-art-vacation-background_52683-86708.jpg";
    userName.textContent = user.displayName || "No name provided";
    userEmail = user.email || "No email provided";
  } else {
    console.log("No user signed in");
  }
}

//to redirect to home page if not authenticated
auth.onAuthStateChanged((user) => {
  if (user) {
    updateUserInfo();
  } else {
    window.location.href = "index.html";
  }
});
