import React, { Component, Fragment } from 'react';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'jacques.chiracsc2@gmail.com',
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "Jacques",
      lastname: "Chirac"
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePWDField = this.updatePWDField.bind(this);
    this.updatePWDBisField = this.updatePWDBisField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({
      email: event.target.value
    })
  }

  updatePWDField(event) {
    this.setState({
      password: event.target.value
    })
  }

  updatePWDBisField(event) {
    this.setState({
      passwordbis: event.target.value
    })
  }

  updateNameField(event) {
    this.setState({
      name: event.target.value
    })
  }

  updateLastnameField(event) {
    this.setState({
      lastname: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return(
      <Fragment>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.email} onChange={this.updateEmailField} type="email" name="email"/>
          <input value={this.state.password} onChange={this.updatePWDField} type="password" name="password"/>
          <input value={this.state.passwordbis} onChange={this.updatePWDBisField} type="password" name="password"/>
          <input value={this.state.name} onChange={this.updateNameField} type="name" name="name"/>
          <input value={this.state.lastname} onChange={this.updateLastnameField} type="lastname" name="lastname"/>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default SignUp
