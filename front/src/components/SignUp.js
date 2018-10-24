import React, {Component} from 'react';

class SignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: 'Your email will appear here',
      password: 'Your email will appear here',
      passwordbis: 'Your password will appear here',
      name: 'Your name will appear here',
      lastname: 'Your last name will appear here'
    }
  }

  updateField = event => {
    this.setState ({
      [event.target.name] : event.target.value
    })
  }

  render () {
    return (
      <div>
        <input
        onChange={this.updateField}
        type="email" name="email" placeholder='please enter your email'/>
        <h1>{this.state.email}</h1>

        <input onChange={this.updateField}
        type="text" name="password" placeholder='please enter your password'/>
        <h1>{this.state.password}</h1>

        <input onChange={this.updateField}
        type="text" name="passwordbis" placeholder='please enter your password again'/>

        <h1>{this.state.passwordbis}</h1>
        <input onChange={this.updateField}
        type="text" name="name" placeholder='please enter your first name'/>

        <h1>{this.state.name}</h1>
        <input onChange={this.updateField}
        type="text" name="lastname" placeholder='please enter your last name'/>
        <h1>{this.state.lastname}</h1>

        <input type="submit" value="Soumettre"/>

     </div>   
    );
  }
}

export default SignUp;