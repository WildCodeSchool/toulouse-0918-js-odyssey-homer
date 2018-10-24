import React, {Component} from 'react';

class SignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: 'Your email will appear here'
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
        type="email" name="email" placeholder='please enter your email'/>
        <h1>{this.state.email}</h1>
      </div>   
    );
  }
}

export default SignUp;