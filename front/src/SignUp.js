import React, { Component } from 'react';

class SignUp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastName: ''
    }
    this.updateEmailField = this.updateEmailField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state,1,1));
    event.preventDefault();
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <label id="email" htmlFor="email" >email</label>
        <br />
        <input type="email" name="email" onChange={this.updateEmailField} />
        <br />
        <label id="password" htmlFor="password" >password</label>
        <br />
        <input type="password" name="password" onChange={this.updateEmailField} />
        <br />
        <label id="checkPassword" htmlFor="checkPassword" >verify password</label>
        <br />
        <input type="password" name="checkPassword" onChange={this.updateEmailField} />
        <br />
        <label id="name" htmlFor="name" >name</label>
        <br />
        <input type="text" name="name" onChange={this.updateEmailField} />
        <br />
        <label id="lastName" htmlFor="lastName" >last name</label>
        <br />
        <input type="text" name="lastName" onChange={this.updateEmailField} />
        <br />
        <input type="submit" value="Soumettre"/>
      </form>
    );
  }
}

export default SignUp;
