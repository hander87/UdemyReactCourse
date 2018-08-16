import React from 'react';

const person = (props) => {

  const randomAge = Math.floor(Math.random() * 30);

  return (
    <p>My name is {props.name}, and I am {props.age} years old (previously {randomAge})</p>
  );
}

export default person;
