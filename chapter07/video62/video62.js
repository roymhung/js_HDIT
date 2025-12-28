console.log("video62");

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("========= 2 test promise ==========");
      resolve("roy");
    }, 2000);
  });
};

const test = myPromise();
console.log("test", test);

// console.log(myPromise);

console.log("===============  Test promise blow");
console.log("1");
myPromise().then((data) => {
  console.log("data: ", data);
  console.log("3");
});

console.log("4");
