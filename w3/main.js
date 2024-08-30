function determineHouseHoldPts(numberInHousehold) {
  console.log("Inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold >= 7) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
    console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;


// global scope

determineHouseHoldPts(3)
determineHouseHoldPts(4)

// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

let sizeOfHome = 2;

if (sizeOfHome === 10) {
    console.log(`Since I live in a large house, I will add ${sizeOfHome} points to my score.`);
} else if (sizeOfHome === 7 ) {
    console.log(`Since I live in a medium-sized house, then I will add ${sizeOfHome} points to my score.`);
} else if (sizeOfHome === 4 ) {
    console.log(`Since I live in a small house, then I will add ${sizeOfHome} points to my score.`);
} else if (sizeOfHome === 2 ) {
    console.log(`Since I live in an apartment, then I will add ${sizeOfHome} points to my score.`);
} else {
    console.log(`I have entered an incorrect number of points for the size of my home.`);
}
console.log(`My new Carbon Footprint Points total is ${sizeOfHome + carbonFootprintPoints}.`);
