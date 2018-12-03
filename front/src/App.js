import React, { Component } from 'react';
import SignUp from './SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div
        id="App"
        className="d-flex justify-content-center"
      >
        <SignUp />
      </div>
    );
  }
}

export default App;
