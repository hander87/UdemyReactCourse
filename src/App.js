import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textValue: '',
    textArray: []
  }

  changeTextHandler = (event) => {
    this.setState({ textValue: event.target.value })

    let currentText = event.target.value;
    let currentTextArray = currentText.split('');

    this.setState({
      textArray: currentTextArray
    })
  }

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.textArray];
    letters.splice(letterIndex, 1);

    this.setState({
      textValue: letters.join(''),
      textArray: letters
    });
  }

  render() {
    const charComponent = this.state.textArray.map((letter, index) => {
      return (<CharComponent
                letter={this.state.textArray[index]}
                click={() => this.deleteLetterHandler(index)}
                key={(index)}
              />)
    });

    return (
      <div className="App">
        <input type="text" value={this.state.textValue} onChange={this.changeTextHandler} />
        <p>{this.state.textValue.length}</p>
        <ValidationComponent textLength={this.state.textValue.length} />
        {charComponent}
        <ol>
          <li style={{color:'green'}}>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li style={{color:'green'}}>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li style={{color:'green'}}>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li style={{color:'green'}}>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li style={{color:'green'}}>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li style={{color:'green'}}>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
