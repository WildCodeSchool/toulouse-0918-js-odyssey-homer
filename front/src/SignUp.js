import React, { Component } from 'react';

class SignUp extends Component {
    constructor(){
        super();
        this.state={title:'test@test.com'};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const textInput = event.target.value;
        this.setState({title:textInput});
    }
    
    render(){
            return (
                <div>
                   <h1>{this.state.title}</h1>
                        <label>email : 
                   <input type="text" onChange={this.handleChange} />
                        </label>
                </div>);
    }
}
export default SignUp;