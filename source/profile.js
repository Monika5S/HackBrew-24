import { auth } from "./firebase/firebaseConfig.js";

const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");

//to update user info
async function updateUserInfo() {
  const user = auth.currentUser;
  if (user) {
    //Update user profile
    userPhoto.src =
      user.photoURL ||
      "https://img.freepik.com/free-vector/pixel-art-vacation-background_52683-86708.jpg";
    userName.textContent = user.displayName || "No name provided";
  } else {
    window.location.href = "index.html"; // Redirect to login if not authenticated
  }
}

//Initialize
auth.onAuthStateChanged((user) => {
  if (user) {
    updateUserInfo();
  } else {
    window.location.href = "index.html"; // Redirect to login if not authenticated
  }
});
