import React from 'react';
import { destroy } from '../api';

export class TodoItem extends React.Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const createdAt = this.props.createdAt;
    const id = this.props.id;
    return (
      <tr>
        <td>{title}</td>
        <td>{text}</td>
        <td>{createdAt}</td>
        <td>
          <button onClick={() => destroy(id).then(() => window.history.go())}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
