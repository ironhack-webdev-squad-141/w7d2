import React from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  return (
    <div className="App">
      <User firstName="John" lastName="Doe" />
      <User firstName="Jane" lastName="Doe" />
      <User firstName="Michael" />
    </div>
  );
};

export default App;
