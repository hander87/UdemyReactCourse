import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

  const randomAge = Math.floor(Math.random() * 30);

  return (
    <div className="Person">
      <p onClick={props.click}>My name is {props.name}, and I am {props.age} years old (previously {randomAge})</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Radium(person);
