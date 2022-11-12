const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";  // 입력하고 나면 입력창을 비움. 
}

// form 태그가 submit 할 때 새로고침 event를 발생시키므로 이를 처리할 방법이 있어야 한다.
toDoForm.addEventListener("submit", handleToDoSubmit);
