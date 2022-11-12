const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// setInterval(function, ms);
setInterval(sayHello, 5000);
