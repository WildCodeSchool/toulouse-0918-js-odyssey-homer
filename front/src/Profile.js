import React, { Component } from 'react';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    }
  }

  render() {
    return (
      <div id="Profile">
        <ListGroup>
          <ListGroupItem type="email" name="email">mon email</ListGroupItem>
          <ListGroupItem type="password" name="password">mon password</ListGroupItem>
        </ListGroup>

        <Link to="/signin">
          <Button
            type="button"
            className="float-center"
            value="Text">Sign out !
          </Button>
        </Link>
      </div >
    )
  };
}

export default Profile;