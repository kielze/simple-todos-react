const ENDPOINT = 'http://localhost:3000';

// `GET /todos` をリクエストする関数を用意する
export const index = () =>
  fetch(`${ENDPOINT}/todos`)
    .then(response => response.json())

// `POST /todos` をリクエストする関数を用意する
export const create = (
  title,
  text,
) =>
  // fetch の第二引数で HTTP リクエストの設定を持つオブジェクトを渡す
  fetch(`${ENDPOINT}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, title }),
  }).then(response => response.json());

export const destroy = (
  todoId,
) =>
  fetch(`${ENDPOINT}/todos/${todoId}`, {
    method: 'DELETE',
  }).then(response => response.json());
