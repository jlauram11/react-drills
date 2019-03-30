import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
    }
  }

  handleChange = (event, value) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <span>Input Text Here</span>
        <textarea 
          type='text'
          onChange={this.handleChange}/>
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;
