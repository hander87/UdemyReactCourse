import React from 'react';

const validationComponent = (props) => {

  let outputLengthText = null;

  if (props.textLength > 5) {
    outputLengthText = 'Text long enough!';
  } else {
    outputLengthText = 'Text not long enough...!';
  }

  return (
    <p>Length: {outputLengthText}</p>
  );
}

export default validationComponent;
