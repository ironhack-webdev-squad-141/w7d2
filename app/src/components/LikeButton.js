import React from "react";

class LikeButton extends React.Component {
  state = {
    liked: false
  };

  handleClick = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {/* condition ? true : false */}
        {this.state.liked ? "Unlike" : "Like"}
      </button>
    );

    // if (this.state.liked) {
    //   return <button onClick={this.handleClick}>Unlike</button>;
    // } else {
    //   return <button onClick={this.handleClick}>Like</button>;
    // }
  }
}

export default LikeButton;
