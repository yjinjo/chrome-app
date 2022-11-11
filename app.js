// app.js

const h1 = document.querySelector(".hello h1");


function handleTitleClick() {
  const clickedClass = "clicked sexy-font";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
