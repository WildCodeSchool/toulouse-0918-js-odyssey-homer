import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row className="d-flex align-items-center row">
          <Col md="4">
            <img className="img-fluid " src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
          </Col>

          <Col md="8" className="">
            <SignUp />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
