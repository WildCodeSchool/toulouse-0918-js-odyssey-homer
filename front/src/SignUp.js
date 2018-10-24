import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            passwordVerified: "monPassw0rd",
            name: "James",
            lastname: "Bond"
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(JSON.stringify(this.state))
        event.preventDefault()
    }

    render() {
        const datas = JSON.stringify(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{datas}</h1>
                    <input
                        name="email"
                        type="email"
                        onChange={this.updateField.bind(this)}
                        placeholder="E-mail"
                        autoComplete="off"
                    />
                    <input
                        name="password"
                        type="password"
                        onChange={this.updateField.bind(this)}
                        placeholder="Mot de passe"
                        autoComplete="off"
                    />
                    <input
                        name="passwordVerified"
                        type="password"
                        onChange={this.updateField.bind(this)}
                        placeholder="Vérification mot de passe"
                        autoComplete="off"
                    />
                    <input
                        name="name"
                        type="text"
                        onChange={this.updateField.bind(this)}
                        placeholder="Prénom"
                        autoComplete="off"
                    />
                    <input
                        name="lastname"
                        type="text"
                        onChange={this.updateField.bind(this)}
                        placeholder="Nom"
                        autoComplete="off"
                    />
                    <input type="submit" value="Soumettre" />
                </form>
            </div>
        );
    }
}

export default SignUp;