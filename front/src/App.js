import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App d-flex justify-content-center">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;