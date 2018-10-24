import React, {Component} from 'react';

class SignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond",
    }
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateField = event => {
    this.setState ({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = event => {
    console.log('A new user was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render () {
    const myJSON = JSON.stringify(this.state);
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{myJSON}</h1>

        <input onChange={this.updateField}
        type="email" name="email" placeholder='please enter your email'/>

        <input onChange={this.updateField}
        type="password" name="password" placeholder='please enter your password'/>

        <input onChange={this.updateField}
        type="password" name="passwordbis" placeholder='please enter your password again'/>

        <input onChange={this.updateField}
        type="text" name="name" placeholder='please enter your first name'/>

        <input onChange={this.updateField}
        type="text" name="lastname" placeholder='please enter your last name'/>

        <input type="submit" value="Soumettre"/>
     </form>   
    );
  }
}

export default SignUp;