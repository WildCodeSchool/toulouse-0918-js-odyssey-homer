import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: " ",
      password: "",
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
    axios.post('/auth/signin', this.state)
      .then(
        response => toast.success('User has been signed in!'),
        <Link to='/profile' tag={Link} />
      )
      .catch(
        err => toast.error(err.response.data.flash)
      )
  }

  render () {
    return (
      <div>
        <h5 className="mb-5"><strong>Sign in !</strong></h5>       
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
          <div className="text-right">
          <Link to='/profile' tag={Link}>
            <Button type="submit" value="SUBMIT" className="float-right"><strong>SUBMIT</strong></Button>
          </Link>
          </div>
        </Form>
          <div className="mt-5">
            Don't have an account yet ?
            <br />
            <Link to='/signup' tag={Link}>SignUp now !</Link>
          </div>
          <ToastContainer />
      </div>
    );
  }
}

export default SignIn;
