function setGoal() {
  count += 1;
  let goal = prompt("write your First Goal");
  goals[`goal-${count}`] = goal;
  let lantern = document.querySelector(`.goal-${count}`);
  lantern.style.display = "block";
}

var goals = {},
  count = 0;

add_button = document.querySelector(".add");
add_button.addEventListener("click", setGoal);
remove_button = document.querySelector(".remove");
remove_button.addEventListener("click", removeGoal);
