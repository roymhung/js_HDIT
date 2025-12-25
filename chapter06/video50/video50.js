console.log("video50");

const element = document.getElementById("myBtn");

// case1:

// element.addEventListener("click", function () {
//   console.log("you click a button");
// });

// case2:

const handleClickBtn = () => {
  console.log("you click a button");
};

element.addEventListener("click", handleClickBtn);

// su khac nhau nho giua
// 1) function(): luc nay fun phai thuc thi ngay lap tuc
// 2) function: luc nay fun chi phai thuc thi khi co tac dong vao

console.log(element);
