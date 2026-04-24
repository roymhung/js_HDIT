// ==========================
// HÀM GỌI API (Callback)
// ==========================
const getNewTodo = (id, callback) => {
  const request = new XMLHttpRequest();

  request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`);

  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(null, data); // thành công
    } else {
      callback("API error", null); // lỗi
    }
  };

  request.onerror = () => {
    callback("Network error", null);
  };

  request.send();
};

// ==========================
// GỌI TUẦN TỰ (Callback Hell)
// ==========================
const runCallback = () => {
  getNewTodo(1, (err, data1) => {
    if (err) {
      console.log(">>> lỗi:", err);
      return;
    }
    console.log("data1:", data1);

    getNewTodo(2, (err, data2) => {
      if (err) {
        console.log(">>> lỗi:", err);
        return;
      }
      console.log("data2:", data2);

      getNewTodo(3, (err, data3) => {
        if (err) {
          console.log(">>> lỗi:", err);
          return;
        }
        console.log("data3:", data3);
      });
    });
  });
};

runCallback();
