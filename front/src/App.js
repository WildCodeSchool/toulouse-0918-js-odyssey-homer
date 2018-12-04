import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="App m-5">
        <header className="App-header m-5">
            <SignUp />
        </header>
      </div>
    );
  }
}

export default App;
