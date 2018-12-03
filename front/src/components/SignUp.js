import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

import '../styles/form.scss';

class SignUp extends Component {

  constructor(props) {
      super(props);
      this.state = {
        name: '',
        lastname: '',
        email: '',
        password: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  submitForm(e){
    e.preventDefault();
    fetch("/auth/signup",
      {
        method:  'POST',
        headers: {
        'Content-Type':  'application/json'
      },
      body:  JSON.stringify(this.state),
    })
    .then(res  =>  res.json())
    .then(
      res  =>  this.setState({"flash":  res.flash}),
      err  =>  this.setState({"flash":  err.flash})
    )
    console.log(JSON.stringify(this.state,1,1))
  }

  render() {

    return (
      <div id='signup'>
        <form action="" id='singup' onSubmit={this.submitForm}>
          {
            this.state.flash &&
            <p style={{textAlign: 'center', marginBottom: '2em'}}><b>{this.state.flash}</b></p>
          }

            <TextField
              id="firstname"
              label="Prénom"
              className="f-50"
              margin="normal"
              type="text"
              onChange={this.handleChange}
            />

            <TextField
              id="lastname"
              label="Nom"
              className="f-50"
              margin="normal"
              type="text"
              onChange={this.handleChange}
            />
            
            <TextField
              id="email"
              label="Email"
              margin="normal"
              type="email"
              onChange={this.handleChange}
            />
            
            <TextField
              id="password"
              label="Mot de passe"
              margin="normal"
              type="password"
              onChange={this.handleChange}
            />

          <Button variant='contained' type='submit' color='primary'>Soumettre</Button>

        </form>

      </div>
    );
  }
}

export default SignUp;
