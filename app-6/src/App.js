import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super ()

    this.state = {
      chores: [
        'vacuum', 
        'clean bathroom', 
        'wash dishes',
        'make dinner',
        'other chore-like thing'
      ]
    }
  }

  render() {
    const mappedChores = this.state.chores.map((chore, i) => (
        <p>{chore}</p>
      ))

    return (
      <div className="App">
        {mappedChores}
      </div>
    );
  }
}

export default App;
