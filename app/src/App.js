import React from "react";
import "./App.css";
import data from "./data";
// import User from "./components/User";
// import CounterButton from "./components/CounterButton";

class App extends React.Component {
  state = {
    movies: data
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {/* <User firstName="John" lastName="Doe" />
          <User firstName="Jane" lastName="Doe" />
          <User firstName="Michael" />
          <CounterButton /> */}
      </div>
    );
  }
}

export default App;
