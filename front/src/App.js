import React, { Component } from 'react';
import FormEmployee from './component/FormEmployee.jsx'
import SignUp from './component/SignUp'
class App extends Component {
  render() {
    return (
      <div>
        <FormEmployee />
        <SignUp />
      </div>
    );
  }
}

export default App;
