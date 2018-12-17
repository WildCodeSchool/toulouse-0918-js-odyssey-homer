import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: " ",
      password: "",
      passwordbis: "",
      name: "",
      lastname: "",
      flash: {}
    }
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value     
    })
  }

  handleSubmit = event => {
    axios.post('/auth/signup', this.state) //Requete
      .then(
        response => toast.success('User has been signed up!')
      ) // executé si ça se passe bien
      .catch(
        err => toast.error(err.response.data.flash)
      )
      // event.preventDefault();
  } 

  render () {
    const myJSON = JSON.stringify(this.state);    
    return (
      <div>
        <h5 className="mb-5"><strong>Sign up !</strong></h5>          
        <Form
          onSubmit={this.handleSubmit} 
          className="submit-form">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input required
              className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
              onChange={this.updateField}
              type="email" name="email" id="email" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input required
              className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
              onChange={this.updateField}
              type="password" name="password" id="password" placeholder="Enter your password" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password copy</Label>
            <Input required
              className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0 rounded-0"
              onChange={this.updateField}
              type="password" name="passwordbis" id="passwordbis" placeholder="Re-enter your password" />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input required
              className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
              onChange={this.updateField}
              type="text" name="name" id="name" placeholder="Enter your name"/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Lastname</Label>
            <Input required
              className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
              onChange={this.updateField}
              type="text" name="lastname" id="lastname" placeholder="Enter your lastname"/>
          </FormGroup>
          <Link to='/profile' tag={Link}>
            <Button type="submit" value="SUBMIT" className="float-right"><strong>SUBMIT</strong></Button>
          </Link>
          <ToastContainer />
        </Form>
        <div className="mt-5">
          Already have an account ?
          <br />
          <Link to='/' tag={Link}>SignIn now !</Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
