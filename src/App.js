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
    otherState: 'Some other value',
    showPersons: false
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Hannes', age: 31 },
        { name: event.target.value, age: 27 },
        { name: 'Marit', age: 21 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    const ourStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Hunnes')}
            changed={this.nameChangeHandler}>
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hej React</h1>
        <p>Letsa go!</p>
        <button
          style={ourStyle}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hej React'));
  }
}

export default App;
