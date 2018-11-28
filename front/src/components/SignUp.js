import React, { Component } from 'react';
import '../style/SignUp.scss';
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastname: '',
            flash: ''
        }
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event){
      this.setState({
          password: event.target.value
      })
    }

    updatePasswordBis(event){
      this.setState({
          passwordBis: event.target.value
      })
    }

    updateName(event){
      this.setState({
          name: event.target.value
      })
    }

    updateLastName(event){
      this.setState({
          lastname: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault();
      fetch("/auth/signup",
        {
            method:  'POST',
            headers:  new  Headers({
                'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json())
        .then(
            res  =>  this.setState({"flash":  res.flash}),
            err  =>  this.setState({"flash":  err.flash})
        )
    }

    render() {
        return (
            <div id="sign-up">
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <h1 className="title">{JSON.stringify(this.state,1,1)}</h1>
                  <input 
                      type="email" 
                      name="email"
                      onChange={this.updateEmail.bind(this)}
                      placeholder='Type your email here'
                  />
                  <input 
                    type="password"
                    onChange={this.updatePassword.bind(this)}
                  />
                  {/* <input 
                    type="password"
                    onChange={this.updatePasswordBis.bind(this)}
                  /> */}
                  <input 
                    type="text" 
                    name="name"
                    placeholder='Your name goes here'
                    onChange={this.updateName.bind(this)}
                  />
                  <input 
                    type="text" 
                    name="last name" 
                    placeholder='Your lastname goes here'
                    onChange={this.updateLastName.bind(this)}
                  />
                  <input 
                    type="submit"
                    value="Soumettre"
                    className="btn"
                  />
                </form> 
            </div>
        );
    }
}

export default SignUp;