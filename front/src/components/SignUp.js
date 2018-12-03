import React, { Component } from 'react';
import '../style/SignUp.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {ToastContainer, ToastStore} from 'react-toasts';
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastname: '',
            flash: ''
        }
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event){
      this.setState({
          password: event.target.value
      })
    }

    updatePasswordBis(event){
      this.setState({
          passwordBis: event.target.value
      })
    }

    updateName(event){
      this.setState({
          name: event.target.value
      })
    }

    updateLastName(event){
      this.setState({
          lastname: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault();
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
    }

    render() {
        const { flash } = this.state
        return (
            <div className="mt-5 mb-4">
                <Form onSubmit={this.handleSubmit.bind(this)} >
                    <h4 className="title mb-5"><strong>Sign up !</strong></h4>
                    <FormGroup>
                        <Label className="text-muted">Email</Label>
                        <Input 
                            type="email" 
                            name="email"
                            onChange={this.updateEmail.bind(this)}
                            placeholder='Type your email here'
                            className="border-right-0 border-left-0 border-top-0 rounded-0"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-muted">Password</Label>
                        <Input 
                        type="password"
                        onChange={this.updatePassword.bind(this)}
                        className="border-right-0 border-left-0 border-top-0 rounded-0"
                        />

                    </FormGroup>

                    <FormGroup>
                        <Label className="text-muted">Name</Label>
                        <Input 
                        type="text" 
                        name="name"
                        placeholder='Your name goes here'
                        onChange={this.updateName.bind(this)}
                        className="border-right-0 border-left-0 border-top-0 rounded-0"
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label className="text-muted">Name</Label>
                        <Input 
                        type="text" 
                        name="last name" 
                        placeholder='Your lastname goes here'
                        onChange={this.updateLastName.bind(this)}
                        className="border-right-0 border-left-0 border-top-0 rounded-0"
                        />
                    </FormGroup>

                    <div className="d-flex justify-content-end mt-5">
                        <Button 
                            type="submit"
                            value="Soumettre"
                            className="btn d-flex justify-content-end"
                            onClick={() => ToastStore.info(flash)}
                        >
                            Submit
                        </Button>
                        <ToastContainer lightBackground position={ToastContainer.POSITION.BOTTOM_CENTER} store={ToastStore}/>
                    </div>
                </Form> 
            </div>
        );
    }
}

export default SignUp;