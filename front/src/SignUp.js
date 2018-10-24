import React from 'react';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  updateEmailField(event){
    this.setState({value: event.target.value})
  }

  render() {
    return(
      <div>
        <h1>{this.state.value}</h1>
        <input onChange={this.updateEmailField.bind(this)} type="email" name="email"/>

      </div>
    )
  }
}

export default SignUp;
