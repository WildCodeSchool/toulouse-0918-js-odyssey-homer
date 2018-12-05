import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Label,
    Input, Container, Col, Row
} from 'reactstrap';
import {ToastContainer, ToastStore} from 'react-toasts';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            psw: "",
            first: "",
            last: "",
            flash:""
        };
        this.updateLast = this.updateLast.bind(this);
        this.updateFirst = this.updateFirst.bind(this);
        this.updatePsw = this.updatePsw.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    reset(){
        this.setState({
            first: "",
            last:"",
            email:"",
            psw:"",
        })
    };
    updateFirst(event) {
        this.setState({
            first: event.target.value
        })
    };
    updateLast(event) {
        this.setState({
            last: event.target.value
        })
    };
    updatePsw(event) {
        this.setState({
            psw: event.target.value
        })
    }
    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    handleSubmit = event => {
        console.log(JSON.stringify(this.state));
        event.preventDefault();
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
            .then(() => {ToastStore.info(JSON.stringify(this.state.flash))
                this.reset();
            })

    };

    render() {
        return (
            <Container className="shadow-sm p-3 mb-5 bg-white rounded">
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <img
                            src="https://vignette.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest?cb=20110703093455&path-prefix=fr"
                            alt="homer"
                            // style={{ width: "20em" }}
                            className="text-center mx-auto d-block">
                        </img>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <Form onSubmit={this.handleSubmit}>
                            <h2>SignUp</h2>
                            <FormGroup>
                                <Label
                                    for="email">Email</Label>
                                <Input 
                                    onChange={this.updateEmail} 
                                    value={this.state.email} 
                                    type="email" 
                                    name="email"
                                    id="exampleEmail" 
                                    placeholder="mon@email.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input 
                                    onChange={this.updatePsw}
                                    value={this.state.psw}  
                                    type="password" name="password"
                                    id="examplePassword" 
                                    placeholder="monPassw0rd" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">name</Label>
                                <Input 
                                    onChange={this.updateLast} 
                                    value={this.state.last} 
                                    type="text" 
                                    name="name"
                                    id="name" 
                                    placeholder="James" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastname">lastname</Label>
                                <Input 
                                    onChange={this.updateFirst}
                                    value={this.state.first}
                                    type="text" 
                                    name="lastname"
                                    id="text" 
                                    placeholder="Bond" />
                            </FormGroup>
                            <Button
                                className="btn bg-primary float-right"
                                type="submit"
                                value="submit">
                                Submit
                                </Button>
                        </Form>
                    </Col>
                </Row>
                <ToastContainer store={ToastStore}/>
            </Container>
        );
    }
}
export default SignUp;
