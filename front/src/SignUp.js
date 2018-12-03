import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import Signup from './Signup.css';
import axios from 'axios';
import {ToastContainer, ToastStore} from 'react-toasts';
class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordbis: '',
      name: '',
      lastname: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    axios.post("/auth/signup", this.state)
    .then(
      res  =>  ToastStore.success(res.data.flash)
    )
    .catch(
      err  =>  ToastStore.error(err.response.data.flash)
    )
    e.preventDefault();
    console.log(JSON.stringify(this.state,1,1))
  }

  render() {
    return(
      <div className="SignUp">

        <Container  className="formulaire">
          <Row>
            <Col md='6' xs='12' className="d-flex justify-content-center align-items-start">
              <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
            </Col>

            <Col md='6' xs='12'  className="mx-auto form">
              <div className="my-3">
                <h1>Sign Up !</h1>
              </div>
              <div className="for mx-auto">
              <Form action="" onSubmit={this.handleSubmit}>

                <FormGroup row>
                  <Label for="email">Email</Label>
                  <Input className="border-top-0 border-right-0 border-left-0 rounded-0" type="email" name="email" onChange={this.handleChange} placeholder="email"/>
                </FormGroup>

                <FormGroup row>
                  <Label for="password">Password</Label>
                  <Input className="border-top-0 border-right-0 border-left-0 rounded-0" type="password" name="password" onChange={this.handleChange} id="examplePassword" placeholder="mot de passe"/>
                </FormGroup>

                <FormGroup row>
                  <Label for="passwordbis">Password Bis</Label>
                  <Input className="border-top-0 border-right-0 border-left-0 rounded-0" type="passwordbis" name="passwordbis" onChange={this.handleChange} placeholder="mot de passe bis"/>
                </FormGroup>

                <FormGroup row>
                  <Label for="name">Name</Label>
                  <Input className="border-top-0 border-right-0 border-left-0 rounded-0" type="name" name="name" onChange={this.handleChange} placeholder="nom"/>
                </FormGroup>

                <FormGroup row>
                  <Label for="lastname">Last Name</Label>
                  <Input className="border-top-0 border-right-0 border-left-0 rounded-0" type="lastname" name="lastname" onChange={this.handleChange} placeholder="prénom"/>
                </FormGroup>

                <FormGroup className="d-flex justify-content-center">
                  <Button  value='Submit' type='submit' color="primary" onClick={this.handleClick} >SUBMIT</Button>
                  <ToastContainer store={ToastStore}/>
                </FormGroup>

              </Form>
              </div>
            </Col>
          </Row>
        </Container>


      </div>
    )
  }
}

export default SignUp;
