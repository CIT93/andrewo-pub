const form = document.getElementById("form");
const output = document.getElementById("output");
const newH3 = document.createElement("h3");
const newH4 = document.createElement("h4");
const newH5 = document.createElement("h5");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const exerciseValue = form.exercise.value;
  let exercise;
  if (exerciseValue === "pullUps") {
    exercise = "Pull-Ups";
  } else if (exerciseValue === "pushUps") {
    exercise = "Push-Ups";
  } else if (exerciseValue === "sitUps") {
    exercise = "Sit-Ups";
  }
  const reps = parseInt(form.reps.value);
  const timeSeconds = parseInt(form.timeSeconds.value);
  output.innerHTML = "";
  newH3.textContent = `Start ${exercise} <> Goal = ${reps}`;
  output.appendChild(newH3);

  setTimeout(() => {
    newH4.textContent = `Stop ${exercise}`;
    output.appendChild(newH4);
  }, 3 * 1000);

  setTimeout(() => {
    newH5.textContent = "Drink Water! 😊";
    output.appendChild(newH5);
  }, 5 * 1000);
  form.reset();
});



