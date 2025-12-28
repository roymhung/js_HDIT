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
