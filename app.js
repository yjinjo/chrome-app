// app.js

function add(a, b) {
  console.log(a + b);
}

const player = {
  name: "nico",
  sayHello: function(otherPersonName) {
     console.log("hello " + otherPersonName + ". Nice to meet you");
  }
}

add(4, 2);
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
