// How to Calculate Your Carbon Footprint 
// Method 1 - Calculating Your Carbon Footprint Points

// 1. Count the members of your household
const myHouseholdMembers = 8;
// 2. Consider the size of your home.
const myHomeSize = 2;
// 3. Evaluate your food choices. 
const myFoodChoices = 16;
// 4. Examine your water consumption.
const myWaterConsumpt = 2;
// 5. Determine how many household purchases you make each year.
const myPurchases = 2;
// 6. Consider how much waste you produce.
const myWaste = 50;
// 7. Identify the amount of waste that you recycle.
const myRecycledWaste = 20;
// 8. Tally up your annual transportation scores.
const myTransportation = 10;
// 9. Add up your points.
const cfpTotal = myHouseholdMembers + myHomeSize + myFoodChoices + myWaterConsumpt + myPurchases + myWaste + myRecycledWaste + myTransportation;
// 10. Write JS to update the rendered html (index.html) with total footprint.
const myHeading = document.querySelector("h2");
myHeading.textContent = cfpTotal;