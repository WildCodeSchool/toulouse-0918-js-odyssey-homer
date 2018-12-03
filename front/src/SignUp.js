import React, { Component } from 'react';
import { Container, Form, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			verifyPassword: '',
			name: '',
			surname: '',
			flash: {}
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
		axios.post("/auth/signup",
			this.state
		)
			.then(
				res => toast.success(res.data.flash),
			)
			.catch(err => toast.error(err.response.data.flash))
		event.preventDefault();
		console.log(JSON.stringify(this.state))
	}

	notify = () => toast.error("Notification!");

	render() {
		return (
			<Container
				id="Sign-Up"
				className="m-4"
			>
				<Row
					className="p-5">
					<Col
						xs="12"
						sm="6"
					>
						<img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer" />
					</Col>
					<Col
						xs="12"
						sm="6"
					>
						<Form
							className="p-3"
							onSubmit={this.submitForm}
						>
							<label htmlFor="email">Email:</label>
							<input
								className="my-2"
								onChange={this.updateState}
								id="email"
								type="email"
								name="email"
								placeholder="Enter your email"
							/>
							<label htmlFor="password">Password:</label>
							<input
								className="my-2"
								onChange={this.updateState}
								id="password"
								name="password"
								type="password"
								placeholder="Enter your password"
							/>
							<label htmlFor="verifyPassword">Verify your password:</label>
							<input
								className="my-2"
								onChange={this.updateState}
								id="verifyPassword"
								type="password"
								name="verifyPassword"
								placeholder="Confirm your password"
							/>
							<label htmlFor="name">Name:</label>
							<input
								className="my-2"
								onChange={this.updateState}
								id="name"
								type="name"
								name="name"
								placeholder="Enter your name"
							/>
							<label htmlFor="surname">Surname:</label>
							<input
								className="my-2"
								onChange={this.updateState}
								id="surname"
								type="surname"
								name="surname"
								placeholder="Enter your surname"
							/>
							<input
								id="Button"
								className="submitBtn mt-4"
								type="submit"
								value="Submit"
							/>
							<ToastContainer
								className="text-center"
								position="top-center"
								autoClose={4000}
								hideProgressBar
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnVisibilityChange
								draggable
								pauseOnHover
							/>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SignUp;
