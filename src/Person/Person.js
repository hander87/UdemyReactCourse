import React from 'react';

const person = (props) => {

  const randomAge = Math.floor(Math.random() * 30);

  return (
    <div>
      <p onClick={props.click}>My name is {props.name}, and I am {props.age} years old (previously {randomAge})</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;
