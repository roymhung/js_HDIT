console.log("Video70");

const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");

//random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const myTodo = {
      id: getRandomInt(1, 10000),
      name: inputTodo.value,
    };

    const currentTodoStr = localStorage.getItem("todo");

    //Da ton tai todo truoc day
    if (currentTodoStr) {
      //convert form string to object
      const currentTodo = JSON.parse(currentTodoStr);

      //push them todo
      currentTodo.push(myTodo);
      localStorage.setItem("todo", JSON.stringify(currentTodo));
    } else {
      localStorage.setItem("todo", JSON.stringify([myTodo]));
    }

    //success
    window.location.href = "video70.html";
  });
}

const generateTodoTable = () => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);

    //insert data to html
    const tbody = document.querySelector("#todoList tbody");
    if (todoList && todoList.length) {
      todoList.forEach((todo, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                
                <td>
                <button data-id=${todo.id} class="btn-delete" >Xoa</button>
                </td>
            </tr>
        `;
      });
    }
  }
};

generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");
if (deleteBtns) {
  deleteBtns.forEach((btn, index) => {
    console.log(btn, index);
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      handleDeleteTodo(id);
    });
  });
}

const handleDeleteTodo = (id) => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);

    const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);
    localStorage.setItem("todo", JSON.stringify(newTodo));

    window.location.reload();
  }
};
