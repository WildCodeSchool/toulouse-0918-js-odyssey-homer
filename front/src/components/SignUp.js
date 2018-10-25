import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.setEmail = this.setEmail.bind(this);
    }

    setEmail(e){
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    render() {
        const email = this.state.email;
        return (
            <div id='signup'>
                <h1>{email.length ? email : 'beurp'}</h1>
                <form action="">
                    <input type="email" name="email" onChange={this.setEmail} />
                </form>
            </div>
        );
    }
}

export default SignUp;