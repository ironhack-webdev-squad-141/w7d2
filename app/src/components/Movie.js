import React, { Component } from "react";
import LikeButton from "./LikeButton";

export default class Movie extends Component {
  render() {
    const movie = this.props.data;
    return (
      <div>
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        {movie.rate > 9 && <p>Rating: {movie.rate}</p>}
        <LikeButton />
        <hr />
      </div>
    );
  }
}
