import { auth } from "./firebaseConfig.js";

const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");

//to update user info
async function updateUserInfo() {
  const user = auth.currentUser;
  if (user) {
    //Update user profile
    userPhoto.src = user.photoURL || "default-profile-pic.png"; // Use a default image if no photoURL
    userName.textContent =
      user.displayName + "\n" + user.uid || "No name provided";
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
