console.log("video lab04");

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

const btnLoginElement = document.getElementById("btnLogin");

btnLoginElement.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;

  if (username === "roy@gmail.com" && password === "123") {
    alert("Dang nhap thanh cong");
    window.location.href = "success.html";
  } else {
    alert("Username/password khong chinh xac");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
});
