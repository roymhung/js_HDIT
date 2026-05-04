// 1. Dùng Promise (.then()) → bắt đầu “đau”
fetch("http://localhost:8000/users/1")
  .then((res) => res.json())
  .then((user) => {
    return fetch(`http://localhost:8000/posts?userId=${user.id}`)
      .then((res) => res.json())
      .then((posts) => {
        return Promise.all(
          posts.map((post) => {
            return fetch(`http://localhost:8000/comments?postId=${post.id}`)
              .then((res) => res.json())
              .then((comments) => {
                return {
                  post,
                  comments,
                };
              });
          }),
        );
      });
  })
  .then((result) => {
    console.log("FINAL:", result);
  })
  .catch((err) => console.error(err));

// 2. Dùng async/await → code đẹp hơn, dễ đọc hơn, dễ debug hơn
const fetchData = async () => {
  try {
    const userRes = await fetch("http://localhost:8000/users/1");
    const user = await userRes.json();

    const postRes = await fetch(
      `http://localhost:8000/posts?userId=${user.id}`,
    );
    const posts = await postRes.json();

    const result = await Promise.all(
      posts.map(async (post) => {
        const commentRes = await fetch(
          `http://localhost:8000/comments?postId=${post.id}`,
        );
        const comments = await commentRes.json();

        return {
          post,
          comments,
        };
      }),
    );

    console.log("FINAL:", result);
  } catch (err) {
    console.error(err);
  }
};

fetchData();

// 3. Output sẽ giống như này:

FINAL: [
  {
    post: { id: 1, title: "Post A", userId: 1 },
    comments: [{ id: 101, postId: 1, content: "Nice!" }],
  },
  {
    post: { id: 2, title: "Post B", userId: 1 },
    comments: [
      // comments của post 2 (nếu có)
    ],
  },
];

// 1. Dùng Promise (.then()) → bắt đầu “đau”
fetch("http://localhost:8000/users/1")
  // OUTPUT: Promise<Response> (chưa có data)

  .then((res) => res.json())
  // OUTPUT: user (object)
  // ví dụ: user (object) : { id: 1, name: "An" }

  // Khi đã lấy được user(user chính là kết quả từ API /users/1) Thì truyền user vào function này để tiếp tục call API lấy posts của user đó
  .then((user) => {
    return (
      fetch(`http://localhost:8000/posts?userId=${user.id}`) // ví dụ: user (object) : { id: 1, name: "An" }
        // OUTPUT: Promise<Response> (chưa phải posts)

        .then((res) => res.json())
        // OUTPUT: posts (array)
        // ví dụ: [ {id:1, title:"A"}, {id:2, title:"B"} ]

        .then((posts) => {
          return Promise.all(
            posts.map((post) => {
              // OUTPUT của map: array các Promise

              return (
                fetch(`http://localhost:8000/comments?postId=${post.id}`)
                  // OUTPUT: Promise<Response>

                  .then((res) => res.json())
                  // OUTPUT: comments (array)

                  .then((comments) => {
                    return {
                      post,
                      comments,
                    };
                    // OUTPUT: object { post, comments }
                  })
              );
            }),
          );
          // OUTPUT: Promise<Array<{post, comments}>>
        })
    );
  })

  .then((result) => {
    // OUTPUT: result (array đã resolve xong)

    console.log("FINAL:", result);
    // IN RA:
    // [
    //   { post: {...}, comments: [...] },
    //   { post: {...}, comments: [...] }
    // ]
  })

  .catch((err) => console.error(err));

// 2. Dùng async/await → code đẹp hơn, dễ đọc hơn, dễ debug hơn
const fetchData = async () => {
  try {
    const userRes = await fetch("http://localhost:8000/users/1");
    // OUTPUT: Response object (HTTP response)

    const user = await userRes.json();
    // OUTPUT: user (object)
    // ví dụ: { id: 1, name: "An" }

    const postRes = await fetch(
      `http://localhost:8000/posts?userId=${user.id}`,
    );
    // OUTPUT: Response object

    const posts = await postRes.json();
    // OUTPUT: posts (array)
    // ví dụ: [ {id:1, title:"A"}, {id:2, title:"B"} ]

    const result = await Promise.all(
      posts.map(async (post) => {
        // OUTPUT của map: array các Promise (vì async)

        const commentRes = await fetch(
          `http://localhost:8000/comments?postId=${post.id}`,
        );
        // OUTPUT: Response object

        const comments = await commentRes.json();
        // OUTPUT: comments (array)

        return {
          post,
          comments,
        };
        // OUTPUT: object { post, comments }
      }),
    );
    // OUTPUT: result (array đã resolve xong)
    // [
    //   { post: {...}, comments: [...] },
    //   { post: {...}, comments: [...] }
    // ]

    console.log("FINAL:", result);
    // IN RA toàn bộ result
  } catch (err) {
    console.error(err);
    // OUTPUT: lỗi (nếu có)
  }
};

fetchData();
// OUTPUT: Promise<void> (nhưng không dùng tới)
