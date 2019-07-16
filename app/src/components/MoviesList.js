import React, { Component } from "react";
import Movie from "./Movie";

class MoviesList extends Component {
  render() {
    const elements = this.props.movies.map(movie => {
      return <Movie key={movie.id} data={movie} />;
    });

    return (
      <div>
        <button onClick={this.props.addMovie}>Add Movie</button>
        {elements}
      </div>
    );
  }
}

export default MoviesList;
