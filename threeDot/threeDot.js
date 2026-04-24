console.log(">>> check file threeDot.js");

// ==========================
// 3 DẤU CHẤM (THREE DOTS)
// ==========================

// ==========================
// 1. REST PARAMS (THAM SỐ CÒN LẠI)
// ==========================
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(">>> sum(1, 2, 3):", sum(1, 2, 3)); // 6
console.log(">>> sum(4, 5):", sum(4, 5));

// ==========================
// 2. SPREAD OPERATOR (PHÉP TOÁN PHÂN TÁN)
// ==========================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// gộp mảng arr1 và arr2 thành arr3
const arr3 = [...arr1, ...arr2];
console.log(">>> arr3:", arr3); // [1, 2, 3, 4, 5, 6]

// sao chép mảng arr1 thành arr4
const arr4 = [...arr1];
console.log(">>> arr4:", arr4); // [1, 2, 3]

// TH1: Push trực tiếp vào mảng
let arr = [1, 2, 3];

arr.push(4);

console.log(arr); // [1, 2, 3, 4]
// Đây là:  thay đổi trực tiếp mảng gốc <=> mutate (thay đổi dữ liệu ban đầu)

// TH2: Copy mảng rồi mới push
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

arr2.push(4);

console.log(arr1); // [1,2,3] - mảng gốc không bị ảnh hưởng
console.log(arr2); // [1,2,3,4]
// Đây là:  tạo ra mảng mới <=> immutable (bất biến, không thay đổi dữ liệu ban đầu)

// Khi nào dùng cái nào?
// TH1: Dùng push trực tiếp khi: code đơn giản, không cần giữ dữ liệu cũ
// TH2: Dùng spread operator khi: làm React/Redux, cần giữ dữ liệu gốc, cần giữ dữ liệu cũ, tránh bug do reference
