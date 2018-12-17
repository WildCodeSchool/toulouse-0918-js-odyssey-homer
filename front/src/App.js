import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row className="d-flex align-items-center row">
          <Col md="4">
            <img className="img-fluid " src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
          </Col>

          <Col md="8" className="">
            <BrowserRouter >
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
