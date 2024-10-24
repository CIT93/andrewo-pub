import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import {FP} from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize) => {
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
};

// const start = (...i) => {
//   const houseHoldPTS = determineHouseHoldPts(i[2]);
//   const houseSizePts = determineHouseSizePts(i[3]);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     firstName: i[0],
//     lastName: i[1],
//     houseM: i[2],
//     houseS: i[3], 
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePts,
//     cfpTotal: total,
//     });
// }

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
}

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodChoice.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
   }
});

// const me = {
//   name: "Andrew",
//   hairColor: "Black",
//   location: "Home",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}.`)
//   }
// };


// const you = {
//   name: "Jan",
//   hairColor: "Brown",
//   location: "Office",
//   sleepScore: 55,
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}.`)
//   }
// };


// me.introduce();
// you.introduce();


// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleepScore of ${this.sleepScore}!`)
//   }
// }
// const andrew = new Human("Andrew", "Black", "Home", 95);
// const jane = new Human("Jane", "Brown", "Office", 55);
// andrew.introduce();
// jane.introduce();
// andrew.hrv = 50;