import React, { Component } from 'react';

import './SignUp.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			verifyPassword: '',
			name: '',
			surname: ''
		};
		this.updateState = this.updateState.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	updateState(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	submitForm(event) {
		event.preventDefault();
		console.log(JSON.stringify(this.state))
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<label htmlFor="email">Email:</label>
				<input
					onChange={this.updateState}
					id="email"
					type="text"
					name="email"
					placeholder="Enter your email"
				/>
				<label htmlFor="password">Password:</label>
				<input
					onChange={this.updateState}
					id="password"
					name="password"
					type="password"
					placeholder="Enter your password"
				/>
				<label htmlFor="verifyPassword">Verify your password:</label>
				<input
					onChange={this.updateState}
					id="verifyPassword"
					type="password"
					name="verifyPassword"
					placeholder="Confirm your password"
				/>
				<label htmlFor="name">Name:</label>
				<input
					onChange={this.updateState}
					id="name"
					type="name"
					name="name"
					placeholder="Enter your name"
				/>
				<label htmlFor="surname">Surname:</label>
				<input
					onChange={this.updateState}
					id="surname"
					type="surname"
					name="surname"
					placeholder="Enter your surname"
				/>
				<input className="submitBtn" type="submit" value="Submit" />
			</form>
		);
	}
}

export default SignUp;
