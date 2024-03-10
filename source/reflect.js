function createCloud(firstsample) {
  var sample = document.querySelector("textarea").value;
  if (firstsample == true) {
    sample =
      "We must shift our thinking away from short-term gain toward long-term investment and sustainability, and always have the next generations in mind with every decision we make";
  }
  if (sample.length < 5) {
    alert("please enter more than 5 words");
    return;
  }

  let container = document.querySelector(".container");
  let reflect_element = document.createElement("div");
  reflect_element.classList.add("row", "reflection", "mb-5");
  count += 1;
  reflect_element.innerHTML = `
        <div class="col-4">
          <div id="cloud-container-${count}"></div>
        </div>
        <div class="col story p-3">
          ${sample}
        </div>`;
  container.appendChild(reflect_element);
  //   document.querySelector(".story").innerHTML = sample;
  var chart = anychart.tagCloud();
  chart.data(sample, {
    mode: "byWord",
    maxItems: 50,
    ignoreItems: [
      "the",
      "be",
      "to",
      "of",
      "and",
      "a",
      "in",
      "that",
      "have",
      "it",
      "for",
      "not",
      "on",
      "with",
      "he",
      "him",
      "as",
      "you",
      "do",
      "he",
      "when",
      "where",
      "she",
      "her",
      "or",
      "an",
    ],
  });
  chart.container(`cloud-container-${count}`);
  chart.draw();
}

var count = 0;
const reflectButton = document.querySelector(".reflect");
reflectButton.addEventListener("click", createCloud);
document.querySelector(".add").addEventListener("click", (event) => {
  let symbol = event.target.innerHTML;
  event.target.innerHTML = symbol == "➖" ? "➕" : "➖";
  if (symbol == "➕") {
    document.querySelector("textarea").style.display = "block";
  } else {
    document.querySelector("textarea").style.display = "none";
  }
});
document.querySelector("textarea").style.display = "none";

createCloud(true);
