import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Hannes', age: 31 },
      { name: 'Emma', age: 27 },
      { name: 'Marit', age: 21 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Clicki click!');
    // DON'T DO THIS: this.state.persons[0].name = 'Hones';
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Emma', age: 27 },
        { name: 'Marit', age: 81 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hej React</h1>
        <p>Paragraf</p>
        <button onClick={ () => this.switchNameHandler('SwitchHannes') }>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Hunnes')}>
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hej React'));
  }
}

export default App;
