import React, { Component } from 'react';
import logo from './logo.svg';
import SignUp from './SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Inside®
          </a>
        </header>
        <SignUp />
      </div>
    );
  }
}

export default App;
