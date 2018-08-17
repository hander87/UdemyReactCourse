import React from 'react';

const validationComponent = (props) => {

  let outputLengthText = 'Text not long enough...!';

  if (props.textLength > 5) {
    outputLengthText = 'Text long enough!';
  }

  return (
    <p>Length: {outputLengthText}</p>
  );
}

export default validationComponent;
