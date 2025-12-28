console.log("video64");

const doSomething = () => {
  const a = 10,
    b = 0;

  if (b === 0) {
    throw new Error("Thuc hien chia cho 0");
  }

  return a / b;
};

try {
  doSomething();
} catch (error) {
  console.log("Co loi xay ra", error);
}
