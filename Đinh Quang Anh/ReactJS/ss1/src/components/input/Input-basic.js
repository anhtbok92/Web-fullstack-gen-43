import React from "react";

class InputBasic extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.content}
        placeholder={this.props.placeholder}
        onChange={this.props.onInputChange}
        onKeyDown={(e) => {
          if (e.keyCode === 13) this.props.addItem();
        }}
      />
    );
  }
}

export default InputBasic;
