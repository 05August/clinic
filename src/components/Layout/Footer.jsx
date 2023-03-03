import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import logo from "assets/img/logo.png";
import { WIDGET_DATA, SOCIAL_LIST, ICON_ANIMATION_DATA } from "constants/constantsFooter";
import { renderAnimationIcon } from "utils/renderAnimationIcon";
import { ROUTE } from "constants/constantsGlobal";

const renderWidget = (data) => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={`${item.title}-${index}`}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const renderListSocial = (data) => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={`social-${index}`}>
            <Link to={item.url}>
              <img src={item.src} alt={item.alt} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Footer = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <section className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} xs={12}>
              <div className="widget widget-info">
                <div className="ft-logo">
                  <Link
                    to={ROUTE.HOME}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="ft-contact">
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod
                    tempor incididunt ut labore et.
                  </p>
                  <a href="tel:0123 456 7890">
                    <div className="contact">
                      <div className="contact-icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="contact-number">
                        <span>Contact Us</span>
                        <h4 className="number">+01 123 456 7890</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6}>
              <div className="widget widget-path ml-50">
                <h3 className="widget__title bg-br-title">Quick Links</h3>
                {renderWidget(WIDGET_DATA.quickLink)}
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6}>
              <div className="widget widget-path">
                <h3 className="widget__title bg-br-title">Our Service</h3>
                {renderWidget(WIDGET_DATA.ourService)}
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <div className="widget widget-form">
                <h3 className="widget__title bg-br-title">Subcribe</h3>
                <form className="subscribe-form">
                  <div className="input-group">
                    <input
                      name="email"
                      required
                      className="form-control"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                  <button
                    name="submit"
                    value="Submit"
                    type="submit"
                    className="btn btn-secondary shadow"
                  >
                    Subscribe Now
                  </button>
                </form>
                <div className="footer-social">{renderListSocial(SOCIAL_LIST)}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer-bottom">
        <Container>
          <p className="copyright-text">
            Copyright © 2022 Design &amp; Developed by Two++Team
          </p>
        </Container>
      </section>
      {renderAnimationIcon(ICON_ANIMATION_DATA)}

      <button
        className="back-to-top"
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{ display: offset > 200 ? "flex" : "none" }}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
