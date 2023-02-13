import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} xs={12}>
              1
            </Col>
            <Col lg={3} sm={6} xs={6}>
              2
            </Col>
            <Col lg={3} sm={6} xs={6}>
              3
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              4
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer-bottom"></section>
    </footer>
  );
};

export default Footer;
