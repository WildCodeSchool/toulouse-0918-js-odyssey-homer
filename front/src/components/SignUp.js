import React, {Component} from 'react';
import axios from 'axios';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class SignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      passwordbis: "monPassw0rd",
      name: "James",
      lastname: "Bond",
      flash: ""
    }
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateField = event => {
    this.setState ({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = event => {
    // console.log('A new user was submitted: ' + JSON.stringify(this.state));
    axios.post('/auth/signup', this.state) //Requete
      .then(response => response.data) // executé si ça se passe bien
      .then(data => 
        this.setState({flash: data.flash})
      )
      .catch(err =>                     // executé si erruer
        this.setState ({flash: err.response.data.flash}))
    event.preventDefault();
  } 

  render () {
    const myJSON = JSON.stringify(this.state);    
    return (
      <Row className="bg-none align-items-center mx-5" >
        <Col xs={12} sm={6} className="text-center">
          <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer Simpson"
          style={{minHeight: "100%"}} />
        </Col> 
        <Col xs={12}  sm={6} className="text-align-center my-5">
          
          <h5 className="mb-2"><strong>Sign up !</strong></h5>          
          <Form onSubmit={this.handleSubmit} className="submit-form">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
                onChange={this.updateField}
                type="email" name="email" id="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
                onChange={this.updateField}
                type="password" name="password" id="password" placeholder="Enter your password" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password Copy</Label>
              <Input
                className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
                onChange={this.updateField}
                type="passwordbis" name="passwordbis" id="passwordbis" placeholder="Re-enter your password" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
                onChange={this.updateField}
                type="text" name="name" id="name" placeholder="Enter your name"/>
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Lastname</Label>
              <Input
                className="ml-0 pl-0 border-bottom-1 border-left-0 border-right-0 border-top-0"
                onChange={this.updateField}type="text" name="lastname" id="lastname" placeholder="Enter your lastname"/>
            </FormGroup>
            <div className="d-flex">
              <Button type="submit" value="SUBMIT" className="d-flex align-items-right"><strong>SUBMIT</strong></Button>
            </div>
            <h1>{myJSON}</h1>
          </Form>
          </Col>
      </Row>
    );
  }
}

export default SignUp;