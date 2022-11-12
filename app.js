// app.js

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked!!");
}

loginForm.addEventListener("submit", onLoginSubmit);
// JS는 누군가 링크를 클릭할 때 인자에 해당하는 함수를 실행할 것이다. 
link.addEventListener("click", handleLinkClick);
