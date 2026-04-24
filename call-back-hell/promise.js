// ==========================
// HÀM GỌI API (Promise)
// ==========================
const getNewTodo = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API error");
      }
      return response.json();
    })
    .catch((err) => {
      console.log(">>> lỗi trong getNewTodo:", err);
      throw err;
    });
};

// ==========================
// CÁCH 1: GỌI TUẦN TỰ (CHAINING)
// ==========================
const runSequential = () => {
  getNewTodo(1)
    .then((data1) => {
      console.log("data1:", data1);
      return getNewTodo(2); // 🔥 phải return
    })
    .then((data2) => {
      console.log("data2:", data2);
      return getNewTodo(3); // 🔥 phải return
    })
    .then((data3) => {
      console.log("data3:", data3);
    })
    .catch((err) => {
      console.log(">>> lỗi runSequential:", err);
    });
};

// ==========================
// CÁCH 2: GỌI SONG SONG (Promise.all)
// ==========================
const runParallel = () => {
  Promise.all([getNewTodo(1), getNewTodo(2), getNewTodo(3)])
    .then(([data1, data2, data3]) => {
      console.log("data1:", data1);
      console.log("data2:", data2);
      console.log("data3:", data3);
    })
    .catch((err) => {
      console.log(">>> lỗi runParallel:", err);
    });
};

// ==========================
// CHẠY HÀM
// ==========================
runSequential();
runParallel();
