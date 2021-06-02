import React, {Fragment} from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Row, Col,} from "react-bootstrap";

function Home(props) {
  return (
    // react fragments
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home>">React Bootstrap</Navbar.Brand>
        <Nav className="auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Getting Started</Nav.Link>
        </Nav>
        <NavDropdown title="v1.6.0 (Bootstrap 4.6)" id="basic-nav-dropdown">
          <NavDropdown.Item>v0.33.1 (Bootstrap 3)</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

      <Container fluid={true}>
        <Row className='rw'>
          <Container className="content-body">
            <Row>
              <h1 className='content-header'>
                React Bootstrap
              </h1>
            </Row>
            <Row className="content-row">
              The most popular front-end framework
            </Row>
            <Row className="content-row">
              Rebuilt for React.
            </Row>
            <Row>
              <Col>
                <Button variant="outline-light">
                  Get Started
                </Button>
              </Col>
              <Col>
                <Button variant="outline-light" disabled>
                  Components
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2 className="col-headers">Rebuilt with React </h2>
            React-Bootstrap replaces the Bootstrap Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum eu malesuada augue,
            efficitur pharetra mi. Morbi non rutrum ex. Mauris mollis pulvinar
            quam, sed pellentesque nulla commodo at. Ut volutpat ligula non
            ullamcorper dapibus. Curabitur sit amet metus quis enim eleifend
            fringilla. Nam in risus cras amet.
          </Col>
          <Col>
            <h2 className="col-headers">Bootstrap at its core </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </Col>
          <Col>
            <h2 className="col-headers">Accessible by default </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
