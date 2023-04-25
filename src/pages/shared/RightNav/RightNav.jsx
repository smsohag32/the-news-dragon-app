import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg from "../../../assets/bg.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
const RightNav = () => {
  return (
    <div>
      <div>
        <h4>Login with</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="outline-primary">
          <FaGithub />
          Login with Github
        </Button>
      </div>
      <div>
        <h4>Find us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube />
            Youtube
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ab
          vitae quidem, laudantium cumque quia fugit distinctio quaerat facere
          tenetur natus totam odio laborum earum fugiat et? Officia, nihil fuga!
        </p>
      </div>
    </div>
  );
};

export default RightNav;
