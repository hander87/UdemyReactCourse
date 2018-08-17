import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '01kjdhssdfa',name: 'Hannes', age: 31 },
      { id: '02slkjdfhic',name: 'Emma', age: 27 },
      { id: '03jksdaksdd',name: 'Marit', age: 21 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personInd = this.state.persons.findIndex( (p) => {
      p.id === id;
    });

    const person = {
      ...this.state.persons[personInd]
    };
    // const person = Object.assign({}, this.state.persons[personInd]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personInd] = person;

    this.setState( {perons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [... this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    const ourStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'aquamarine',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      ourStyle.backgroundColor = 'red';
      ourStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'orange'
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('redtext');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hej React</h1>
        <p className={classes.join(' ')}>Letsa go!</p>
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

export default Radium(App);
