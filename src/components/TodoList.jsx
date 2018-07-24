import React from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {

  render() {
    const todosUpdater = this.props.todosUpdater;
    const todos = this.props.todos;
    return (
      <div>
        <h3>Todo List</h3>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>テキスト</th>
              <th>作成日時</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                text={todo.text}
                createdAt={todo.created_at}
                id={todo.id}
                todosUpdater={todosUpdater}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
