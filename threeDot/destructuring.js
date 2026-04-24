console.log(">>> check file destructuring.js");

// ==========================
//  Giản Lược Hóa Cùng Destructuring Assignment
// ==========================

// 1. DESTRUCTURING dùng để làm gì?

// Không dùng (dài + lặp)
let name = state.name;
let address = state.address;

//  Dùng destructuring
let { name, address } = state;
// Lợi ích: code ngắn hơn, dễ đọc hơn, đỡ lặp code, đỡ lỗi khi gõ sai tên biến, dễ lấy dữ liệu nested (lồng nhau). Đỡ lặp state.name, state.address, state.channel, ... khi bạn cần lấy nhiều thuộc tính từ cùng một object.

// ==========================
// OBJECT + DESTRUCTURING
// ==========================
let state = {
  name: "Eric",
  address: "Ha Noi",
  channel: "HoiDanIT",
};

// bạn đang log sai
console.log(">>> state:", state);

//  cách viết tay (comment lại cho bạn thấy)
// let name = state.name;
// let address = state.address;
// let channel = state.channel;

//  destructuring object (chuẩn)
let { name, address, channel } = state;

console.log(">>> name:", name);
console.log(">>> address:", address);
console.log(">>> channel:", channel);

// ==========================
// ARRAY + DESTRUCTURING
// ==========================
let arr = ["Eric", "Hoi Dan IT"];

//  destructuring array
let [nameArr, channelArr] = arr;

console.log(">>> nameArr:", nameArr);
console.log(">>> channelArr:", channelArr);

// ==========================
// COPY OBJECT (SPREAD)
// ==========================
let newState = { ...state, age: 25 };

console.log(">>> state gốc:", state);
console.log(">>> state mới:", newState);
