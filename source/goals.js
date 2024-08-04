import {
  auth,
  firestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
} from "./firebase/firebaseConfig.js";

//to hide all lanterns
function hideAllLanterns() {
  for (let i = 1; i <= 5; i++) {
    document.querySelector(`.lantern.goal-${i}`).style.display = "none";
  }
}

//to show a specific lantern
function showLantern(index) {
  document.querySelector(`.lantern.goal-${index}`).style.display = "block";
}

//to update the goal list and lanterns
async function displayGoalList() {
  const user = auth.currentUser;
  if (user) {
    let goals_list = document.querySelector(".goals-list");
    goals_list.innerHTML = "";

    hideAllLanterns();

    try {
      const goalsStorage = await getDocs(
        collection(firestore, "users", user.uid, "goals")
      );

      let count = 0; //to track the number of goals
      goalsStorage.forEach((doc) => {
        const goal = doc.data().goal;

        goals_list.appendChild(createGoalElement(doc.id, goal));
        showLantern(count + 1);

        count++;
      });
    } catch (error) {
      console.error("Error fetching goals: ", error);
    }
  }
}

function createGoalElement(goalId, goalText) {
  const goal_element = document.createElement("div");
  goal_element.classList.add("goal");
  goal_element.innerHTML = `<h4>🏮 ${goalText} </h4>`;

  const button = document.createElement("button");
  button.classList.add("achieved");
  button.innerHTML = "Achieved 🎯";
  button.addEventListener("click", () => removeGoal(goalId));

  goal_element.appendChild(button);
  return goal_element;
}

//function to add a goal to firestore
async function setGoal() {
  const user = auth.currentUser;
  if (user) {
    if (document.querySelectorAll(".goal").length >= 5) {
      alert("⚡You can add a maximum of 5 goals!⚡");
      return;
    }

    const goalInput = document.querySelector("input");
    const goal = goalInput.value;
    if (goal) {
      try {
        await addDoc(collection(firestore, "users", user.uid, "goals"), {
          goal,
        });
        goalInput.value = "";
        displayGoalList();
      } catch (error) {
        console.error("Error adding goal: ", error);
      }
    }
  } else {
    alert("You must be signed in to add goals.");
  }
}

async function removeGoal(goalId) {
  const user = auth.currentUser;
  if (user) {
    try {
      await deleteDoc(doc(firestore, "users", user.uid, "goals", goalId));
      displayGoalList();
    } catch (error) {
      console.error("Error removing goal: ", error);
    }
  }
}

function closeList(event) {
  event.target.parentNode.style.display = "none";
}

document.querySelector(".add-goal").addEventListener("click", setGoal);

document.querySelector(".view").addEventListener("click", () => {
  document.querySelector(".goals-list-wrapper").style.display = "block";
});

document.querySelector(".close").addEventListener("click", closeList);

//if user not authenticated redirecting them to homepage
auth.onAuthStateChanged((user) => {
  if (user) {
    displayGoalList();
  }
  if (!user && window.location.pathname !== "/index.html") {
    window.location.href = "index.html"; // Redirect to login if not authenticated
  }
});

//to show previous and current goals on page load
window.addEventListener("DOMContentLoaded", displayGoalList);
