import React, { Component } from 'react';
import SignUp from './components/SignUp';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Container fluid className="bg-color d-flex align-items-center" style={{minHeight: "100vh"}}>
        <Row className="bg-none mx-5 flex-grow-1" >
          <Col xs={12} md={6} className="text-center">
            <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer Simpson"
            style={{minHeight: "100%"}} />
          </Col> 
          <Col xs={12} md={6} className="text-align-center my-5">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={SignIn}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/profile" component={Profile}/>
              </Switch>
            </BrowserRouter>
          </Col>     
        </Row>
      </Container>
    );
  }
}

export default App;
