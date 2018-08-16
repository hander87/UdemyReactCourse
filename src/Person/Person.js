import React from 'react';

const person = () => {

  const age = Math.floor(Math.random() * 30);
  
  return (
    <p>Im a person, and I am {age} years old</p>
  );
}

export default person;
