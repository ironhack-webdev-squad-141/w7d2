import React from "react";
import "./App.css";
import User from "./components/User";
import CounterButton from "./components/CounterButton";

const App = () => {
  return (
    <div className="App">
      <User firstName="John" lastName="Doe" />
      <User firstName="Jane" lastName="Doe" />
      <User firstName="Michael" />
      <CounterButton />
    </div>
  );
};

export default App;
