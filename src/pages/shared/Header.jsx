import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import NavigationBar from "./NavigationBar";
const Header = () => {
  return (
    <div className="py-2 mt-3">
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
        <div className="d-flex align-items-center">
          <button className="btn btn-danger">Latest</button>
          <Marquee speed={50} className="text-danger">
            I can be a React component, multiple React components, or just some
            text.... I can be a React component, multiple React components, or
            just some text.
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default Header;
