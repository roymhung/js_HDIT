console.log("Video63");

// fetch

const temp = fetch("http://localhost:8000/users");

// const d = temp.then((data) => data.json);
// console.log(d);

// temp.then((data) => {
//   console.log(data);
// });

temp.then((data) => data.json()).then((d) => console.log(d));
// .then lần thứ nhất Promise {<pending>} => Promise<JSON>
// .then lần thứ hai JSON => ARRAY(OBJ)

// JSON

// [
//   { "id": 1, "name": "Roy" },
//   { "id": 2, "name": "Hung" }
// ]

// =====>

// ARRAY chứa OBJECT

// [
//   { id: 1, name: "Roy" },
//   { id: 2, name: "Hung" }
// ]
