import React, { Component } from 'react';

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

    handleSubmit(event) {
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
        console.log(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="mon@email.com"
                        onChange={event => this.updateEmailField(event)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="monPassw0rd"
                        onChange={event => this.updatePasswordField(event)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="monPassw0rd"
                        onChange={event => this.updateConfirmPasswordField(event)}
                    />
                    <input
                        type="text"
                        name="text"
                        placeholder="James"
                        onChange={event => this.updateNameField(event)}
                    />
                    <input
                        type="text"
                        name="text"
                        placeholder="Bond"
                        onChange={event => this.updateLastnameField(event)}
                    />
                    <input type="submit" value="Soumettre" />
                </form>
            </div>
        )
    };
}

export default SignUp;