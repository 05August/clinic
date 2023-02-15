import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <>
      <section className="banner">
        <Container className="banner-container">
          <Row>
            <Col lg={7} md={6} sm={7} className="banner-content">
              <h6 className="title bg-title">We Provide All Health Care Solution</h6>
              <h1>Protect Your Health And Take Care To Of Your Health</h1>
              <Link className="btn btn-secondary btn-lg shadow" to="/about-us">
                Read More
              </Link>
            </Col>
            <Col lg={5} md={6} sm={5}>
              <div className="banner-img animate-updown">
                <img
                  src="https://meditro.themetrades.com/react/static/media/doctor.7c2bc96d.png"
                  alt="doctor"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Home;
