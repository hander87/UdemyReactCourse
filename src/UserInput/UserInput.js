import React, {Component} from 'react';

class UserInput extends Component {
  render(){
    return (
      <input type="text" onChange={this.props.changed} value={this.props.username}/>
    );
  }
}

export default UserInput;
