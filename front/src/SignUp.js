import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "test@test.com"
        };
    };

    updateEmailField = event => {
        this.setState({
            mail: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.mail}</h1>
                <input
                    type="email"
                    name="email"
                    onChange={event => this.updateEmailField(event)}                    
                />
            </div>
        )
    };
}

export default SignUp;