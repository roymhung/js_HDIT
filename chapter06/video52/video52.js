console.log("video52");

const myTextElement = document.getElementById("myText");

const myBtnElement = document.getElementById("myBtn");

const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
  //   console.log("You click my button");
  //   myTextElement.innerHTML = "Just the content hoang tu 34";

  myTextElement.innerHTML =
    "<strong>Chào bạn, </strong><em>học lập trình với hoang tu 34!</em>";
});

backBtnElement.addEventListener("click", () => {
  myTextElement.innerText = "Video 52";
});
