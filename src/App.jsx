import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    userNames: [{ userName: "Mad Farmer" }, { userName: "Felga" }],
  };
  render() {
    return (
      <div className="App">
        <h2>1st Assignment</h2>
        <UserOutput userName={this.state.userNames[0].userName} />
        <UserOutput userName={this.state.userNames[1].userName} />
        <UserInput />
      </div>
    );
  }
}

export default App;
