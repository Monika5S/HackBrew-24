import {
  auth,
  firestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
} from "./firebase/firebaseConfig.js";

async function removeGoal(goalId) {
  if (auth.currentUser) {
    const goalRef = doc(
      firestore,
      "users",
      auth.currentUser.uid,
      "goals",
      goalId
    );
    await deleteDoc(goalRef);
  }

  let lantern = document.querySelector(`.goal-${count}`);
  lantern.style.display = "none";
  count -= 1;
  displayGoalList();
}

function litAlantern() {
  let lantern = document.querySelector(`.goal-${count}`);
  lantern.style.display = "block";
}

async function displayGoalList() {
  const user = auth.currentUser;
  if (user) {
    let goals_list = document.querySelector(".goals-list");
    goals_list.innerHTML = "";
    try {
      const goalsStorage = await getDocs(
        collection(firestore, "users", user.uid, "goals")
      );

      goalsStorage.forEach((doc) => {
        const goal = doc.data().goal;

        let goal_element = document.createElement("div");
        goal_element.classList.add("goal");
        goal_element.innerHTML = `<h4>🏮 ${goal} </h4>`;
        let bt = document.createElement("button");
        bt.classList.add("acheived");
        bt.innerHTML = "Acheived 🎯";
        bt.addEventListener("click", () => removeGoal(doc.id)); //doc.id to get refrenece of particular goal
        goal_element.appendChild(bt);
        goals_list.append(goal_element);
      });
    } catch (error) {
      console.error("Error fetching goals: ", error);
    }
  }
}

async function setGoal() {
  const user = auth.currentUser;
  if (user) {
    console.log(count);
    if (count == 5) {
      alert("⚡You can add max 5 goals!⚡");
      return;
    }

    let goalInput = document.querySelector("input");
    const goal = goalInput.value;
    if (goal) {
      try {
        await addDoc(collection(firestore, "users", user.uid, "goals"), {
          goal,
        });
        goalInput.value = "";

        //increase counter
        count += 1;
        litAlantern();

        displayGoalList();
      } catch (error) {
        console.error("Error adding goal: ", error);
      }
    }
  } else {
    alert("You must be signed in to add goals.");
  }
}

function closeList(event) {
  event.target.parentNode.style.display = "none";
}

var count = 0;
//display list only if user is signed in

let goal_ele = document.querySelector(".add-goal");
goal_ele.addEventListener("click", setGoal);

let view_ele = document.querySelector(".view");

displayGoalList();
view_ele.addEventListener("click", () => {
  document.querySelector(".goals-list-wrapper").style.display = "block";
});

document.querySelector(".close").addEventListener("click", closeList);
