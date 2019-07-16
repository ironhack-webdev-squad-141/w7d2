import React, { Component } from "react";
import "./App.css";
import data from "./data";
import MoviesList from "./components/MoviesList";
// import User from "./components/User";
// import CounterButton from "./components/CounterButton";

class App extends Component {
  state = {
    movies: data
  };

  render() {
    return (
      <div className="App">
        <MoviesList movies={this.state.movies} />
        {/* <User firstName="John" lastName="Doe" />
          <User firstName="Jane" lastName="Doe" />
          <User firstName="Michael" />
          <CounterButton /> */}
      </div>
    );
  }
}

export default App;
