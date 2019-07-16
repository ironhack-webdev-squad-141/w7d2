import React, { Component } from "react";
import Movie from "./Movie";

class MoviesList extends Component {
  render() {
    const elements = this.props.movies.map(movie => {
      return <Movie key={movie.id} data={movie} />;
    });

    return <div>{elements}</div>;
  }
}

export default MoviesList;
