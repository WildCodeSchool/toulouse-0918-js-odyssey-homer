import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from 'reactstrap';
import { ToastContainer, ToastStore } from 'react-toasts';
import axios from 'axios';
import './App.css'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            lastname: "",
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        axios.post("/auth/signup", this.state)
            .then(res => ToastStore.success(res.data.flash))
            .catch(err => ToastStore.error(err.response.data.flash)
            )
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <Container style={{ backgroundColor: "white", marginTop: "5%" }} className="form-container" >
                    <Row className="d-flex align-items-center">
                        <Col xs="12" sm="12" md="6" className="d-flex justify-content-center">
                            <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                        </Col>
                        <Col xs="12" sm="12" md="6">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={this.updateField.bind(this)}
                                        placeholder="E-mail"
                                        autoComplete="off"
                                        className="rounded-0"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={this.updateField.bind(this)}
                                        placeholder="Password"
                                        autoComplete="off"
                                        className="rounded-0"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={this.updateField.bind(this)}
                                        placeholder="Name"
                                        autoComplete="off"
                                        className="rounded-0"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastname">Lastname</Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        onChange={this.updateField.bind(this)}
                                        placeholder="Nom"
                                        autoComplete="off"
                                        className="rounded-0"
                                    />
                                </FormGroup>
                                <div className="bouton d-flex justify-content-end">
                                    <Button
                                        type="submit"
                                        value="Soumettre"
                                        className="border-0 rounded-0"
                                        style={{ backgroundColor: '#4b00a0' }}
                                    >
                                        SUBMIT
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer store={ToastStore} />
            </div>
        );
    }
}

export default SignUp;