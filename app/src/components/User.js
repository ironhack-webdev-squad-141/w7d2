import React from "react";
import LikeButton from "./LikeButton";

class User extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName
  };

  clickHandler = () => {
    this.setState({
      firstName: this.state.firstName.toUpperCase(),
      lastName: this.state.lastName.toUpperCase()
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
        {/* <button onClick={this.clickHandler}>click me</button> */}
        <LikeButton />
      </div>
    );
  }
}

export default User;
