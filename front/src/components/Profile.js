import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'homer.simpson@wildcodeschool.fr',
      name: 'Homer',
      lastname: 'Simpson'
    }
  }
  render() {
    return (
      <div>
        <ListGroup>
            <ListGroupItem>
              Email
            </ListGroupItem>
            <ListGroupItem>
              Mon email
            </ListGroupItem>
        </ListGroup>

        <Link to='/signin'>
          <Button>
            Log out
          </Button>
        </Link>
      </div>
    );
  }
}

export default Profile;