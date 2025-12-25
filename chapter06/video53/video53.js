console.log("Video 53");

const myTextElement = document.getElementById("myText");

const myBtnElement = document.getElementById("myBtn");

const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
  console.log("Click me Change color");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "yellow";
  myTextElement.classList.add("royhung", "hoangtu34");
});

backBtnElement.addEventListener("click", () => {
  console.log("Click me Change back");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "unset";
  myTextElement.classList.remove("royhung", "hoangtu34");
});
