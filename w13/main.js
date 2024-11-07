const FORM = document.getElementById("form");
const output = document.getElementById("output");

function updateDOM(exercise, reps, time) {
  // output.innerHTML = "";
  const newH3 = document.createElement("h3");
  newH3.textContent = `Start ${exercise} <> Goal = ${reps} in ${time} seconds!`;
  output.appendChild(newH3);
}

function setTimeouts(exercise) {
  const newH4 = document.createElement("h4");
  const newH5 = document.createElement("h5");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Resolve 😊")
      newH4.textContent = `Stop ${exercise}`;
      output.appendChild(newH4);
    }, 3 * 1000);

    setTimeout(() => {
      newH5.textContent = "Drink Water! 😊";
      output.appendChild(newH5);
    }, 5 * 1000);
  });
}

function onSuccess(data) {
  console.log(`Success ${data}`)
}

function onError(errorCode) {
  console.log(`ERROR: ${errorCode}`)
}

FORM.addEventListener("submit", e => {
  e.preventDefault();
  const exercise = FORM.exercise.value;
  const reps = parseInt(FORM.reps.value);
  const time = parseInt(FORM.timeSeconds.value);

  updateDOM(exercise, reps, time);
  setTimeouts(exercise)
    .then(onSuccess)
    .catch(onError)

  FORM.reset();
});