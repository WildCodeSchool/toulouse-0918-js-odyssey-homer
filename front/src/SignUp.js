import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Label,
    Input
} from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            lastname: "",
            flash: ""
        };
    }

    email = event => {
        this.setState({ email: event.target.value });
    };
    password = event => {
        this.setState({ password: event.target.value });
    };
    name = event => {
        this.setState({ name: event.target.value });
    };
    lastname = event => {
        this.setState({ lastname: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        fetch("/auth/signup",
        {
            method:  'POST',
            headers:  new  Headers({
                'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({"flash":  res.flash}),
            err  =>  this.setState({"flash":  err.flash})
          
        )
    };
   
    render() {
        return (
            <div className="container p-5">
                <div className="container p-5">
                <h1>{JSON.stringify(this.state)}</h1>
                    <Form onSubmit={this.handleSubmit} className="container p-5">
                        <FormGroup>
                            <Label
                                for="exampleEmail">Email</Label>
                            <Input onChange={this.email} type="email" name="email"
                                id="exampleEmail" placeholder="mon@email.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input onChange={this.password} type="password" name="password"
                                id="examplePassword" placeholder="monPassw0rd" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">name</Label>
                            <Input onChange={this.name} type="text" name="name"
                                id="name" placeholder="James" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastname">lastname</Label>
                            <Input onChange={this.lastname} type="text" name="lastname"
                                id="text" placeholder="Bond" />
                        </FormGroup>
                        <Button type="submit" value="Soumettre">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default SignUp;
