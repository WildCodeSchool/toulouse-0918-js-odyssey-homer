import React, { Component } from 'react';

import './SignUp.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ''
		};
		this.updateEmailField = this.updateEmailField.bind(this);
	}

	updateEmailField(event) {
		this.setState({
			email: event.target.value
		});
	}

	render() {
		const { email } = this.state;
		return (
			<email>
				<h1>{email}</h1>
				<input
					onChange={this.updateEmailField}
					type="email"
					name="email"
				/>
			</email>
		);
	}
}

export default SignUp;
