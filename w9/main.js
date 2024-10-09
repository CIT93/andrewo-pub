import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize, 
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
    });
}

renderTbl(cfpData);
  

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const errorElement = document.getElementById('error');
  let messages = []
  if (firstName.value === '' || firstName.value == null) {
    //messages.push('Name is required')
  }
  if (firstName.value === '' || firstName.value == null) {
    //messages.push('Name is required')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.textContent = messages.join(', ');
  }
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
})

