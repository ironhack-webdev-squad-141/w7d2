import React from "react";

class CounterButton extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    const nextCount = this.state.count + 1;
    this.setState({ count: nextCount });
  };

  render() {
    const { count } = this.state;
    return <button onClick={this.incrementCount}>Counter: {count}</button>;
  }
}

export default CounterButton;
