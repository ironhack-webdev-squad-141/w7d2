import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const movie = this.props.data;
    return (
      <div>
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.rate}</p>
        <hr />
      </div>
    );
  }
}
