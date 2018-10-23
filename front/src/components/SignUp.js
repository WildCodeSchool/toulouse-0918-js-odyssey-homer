import React, {Component} from 'react';

class SignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  updateEmailField = event => {
    this.setState ({
      [event.target.name] : event.target.value
    })
  }

  render () {
    return (
      <div>
        <input onChange={this.updateEmailField}
        type="email" name="email"/>
        <h1>{this.state.email}</h1><input type="email" name="email"/>
      </div>   
    );
  }
}

export default SignUp;