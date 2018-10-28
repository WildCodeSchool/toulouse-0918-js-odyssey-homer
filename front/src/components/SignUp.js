import React, { Component } from 'react';
import '../styles/form.scss';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            pass: '',
            passConf: ''
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
      console.log(JSON.stringify(this.state,1,1))
    }

    render() {

        return (
            <div id='signup'>
                <form action="" id='singup' className='flex-column' onSubmit={this.submitForm}>

                  <div className="form-group flex-row space-between">

                    <div className="input-group f-50">
                      <label htmlFor="firstname">Prénom</label>
                      <input type="text" name='firstname' id='firstname'  onChange={this.handleChange} />
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
                      <label htmlFor="pass">Mot de passe</label>
                      <input type="password" name='pass' id='pass'  onChange={this.handleChange} />
                    </div>

                    <div className="input-group f-50">
                      <label htmlFor="passConf">Confirmation</label>
                      <input type="password" name='passConf' id='passConf'  onChange={this.handleChange} />
                    </div>

                  </div>

                  <input type="submit" value='Soumettre' className='btn btn-blue'/>

                </form>

            </div>
        );
    }
}

export default SignUp;
