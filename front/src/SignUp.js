import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'email@email.com'
        }
    }

    updateEmailField = (event) => {
        this.setState({
            email: event.target.value
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
                    autoComplete="off"
                />
            </div>
        );
    }
}

export default SignUp;