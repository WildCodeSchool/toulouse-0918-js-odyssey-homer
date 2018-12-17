import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


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
      <ListGroup>
        <ListGroupItem>{email}</ListGroupItem>
        <ListGroupItem>{name}</ListGroupItem>
        <ListGroupItem>{lastname}</ListGroupItem>
      </ListGroup>
    )
  }
}

export default Profile;
