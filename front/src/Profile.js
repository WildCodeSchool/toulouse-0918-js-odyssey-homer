import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "homer.simpson@wildcodeschool.fr",
      name: "Homer",
      lastname: "Simpson"
    }
  }
  render() {
    const { email, name, lastname } = this.state
    return (
      <div>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs="12" sm="6">
              <ListGroup>
                <ListGroupItem>Lasname : {lastname}</ListGroupItem>
                <ListGroupItem>Name : {name}</ListGroupItem>
                <ListGroupItem>Email : {email}</ListGroupItem>
              </ListGroup>
              <Link to="/signin"><Button className="border-0 rounded-0" style={{ backgroundColor: '#4b00a0' }}>LOG OUT</Button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile