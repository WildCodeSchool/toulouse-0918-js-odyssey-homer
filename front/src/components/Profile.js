import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  NavLink,
  Button, Form, FormGroup, Label,
  Input, Container, Col, Row
} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        first: "Homer",
        last: "Simpson"
      }
    };
  }
  render() {
    return (
      <Container className="shadow-sm p-5 bg-white rounded mt-5">
        <Row>
          <Col lg="6" md="6" sm="12">
            <img
              src="https://vignette.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest?cb=20110703093455&path-prefix=fr"
              alt="homer"
              // style={{ width: "20em" }}
              className="text-center mx-auto d-block">
            </img>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="text-center ">
              <h2>Bonjour !</h2>
              <h2>Vous vous appelez : {this.state.profile.first}
                {this.state.profile.last}</h2>
              <h2>Votre adresse email est : {this.state.profile.email}</h2>
              <Link
                className="btn bg-primary text-white"
                activeClassName="active"
                to="/signin"
              >signOut</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
