import React, { Component } from "react";

class MoviesList extends Component {
  render() {
    console.log(this.props);

    const elements = this.props.movies.map(movie => {
      return (
        <div key={movie.id}>
          <p>Title: {movie.title}</p>
          <p>Director: {movie.director}</p>
          <p>Rating: {movie.rate}</p>
          <hr />
        </div>
      );
    });

    return <div>{elements}</div>;
  }
}

export default MoviesList;
