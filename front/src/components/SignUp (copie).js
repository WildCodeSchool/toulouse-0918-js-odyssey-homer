import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      information: '',
      flash: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addForm = this.addForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    const { password, passwordConfirm } = this.state;
    const value = e.target.value;
    let message = '';
    if (e.target.name === passwordConfirm) {
      if (password.length !== 0 && password.length === value.length && value === password) {
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
    this.setState({
      lastname: '',
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      information: ''
    });
  }

  handleSubmit(e) {
    // const {email,password,lastname,name,flash} = this.state;
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
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
      )
  }

  addForm() {
    const { password, passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      let message = 'Ton password !!! not ok';
      this.setState({
        information: message
      })
    } else {
      this.handleSubmit();
      // this.resetForm();
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.addForm();
  }

  render() {
    const { information  } = this.state;
    const etatSate = JSON.stringify(this.state);
    return (      
    <Container>
      <Row>
        <Col>
        <div className="FormFilm">
        <h2>{etatSate}</h2>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Formulaire d'inscription</legend>
            <div className="form-data">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>
            <div className="form-data">
              <label htmlFor="name">Prenom</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
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
        </Col>
      </Row>
    </Container>
    );
  }
}

export default SignUp;