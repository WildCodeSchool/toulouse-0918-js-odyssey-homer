import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ToastContainer, ToastStore } from 'react-toasts';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      information: '',
      flash: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addForm = this.addForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    const { password, passwordConfirm } = this.state;
    const value = e.target.value;
    let message = '';
    if (e.target.name === passwordConfirm) {
      if (password.length !== 0 && password.length === value.length && value === password) {
        message = "Password super";
      } else {
        message = "Mauvais password";
      }
    }
    this.setState({
      [e.target.id]: e.target.value,
      information: message
    })
  }

  onVerif(e) {
    document.getElementById('informatif').textContent("salut");
  }

  resetForm() {
    this.setState({
      lastname: '',
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      information: '',      
    });
  }

  handleSubmit(e) {
    // const {email,password,lastname,name,flash} = this.state;
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
      .then(err => {ToastStore.error(this.state.flash);
                    this.resetForm();
                    })
  }

  addForm() {
    const { password, passwordConfirm,flash } = this.state;
    if (password !== passwordConfirm) {
      let message = 'Ton password !!! not ok';
      this.setState({
        information: message
      })
    } else {
      this.handleSubmit();
      // if(flash!=='') ToastStore.error(flash);
      // this.resetForm();
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.addForm();
  }

  render() {
    const { information } = this.state;
    const etatSate = JSON.stringify(this.state);
    return (
      <Container fluid className="bg-warning allPage">
        <Row className="p-5 mainRow">
          <Col xs="12" lg="6" className="bg-white border-bottom border-left border-dark rounded-left d-flex  justify-content-center">
            <img className="img-fluid" src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Card image cap" />
          </Col>
          <Col  xs="12" lg="6" className="bg-white pt-5 pb-5 border-bottom border-right Larger shadowLarger shadow border-dark rounded-right">
            <Form onSubmit={this.submitForm}>
              <FormGroup className="text-left">
                <Label className="mb-0" for="lastname">Last name</Label>
                <Input
                  className="mt-0 border-top-0 border-right-0 border-left-0"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="name"
                  onChange={this.onChange}
                  value={this.state.lastname} />
              </FormGroup>
              <FormGroup className="text-left">
                <Label className="mb-0" for="name">Name</Label>
                <Input
                  className="mt-0 border-top-0 border-right-0 border-left-0"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={this.onChange}
                  value={this.state.name} />
              </FormGroup>
              <FormGroup className="text-left">
                <Label className="mb-0" for="examplePassword">Password</Label>
                <Input
                  className="mt-0 border-top-0 border-right-0 border-left-0"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </FormGroup>
              <FormGroup className="text-left">
                <Label className="mb-0" for="examplePassword">Password Confirm</Label>
                <Input
                  className="mt-0 border-top-0 border-right-0 border-left-0"
                  type="password"
                  placeholder="Confirm password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={this.onChange}
                  value={this.state.passwordConfirm}
                />
              </FormGroup>
              <FormGroup className="text-left">
                <Label className="mb-0" for="email">Email</Label>
                <Input
                  className="mt-0 border-top-0 border-right-0 border-left-0"
                  type="email"
                  id="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="Email" />
              </FormGroup>
              <FormGroup className="d-flex justify-content-end pr-2">
                <Button outline color="primary" type="submit" value="SUBMIT">Submit</Button>
              </FormGroup>
            </Form>
            <div id="informatif">
              <ToastContainer store={ToastStore} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;