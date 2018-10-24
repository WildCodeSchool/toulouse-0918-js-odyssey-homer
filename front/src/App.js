import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SignUp />
        </header>
      </div>
    );
  }
}

export default App;
