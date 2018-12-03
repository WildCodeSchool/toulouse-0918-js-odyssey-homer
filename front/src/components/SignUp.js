import React, { Component } from 'react';
import {
  Button,
  TextField,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import '../styles/form.scss';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  },
});

class SignUp extends Component {

  constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        open: false,
        vertical: 'bottom',
        horizontal: 'left',
        snackText: ''
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

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  submitForm(e){
    e.preventDefault();
    this.setState({ open: false });
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
      err  =>  this.setState({"flash":  err.flash}),
    )
    const { firstname, lastname, email, password } =this.state;
    if(
      firstname.length === 0
      || lastname.length === 0
      || email.length === 0 
      || password.length === 0
    ){
      this.setState({ snackText: 'Tous les champs doivent être remplis', open : true });
    }
    else{
      this.setState({ snackText: `Vous avez été enregistré !`, open : true });
    }
    console.log(JSON.stringify(this.state,1,1))
  }

  render() {

    const { open, vertical, horizontal, snackText } = this.state;
    const { classes } = this.props;

    return (
      <div id='signup'>
        <form action="" id='singup' onSubmit={this.submitForm}>
          {
            this.state.flash &&
            <p style={{textAlign: 'center', marginBottom: '2em'}}><b>{this.state.flash}</b></p>
          }

            <TextField
              id="firstname"
              name="firstname"
              label="Prénom"
              className="f-50"
              margin="normal"
              type="text"
              onChange={this.handleChange}
            />

            <TextField
              id="lastname"
              name="lastname"
              label="Nom"
              className="f-50"
              margin="normal"
              type="text"
              onChange={this.handleChange}
            />
            
            <TextField
              id="email"
              name="email"
              label="Email"
              margin="normal"
              type="email"
              onChange={this.handleChange}
            />
            
            <TextField
              id="password"
              name="password"
              label="Mot de passe"
              margin="normal"
              type="password"
              onChange={this.handleChange}
            />

          <Button variant='contained' type='submit' color='primary'>Soumettre</Button>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{snackText}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />

        </form>

      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
