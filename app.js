// app.js

// without arrays
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun

// console.log(daysOfWeek);  // montuewedthufrisatsun

// with arrays
const daysOfWeekArray = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
console.log(daysOfWeekArray);

// Get Item from Array
console.log(daysOfWeekArray[4]);

// Add one more day to the array
daysOfWeekArray.push("new");
console.log(daysOfWeekArray);
