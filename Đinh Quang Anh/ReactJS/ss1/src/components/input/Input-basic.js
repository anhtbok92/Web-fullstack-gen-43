import React from "react";

class InputBasic extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.content}
        placeholder={this.props.placeholder}
        onChange={this.props.onInputChange}
      />
    );
  }
}

export default InputBasic;
