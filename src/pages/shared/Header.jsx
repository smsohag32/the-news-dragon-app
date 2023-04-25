import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="logo" />
        <p>
          <small className="text-secondary">
            Journalism without fear or favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <Container>
        <div className="d-flex">
          <button className="btn btn-danger">Latest</button>
          <Marquee speed={50} className="text-danger">
            I can be a React component, multiple React components, or just some
            text.... I can be a React component, multiple React components, or
            just some text.
          </Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Carer</Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <p>profile</p>
                <Button variant="dark">Dark</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
