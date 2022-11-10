// app.js

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  power: function(a, b) {
    return a ** b;
  }
}


const age = 96;
function calculateKorAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const korAge = calculateKorAge(age);
console.log(korAge);
