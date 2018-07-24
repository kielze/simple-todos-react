import React from 'react';
import { index, create, destroy } from './api';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        {/* onClick prop に index を実行する関数を渡す */}
        {/* onClick に渡す関数のことをイベントハンドラと呼んだりします */}
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
