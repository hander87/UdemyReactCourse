import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hej React</h1>
        <p>Paragraf</p>
        <Person name="Hannes" age="23" />
        <Person name="Emma" age="25">My Hobbies: Racing</Person>
        <Person name="Marit" age="27" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hej React'));
  }
}

export default App;
