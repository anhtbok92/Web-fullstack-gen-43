import React from "react";
import InputBasic from "./input/Input-basic";
import BtnAdd from "./button/btn-add";

class AddTodo extends React.Component {
  state = {
    content: "",
  };
  onInputChange = (e) => {
    this.setState({ content: e.target.value });
  };
  addItem = () => {
    if (this.state.content !== "") {
      this.props.addItem(this.state.content);
      this.setState({ content: "" });
    }
  };

  render() {
    return (
      <div className="add-box">
        <InputBasic
          content={this.state.content}
          onInputChange={this.onInputChange}
          placeholder="Enter something ..."
          addItem={this.addItem}
        />
        <BtnAdd className="btn btn-add" content="Add" addItem={this.addItem} />
      </div>
    );
  }
}

export default AddTodo;
