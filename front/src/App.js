import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';

// const NotFound = () => <h1>Not found</h1>

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
