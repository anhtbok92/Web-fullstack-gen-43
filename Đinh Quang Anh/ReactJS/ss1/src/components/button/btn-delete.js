import React from "react";

class BtnDelete extends React.Component {
  render() {
    const { className, content, id } = this.props;
    return (
      <div
        className={className}
        onClick={(e) => {
          console.log(e.target.parentElement.className);
          
          this.props.deleteItem(id);
        }}
      >
        {content}
      </div>
    );
  }
}

export default BtnDelete;
