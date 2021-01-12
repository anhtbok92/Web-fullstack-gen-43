import React from "react";

class Loading extends React.Component {
  timingLoader = () => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.querySelector(".todo-app").style.display = "block";
    }, 2000);
  };

  render() {
    return (
      <div id="loader" onLoad={this.timingLoader()}>
        <div className="child"></div>
      </div>
    );
  }
}

export default Loading;
