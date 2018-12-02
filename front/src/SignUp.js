import React, { Component } from 'react';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastName: '',
      flash: ''
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
    fetch("/auth/signup",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )
    event.preventDefault()

  }


  render() {
    const { flash } = this.state;
    const result = flash ? <p>{flash}</p> : null
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
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
        <input type="submit" value="Soumettre" />
        <p>
          {result}
        </p>
      </form>
    );
  }
}

export default SignUp;
