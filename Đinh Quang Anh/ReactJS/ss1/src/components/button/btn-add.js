import React from "react";

class BtnAdd extends React.Component {
  render() {
    const { className, content} = this.props;
    return (
      <div className={className} onClick={this.props.addItem}>
        {content}
      </div>
    );
  }
}

export default BtnAdd;
