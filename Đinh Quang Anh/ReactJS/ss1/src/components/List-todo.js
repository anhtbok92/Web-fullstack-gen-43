import React from "react";
import TodoItem from "./Todo-item";

class ListTodo extends React.Component {
  render() {

    return (
      <ul>
        {this.props.list.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteItem={this.props.deleteItem}></TodoItem>
        ))}
      </ul>
    );
  }
}
export default ListTodo;
