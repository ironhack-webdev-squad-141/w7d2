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

  addMovie = () => {
    const newMovie = {
      hasOscars: true,
      title: "Interstellar",
      year: "2014",
      director: "Christopher Nolan",
      duration: "2h 49min",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      rate: "8.6",
      id: 31
    };

    // const updatedMovies = [newMovie, ...this.state.movies];

    const moviesCopy = [...this.state.movies];

    moviesCopy.unshift(newMovie);

    this.setState({ movies: moviesCopy });
  };

  render() {
    return (
      <div className="App">
        <MoviesList addMovie={this.addMovie} movies={this.state.movies} />
        {/* <User firstName="John" lastName="Doe" />
          <User firstName="Jane" lastName="Doe" />
          <User firstName="Michael" />
          <CounterButton /> */}
      </div>
    );
  }
}

export default App;
