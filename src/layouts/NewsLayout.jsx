import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/shared/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/shared/RightNav/RightNav";
import Footer from "../pages/shared/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsLayout;
