import React from 'react';

export class TodoItem extends React.Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const createdAt = this.props.createdAt;
    return (
      <tr>
        {/* とりあえず今はべた書きで書いておく */}
        <td>{title}</td>
        <td>{text}</td>
        <td>{createdAt}</td>
      </tr>
    );
  }
}
