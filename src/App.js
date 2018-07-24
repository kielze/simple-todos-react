import React from 'react';
import { index, create, destroy } from './api';
import { TodoItem } from './components/TodoItem';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        <TodoItem
          title="Todo1のタイトル"
          text="Todo1のテキスト"
          createdAt="Todo1の作成日時"
        />
        <TodoItem
          title="Todo2のタイトル"
          text="Todo2のテキスト"
          createdAt="Todo2の作成日時"
        />
        {/* onClick prop に index を実行する関数を渡す */}
        <button onClick={() => index().then(json => console.log(json))}> {/* index 関数が返した json をコンソールに表示する */}
          GET /todos
        </button>
        <button onClick={() => create('title', 'text').then(json => console.log(json))}>
          POST /todos
        </button>
        <button onClick={() => destroy('cfbd1ed2-db25-43bd-aac8-3e5be9dd9e3f').then(json => console.log(json))}>
          DELETE /todos
        </button>
      </div>
    );
  }
}
