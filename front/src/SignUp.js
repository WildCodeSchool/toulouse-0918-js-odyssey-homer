import React, { Component } from 'react';

import { Container, Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { ToastContainer, toast, ToastStore } from 'react-toasts';
import axios from 'axios';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastname: "",
            flash: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    updateEmailField = event => {
        this.setState({
            email: event.target.value
        });
    };

    updatePasswordField = event => {
        this.setState({
            password: event.target.value
        });
    };

    updateConfirmPasswordField = event => {
        this.setState({
            confirmPassword: event.target.value
        });
    };

    updateNameField = event => {
        this.setState({
            name: event.target.value
        });
    };

    updateLastnameField = event => {
        this.setState({
            lastname: event.target.value
        });
    };

    // handleSubmit(event) {
    //     fetch("/auth/signup",
    //         {
    //             method: 'POST',
    //             headers: new Headers({
    //                 'Content-Type': 'application/json'
    //             }),
    //             body: JSON.stringify(this.state),
    //         })
    //         .then(res => res.json())
    //         .then(
    //             res => this.setState({ "flash": res.flash }),
    //             err => this.setState({ "flash": err.flash })
    //         )
    //     console.log(JSON.stringify(this.state));
    //     event.preventDefault();
    // }

    handleSubmit(event) {
        axios.post("/auth/signup", this.state)
            .then(
                res => ToastStore.success(res.data.flash)
            )
            .catch(
                err => ToastStore.error(err.response.data.flash)
            )
        event.preventDefault();
        console.log(JSON.stringify(this.state, 1, 1))
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    notify = () => toast("You're good !");

    render() {
        return (
            <div id="SignUp">
                <Container>

                    <Row className="form">
                        <Col lg="4">
                            <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                        </Col>
                        <Col lg="8">
                            <Form onSubmit={this.handleSubmit}>
                                {/* <Col lg="12">
                            <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                        </Col> */}

                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="mon@email.com"
                                        onChange={this.handleChange}
                                    // onChange={event => this.updateEmailField(event)}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="myPassw0rd"
                                        onChange={this.handleChange}
                                    // onChange={event => this.updatePasswordField(event)}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Confirm password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="myPassw0rd"
                                        onChange={this.handleChange}
                                    // onChange={event => this.updateConfirmPasswordField(event)}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Firstname</Label>
                                    <Input
                                        type="text"
                                        name="text"
                                        placeholder="James"
                                        onChange={this.handleChange}
                                    // onChange={event => this.updateNameField(event)}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Lastname</Label>
                                    <Input
                                        type="text"
                                        name="text"
                                        placeholder="Bond"
                                        onChange={this.handleChange}
                                    // onChange={event => this.updateLastnameField(event)}
                                    />
                                </FormGroup>

                                <Button
                                    type="submit"
                                    className="float-right"
                                    value="Submit"
                                    onClick={this.handleClick}>Send
                                </Button>
                                <ToastContainer
                                    store={ToastStore}
                                    lightBackground
                                    position={ToastContainer.POSITION.BOTTOM_LEFT}
                                />
    
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    };
}

export default SignUp;