// Hàm gọi API (có fetch bên trong)
const getNewTodo = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    // check lỗi HTTP
    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(">>> lỗi trong getNewTodo:", err);
    throw err; // đẩy lỗi ra ngoài
  }
};

// ==========================
// CÁCH 1: GỌI TUẦN TỰ
// ==========================
const runSequential = async () => {
  try {
    const data1 = await getNewTodo(1);
    console.log("data1:", data1);

    const data2 = await getNewTodo(2);
    console.log("data2:", data2);

    const data3 = await getNewTodo(3);
    console.log("data3:", data3);
  } catch (err) {
    console.log(">>> lỗi runSequential:", err);
  }
};

// ==========================
// CÁCH 2: GỌI SONG SONG (CHUẨN NHẤT)
// ==========================
const runParallel = async () => {
  try {
    const [data1, data2, data3] = await Promise.all([
      getNewTodo(1),
      getNewTodo(2),
      getNewTodo(3),
    ]);

    console.log("data1:", data1);
    console.log("data2:", data2);
    console.log("data3:", data3);
  } catch (err) {
    console.log(">>> lỗi runParallel:", err);
  }
};

// ==========================
// CHẠY HÀM
// ==========================

// chạy tuần tự
runSequential();

// chạy song song
runParallel();
