import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index} 
      clicked = {() => this.deleteCharHandler(index)}
      />
    })
    return (
      <div className="App">
        <ol>
          <li>Create an input field with a change listener which outputs the length of the entered text below it.</li>
          <li>Create a new component which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length</li>
          <li>Create another component and style it as an inline box</li>
          <li>Render a list of CharComponents where each CharComponent receives a diffenrent letter of the entered text as a prop</li>
          <li>When you click a CharComponent, it should be removed from the entered text</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}
export default App;
