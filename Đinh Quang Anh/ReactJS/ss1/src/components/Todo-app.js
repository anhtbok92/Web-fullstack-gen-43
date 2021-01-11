import React from "react";
import AddTodo from "./Add-Todo";
import Header from "./layout/Header";
import ListTodo from "./List-todo";
import { v4 as uuidv4 } from "uuid";

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: "3rjkn-3803-ghiwe4oewo4gy",
        content: "Hello, Welcome to ATodo",
      }
    ],
  };
  addItem = (val) => {
    val = {
      id: uuidv4(),
      content: val,
    };
    this.setState({
      todos: [...this.state.todos, val],
    });
  };
  deleteItem = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  render() {
    return (
      <div className="todo-app">
        <Header />
        <AddTodo addItem={this.addItem} />
        <ListTodo list={this.state.todos} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default TodoApp;
