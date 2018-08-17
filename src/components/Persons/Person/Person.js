import React, {Component} from 'react';
import classes from './Person.css';

const randomAge = Math.floor(Math.random() * 30);

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] | Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[Person.js] | Inside componentWillMount', this.props);
  }

  componentDidMount() {
    console.log('[Person.js] | Inside componentDidMount', this.props);
  }

  render() {
    console.log('[Person.js] | Inside componentDidMount', this.props);
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>My name is {this.props.name}, and I am {this.props.age} years old (previously {randomAge})</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
