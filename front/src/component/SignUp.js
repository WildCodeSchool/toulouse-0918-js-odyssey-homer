import React, { Component, Fragment } from 'react';
import {TextField, Button, Grid, Snackbar} from '@material-ui/core';
import axios from 'axios';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'jacques.chiracsc2@gmail.com',
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "Jacques",
      lastname: "Chirac",
      flash: "",
      open: false,
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePWDField = this.updatePWDField.bind(this);
    this.updatePWDBisField = this.updatePWDBisField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handleSubmit() {
    console.log(JSON.stringify(this.state));
    axios.post("/auth/signup",this.state)
    .then(res  =>  res.data)
    .then(
      res  =>  this.setState({flash:  'User has been sign up !', open : true}),
    )
    .catch(err  =>  this.setState({flash:  'Error !', open : true}))
  }

  handleClose() {
    this.setState({ open: false, error: false });
  };


  render() {
    return(
      <Grid container>
        <form className="container" onSubmit={this.handleSubmit}>
          <h1>Sign up !</h1>
          <TextField margin="normal" label="Email" className="textField" value={this.state.email} onChange={this.updateEmailField} type="email" name="email"/>
          <TextField margin="normal" label="Password" className="textField" value={this.state.password} onChange={this.updatePWDField} type="password" name="password"/>
          <TextField margin="normal" label="Password copy" className="textField" value={this.state.passwordbis} onChange={this.updatePWDBisField} type="password" name="password"/>
          <TextField margin="normal" label="Name" className="textField" value={this.state.name} onChange={this.updateNameField} type="name" name="name"/>
          <TextField margin="normal" label="Last name" className="textField" value={this.state.lastname} onChange={this.updateLastnameField} type="lastname" name="lastname"/>

          <Grid className="containerButton" container direction="row" justify="flex-end" alignItems="center">
            <Button variant="contained" color="primary" onClick={this.handleSubmit}
              >Submit
            </Button>
            <Snackbar
              anchorOrigin={{vertical :'bottom', horizontal :'center'}}
              open={this.state.open}
              onClose={this.handleClose}
              ContentProps={{'aria-describedby': 'message-id'}}
              message={<span id="message-id">{this.state.flash}</span>}
            />
          </Grid>
        </form>
      </Grid>
    );
  }
}

export default SignUp
