import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="py-2 mb-2">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">Carer</Link>
                </Nav.Link>
              </Nav>
              <Nav className="d-flex  align-items-center gap-3">
                <p className="">
                  {user && <FaUser style={{ fontSize: "30px" }}></FaUser>}
                </p>
                {user ? (
                  <span>
                    <Link to="/">
                      <Button variant="dark">Logout</Button>
                    </Link>
                  </span>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
