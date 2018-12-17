import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    event.preventDefault();
  } 

  render () {
    const myJSON = JSON.stringify(this.state);    
    return (
      <Row className="bg-none mx-5 flex-grow-1" >
        <Col xs={12} md={6} className="text-center">
          <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer Simpson"
          style={{minHeight: "100%"}} />
        </Col> 
        <Col xs={12} md={6} className="text-align-center my-5">       
          <h5 className="mb-2"><strong>Sign up !</strong></h5>          
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
            <Button type="submit" value="SUBMIT" className="float-right"><strong>SUBMIT</strong></Button>
            {/* <p>{myJSON}</p> */}

            <ToastContainer
              // store={ToastStore}
              // lightBackground
              // position={ToastContainer.POSITION.BOTTOM_LEFT}
            />
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SignUp;
