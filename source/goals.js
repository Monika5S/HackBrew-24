import {
  auth,
  firestore,
  collection,
  addDoc,
  getDocs,
} from "./firebaseConfig.js";

function removeGoal(event) {
  event.target.parentNode.remove();
  let lantern = document.querySelector(`.goal-${count}`);
  lantern.style.display = "none";
  // console.log(count);
  count -= 1;
}

function litAlantern() {
  let lantern = document.querySelector(`.goal-${count}`);
  lantern.style.display = "block";
}

function updateGoalList() {
  let goals_list = document.querySelector(".goals-list");
  let el = document.createElement("div");
  el.classList.add("goal");
  el.innerHTML = `
        <h4>🏮 ${goals[count]}</h4>
      `;

  let bt = document.createElement("button");
  bt.classList.add("acheived");
  bt.innerHTML = "Acheived 🎯";
  bt.addEventListener("click", removeGoal);
  el.appendChild(bt);

  goals_list.append(el);
}

function setGoal() {
  if (count >= 5) {
    alert("⚡You can add max 5 goals!⚡");
    return;
  }

  let inputElement = document.querySelector("input");
  count += 1;
  goals[count] = inputElement.value;
  litAlantern();
  updateGoalList();
  inputElement.value = "";

  // console.log(count);
}

function closeList(event) {
  event.target.parentNode.style.display = "none";
}

var goals = {},
  count = 0;

let goal_ele = document.querySelector(".add-goal");
goal_ele.addEventListener("click", setGoal);

let view_ele = document.querySelector(".view");
view_ele.addEventListener("click", () => {
  document.querySelector(".goals-list").style.display = "block";
});

document.querySelector(".close").addEventListener("click", closeList);
