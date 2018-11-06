import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      email: '',
      information: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addForm = this.addForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onChange(e) {
    const { password, passwordConfirm, information } = this.state;
    const value = e.target.value;
    let message = '';
    console.log(e.target.name,);
    if (e.target.name === 'passwordConfirm') {
      if (password.length!== 0 && password.length === value.length && value === password) {
        message = "Password super";
      } else {
        message = "Mauvais password";
      }
    }
    this.setState({
      [e.target.id]: e.target.value,
      information: message
    })
  }

  onVerif(e) {
    document.getElementById('informatif').textContent("salut");
  }

  resetForm() {
    this.setState = ({
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      email: '',
      information: ''
    });
  }

  addForm() {
    const { etatFormulaire, firstName, lastName, password, passwordConfirm, email, information } = this.state;
    if (password !== passwordConfirm) {
      let message = 'Ton password !!! not ok';
      this.setState({
        information: message
      })
    } else {
      const etatSate = JSON.stringify(this.state);
      console.log(etatSate);
      this.resetForm();
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.addForm();
  }

  render() {
    const { etatFormulaire, firstName, lastName, password, passwordVerif, email, information } = this.state;
    const etatSate = JSON.stringify(this.state);
    return (
      <div className="FormFilm">
        <h2>{etatSate}</h2>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Formulaire d'inscription</legend>
            <div className="form-data">
              <label htmlFor="firstName">Nom</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={this.onChange}
                value={this.state.firstName}
              />
            </div>
            <div className="form-data">
              <label htmlFor="firstName">Prenom</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={this.onChange}
                value={this.state.lastName}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Password Confirm</label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                onChange={this.onChange}
                value={this.state.passwordConfirm}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
        <div id="informatif">{information}</div>
      </div>
    );
  }
}

export default SignUp;