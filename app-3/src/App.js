import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      stringArray: [ 
        'John was here',
        'Mary likes cats',
        'Hector found cats here',
        'Julia is fond of soccer',
        'Axel acts here often'
      ],
      userInput: '',
    }
  }

  handleChange = (event, value) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    let displayedStrings = this.state.stringArray.filter((elem, i) => {
      return elem.includes(this.state.userInput);
    })
      .map((elem, i) => {
        return <h2 key={i}>{elem}</h2>
      })

    return (
      <div className="App">
        <input onChange={this.handleChange}/>
        {displayedStrings}
      </div>
    );
  }
}

export default App;
