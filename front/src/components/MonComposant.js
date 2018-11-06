import React, { Component } from 'react';

class MonComposant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailField: 'test@test.com'
    }

  }

  updateEmailField = e => {
    this.setState({
      emailField:e.target.value
    })
  }

  render() {
    const {emailField} = this.state;
    return (
      <div>
        <div>mon nouveau composant</div>

        <h1>{emailField}</h1>
        <input onChange={this.updateEmailField} type="email" name="email" />
      </div>
    );
  }
}

export default MonComposant;