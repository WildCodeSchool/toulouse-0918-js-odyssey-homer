import React, { Component } from 'react';
import SignUp from './components/SignUp';
import './App.css';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid className="App bg-color" style={{minHeight: "100vh"}}>
        <SignUp/>
      </Container>
    );
  }
}

export default App;
