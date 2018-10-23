import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'hello@email.com'
        }
    }

    updateEmailField(event){
        const message = 'hello@email.com'
        const value = event.target.value === '' ? message : event.target.value
        this.setState({
            email: value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.email}</h1>
                <input 
                    type="email" 
                    name="email"
                    onChange={this.updateEmailField.bind(this)}
                    placeholder='Type your email here'
                /> 
            </div>
        );
    }
}

export default SignUp;