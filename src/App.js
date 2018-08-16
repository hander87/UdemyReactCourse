import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'Hannes'
  }

  manipulateStateHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.manipulateStateHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        
        <ol>
          <li style={{color: 'green'}}>Create TWO new components: UserInput and UserOutput</li>
          <li style={{color: 'green'}}>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li style={{color: 'green'}}>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li style={{color: 'green'}}>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li style={{color: 'green'}}>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li style={{color: 'green'}}>Add a method to manipulate the state (=> an event-handler method)</li>
          <li style={{color: 'green'}}>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li style={{color: 'green'}}>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li style={{color: 'green'}}>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li style={{color: 'green'}}>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

      </div>
    );
  }
}

export default App;
