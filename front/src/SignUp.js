import React from 'react';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordbis: '',
      name: '',
      lastname: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(JSON.stringify(this.state,1,1))
  }


  render() {
    return(
      <div>
        <h1>{this.state.value}</h1>

        <form action="" onSubmit={this.handleSubmit}>
        <div className="pb-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} name="email"/>
        </div>

        <div className="pb-3">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.handleChange} name="password"/>
        </div>

        <div className="pb-3">
          <label htmlFor="passwordbis">PasswordBis</label>
          <input type="password" name="passwordbis" onChange={this.handleChange} name="passwordbis"/>
        </div>

        <div className="pb-3">
          <label htmlFor="name">Name</label>
          <input type="name" name="name" onChange={this.handleChange} name="name"/>
        </div>

        <div className="pb-3">
          <label htmlFor="lastname">Last Name</label>
          <input type="name" name="lastName" onChange={this.handleChange} name="lastName"/>
        </div>

        <div>
           <input type="submit" value='Submit' className='btn btn-danger'/>
        </div>

        </form>

      </div>
    )
  }
}

export default SignUp;
