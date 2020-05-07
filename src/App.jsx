import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    userNames: [{ userName: "Mad Farmer" }, { userName: "Felga" }],
  };

  changeFirstUserNameHandler = (event) => {
    this.setState({
      userNames: [
        { userName: event.target.value },
        { userName: this.state.userNames[1].userName },
      ],
    });
  };

  changeSecondUserNameHandler = (event) => {
    this.setState({
      userNames: [
        { userName: this.state.userNames[0].userName },
        { userName: event.target.value },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h2>1st Assignment</h2>
        <UserOutput userName={this.state.userNames[0].userName} />
        <UserInput
          userName={this.state.userNames[0].userName}
          changed={this.changeFirstUserNameHandler}
        />
        <UserOutput userName={this.state.userNames[1].userName} />
        <UserInput
          userName={this.state.userNames[1].userName}
          changed={this.changeSecondUserNameHandler}
        />
      </div>
    );
  }
}

export default App;
