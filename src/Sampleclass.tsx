import React, { Component } from "react";

class Sampleclass extends Component {
  state = { count: 0 };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Sample Counter </h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}> + </button>
        <button onClick={this.handleDecrement}> - </button>
      </div>
    );
  }
}

export default Sampleclass;
