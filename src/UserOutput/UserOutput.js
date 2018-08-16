import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  const style = {backgroundColor: 'grey'}
  return (
    <div className="UserOutput">
      <p style={{backgroundColor: 'orange'}}>{props.username}</p>
      <p style={style}>P2</p>
      <hr />
    </div>
  );
}

export default userOutput;
