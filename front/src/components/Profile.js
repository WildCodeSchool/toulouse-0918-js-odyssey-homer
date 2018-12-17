import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state  = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    }
  }
  
  render() {
    const { email, name, lastname } = this.state.profile;
    return(
      <div>
        <div className="mb-5 text-right">
          <Link to='/signin'> => Log Out</Link>
        </div>
        <ListGroup>
          <ListGroupItem>{email}</ListGroupItem>
          <ListGroupItem>{name}</ListGroupItem>
          <ListGroupItem>{lastname}</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default Profile;
