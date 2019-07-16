import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      <Login />
    </div>
  );
};

export default App;
