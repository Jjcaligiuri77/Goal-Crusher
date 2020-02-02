document.addEventListener("DOMContentLoaded", function() {
  let todoForm = document.getElementById("newTodoForm");
  let todoList = document.getElementById("todoList");

  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "Crush It!";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("task").value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();
  });

  todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });
});


function randomRGB(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}
const h3 = document.querySelector("h3");

h3.style.color = "red";
setInterval(function () {
  h3.style.color = randomRGB();
}, 500);

const letters = document.querySelectorAll(".letter");

setInterval(function () {
for(let letter of letters) {
   letter.style.color = randomRGB();
  }
}, 750);
