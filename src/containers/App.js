import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "01kjdhssdfa", name: "Hannes", age: 31 },
      { id: "02slkjdfhic", name: "Emma", age: 27 },
      { id: "03jksdaksdd", name: "Marit", age: 21 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personInd = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personInd]
    };
    // const person = Object.assign({}, this.state.persons[personInd]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personInd] = person;

    this.setState({ perons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hej React'));
  }
}

export default App;
