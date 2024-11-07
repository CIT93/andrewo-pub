const FORM = document.getElementById("form");
const output = document.getElementById("output");

const updateDOM = (exercise, reps, time) => {
  // output.innerHTML = "";
  const newH3 = document.createElement("h3");
  newH3.textContent = `Start ${exercise} <> Goal = ${reps} in ${time} seconds!`;
  output.appendChild(newH3);
}

const setTimeouts = (exercise, reps) => {
  const newH4 = document.createElement("h4");
  return new Promise((resolve, reject) => {
    if (reps === 0) {
      reject(`Error on Reps selection`);
    } else {
      setTimeout(() => {
        newH4.textContent = `Stop ${exercise}`;
        output.appendChild(newH4);
        resolve(`Stop ${exercise}`);
      }, 3 * 1000);
    }
  });
};

function onSuccess(data) {
  console.log(`Success ${data}`)
}

function onError(error) {
  const newH3 = document.createElement("h3");
  newH3.textContent = `ERROR: ${error}`
  output.appendChild(newH3);
  console.log(`ERROR: ${error}`)
}

FORM.addEventListener("submit", e => {
  e.preventDefault();
  const exercise = FORM.exercise.value;
  const reps = parseInt(FORM.reps.value);
  const time = parseInt(FORM.timeSeconds.value);

  updateDOM(exercise, reps, time);
  setTimeouts(exercise, reps)
    .then(onSuccess)
    .catch(onError)

  FORM.reset();
})