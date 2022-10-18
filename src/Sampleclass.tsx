import React, { Component } from "react";
type Mystate = {
  count: number;
};
class Sampleclass extends Component<Mystate> {
  state: Mystate = { count: 0 };
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
