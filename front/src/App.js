import React, { Component } from 'react';
import SignUp from './components/SignUp';
import './App.css';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid className="bg-color d-flex align-items-center " style={{minHeight: "100vh"}}>
        <SignUp/>
      </Container>
    );
  }
}

export default App;
