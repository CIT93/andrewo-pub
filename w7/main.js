import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./renderCF.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];
let doesTBLExist = false;


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

  
FORM.addEventListener('submit', function(e){
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;

  start(firstName, lastName, houseMembers, houseSize);
  OUTPUT.innerHTML = "";

  if (!doesTBLExist) {
    renderTbl([cfpData[cfpData.length - 1]]);
    doesTBLExist = true;
  } else {
    renderTbl([cfpData[cfpData.length - 1]]);
  }
  //displayOutput();
  //renderTbl(cfpData);
  FORM.reset();
});

