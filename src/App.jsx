import React, { Component } from "react";
import "./App.css";
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>1st Assignment</h2>
        <UserOutput userName="Mad Farmer"/>
        <UserOutput userName="Felga" />
        <UserInput />
      </div>
    );
  }
}

export default App;
