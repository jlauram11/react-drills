import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      displayArray: [
        "String element",
        3,
        'Another string element',
        22
      ]
    }
  }

  render() {
    let renderedArray = this.state.displayArray.map((elem, i) => {
      return <h2 key={i}>{elem}</h2>
    })

    return (
      <div className="App">
        {renderedArray}
      </div>
    );
  }
}

export default App;
