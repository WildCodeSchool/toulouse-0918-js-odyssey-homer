import React, { Component } from 'react';
import '../styles/form.scss';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          lastname: '',
          email: '',
          password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
      e.preventDefault();
      fetch("/auth/signup",
        {
          method:  'POST',
          headers: {
          'Content-Type':  'application/json'
        },
        body:  JSON.stringify(this.state),
      })
      .then(res  =>  res.json())
      .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
      )
      console.log(JSON.stringify(this.state,1,1))
    }

    render() {

        return (
            <div id='signup'>
                <form action="" id='singup' className='flex-column' onSubmit={this.submitForm}>
                  {
                    this.state.flash &&
                    <p style={{textAlign: 'center', marginBottom: '2em'}}><b>{this.state.flash}</b></p>
                  }

                  <div className="form-group flex-row space-between">

                    <div className="input-group f-50">
                      <label htmlFor="name">Prénom</label>
                      <input type="text" name='name' id='name'  onChange={this.handleChange} />
                    </div>

                    <div className="input-group f-50">
                      <label htmlFor="lastname">Nom</label>
                      <input type="text" name='lastname' id='lastname'  onChange={this.handleChange} />
                    </div>

                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id='email' onChange={this.handleChange} />
                  </div>

                  <div className="form-group flex-row space-between">

                    <div className="input-group f-50">
                      <label htmlFor="password">Mot de passe</label>
                      <input type="password" name='password' id='password'  onChange={this.handleChange} />
                    </div>

                  </div>

                  <input type="submit" value='Soumettre' className='btn btn-blue'/>

                </form>

            </div>
        );
    }
}

export default SignUp;
