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
      filteredStrings: [],
    }
  }

  handleChange = (event, value) => {
    this.setState({
      userInput: event.target.value
    })
  }

  filterArray = (userInput) => {
    let filteredStrings = [];

    for (let i = 0; i< filteredStrings.length; i++) {
      let elem = filteredStrings[i];
      if (elem.includes(`${userInput}`)) {
        filteredStrings.push(elem)
      }
    }
    return this.setState({
      filteredStrings: filteredStrings
    })
    
  }

  render() {

    return (
      <div className="App">
        <input onChange={this.handleChange}/>
        <button onClick={this.filterArray(this.state.userInput)}>Filter</button>
        <span>{this.state.filteredStrings}</span>
      </div>
    );
  }
}

export default App;
