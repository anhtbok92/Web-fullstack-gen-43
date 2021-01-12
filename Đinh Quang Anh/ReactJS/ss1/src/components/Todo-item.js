import React from "react";
import BtnDelete from "./button/btn-delete";
class TodoItem extends React.Component {
  render() {
    const { id, content } = this.props.todo;
    return (
      <li className="todo-item">
        <div className="content">{content}</div>
        <BtnDelete
          className="btn btn-delete"
          content="Delete"
          id={id}
          deleteItem={this.props.deleteItem}
        />
      </li>
    );
  }
}

export default TodoItem;
