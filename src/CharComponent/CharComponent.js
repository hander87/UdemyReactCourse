import React from 'react';

const charComponent = (props) => {

  const coolStyles = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  return (
    <div
      onClick={props.click}
      style={coolStyles}>
      <h3>{props.letter !== ' ' ? props.letter : '_'}</h3>
    </div>
  );
}

export default charComponent;
