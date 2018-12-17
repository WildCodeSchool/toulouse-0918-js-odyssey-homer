import React, { Component } from 'react';
import '../style/SignUp.scss';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {ToastContainer, ToastStore} from 'react-toasts';
import axios from 'axios';
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
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

    handleSubmit(event) {
      event.preventDefault();
      axios.post("/auth/signin", this.state)
        .then(
            res => ToastStore.success(res.data.flash)
        )
        .catch(
            err => ToastStore.error(err.response.data.flash)
        )
        this.props.history.push('/profile');
    }

    render() {
        const { flash } = this.state
        return (
            <div className="mt-5 mb-4">
                <Form onSubmit={this.handleSubmit.bind(this)} >
                    <h4 className="title mb-5"><strong>Sign In !</strong></h4>
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
                    <div className="d-flex justify-content-end mt-5">
                        <Button 
                            type="submit"
                            value="Soumettre"
                            className="btn- btn-success mr-5"
                            onClick={() => this.handleSubmit}
                        >
                            Submit
                        </Button>
                        <Link to="/signup">
                          <Button className="btn btn-danger">
                            Sign up !
                          </Button>
                        </Link>
                        <ToastContainer lightBackground position={ToastContainer.POSITION.BOTTOM_CENTER} store={ToastStore}/>
                    </div>
                </Form> 
            </div>
        );
    }
}

export default SignUp;