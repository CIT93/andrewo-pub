import { FORM, NAME, SUBMIT } from "./global.js";
import { FastingSchedule } from "./class.js";
import { saveLS, getLS } from "./storage.js";
import { renderTbl } from "./table.js";

let fastingData = getLS();
let editingFields = null;

window.addEventListener("DOMContentLoaded", () => {
  renderTbl(fastingData);
});

const clearAllData = () => {
  localStorage.removeItem("fastingData");
  fastingData = [];
  renderTbl(fastingData);
}
const clearAllBtn = document.getElementById("clearAll");
clearAll.addEventListener("click", clearAllData);

const displayOutput = (currentDay, currentTime) => {
  const fsObj = new FastingSchedule(currentDay, currentTime);
  const dataEntry = {
    name: NAME.value,
    day: currentDay,
    time: currentTime,
    eatingStatus: fsObj.eatingStatus,
    hoursLeft: fsObj.hoursLeft,
  };
  if (editingFields !== null) {
    fastingData[editingFields] = dataEntry;
  } else {
    fastingData.push(dataEntry);
  }
  saveLS(fastingData);
  renderTbl(fastingData);
  FORM.reset();
  editingFields = null;
};

const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
  if (fieldId === "name" && field !== "") {
    SUBMIT.textContent = "";
  }
};

NAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const day = FORM.day.value;
  const time = parseInt(FORM.time.value);
  if (NAME.value !== "") {
    displayOutput(day, time);
  } else {
    SUBMIT.textContent = "Form requires a name";
  }
  FORM.reset();
});