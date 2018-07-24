import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
