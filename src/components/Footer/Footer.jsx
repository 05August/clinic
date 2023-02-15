import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import wave from "../../assets/img/wave.png";
import updown from "../../assets/img/updown.png";
import rotate from "../../assets/img/rotate.png";
import { WIDGET_DATA } from "../../constants/constants";
import { Link } from "react-router-dom";
import "./footer.scss";

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
                  <Link to="/">
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
                <h3 className="widget__title">Quick Links</h3>
                {renderWidget(WIDGET_DATA.quickLink)}
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6}>
              <div className="widget widget-path">
                <h3 className="widget__title">Our Service</h3>
                {renderWidget(WIDGET_DATA.ourService)}
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <div className="widget widget-form">
                <h3 className="widget__title">Subcribe</h3>
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
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link to="http://facebook.com">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAY1BMVEUAAABHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZNHWZO78QseAAAAIHRSTlMA8vpnK/TcqmHXcmlb6cK57eGzoZd8VBTIrJElHx4cETFoB1QAAACcSURBVCjPjdLdDoIwDAXgQ9nGgKEICP7r+z+lnTHTUZt4rrp8SXcuCvi6kKlbIDx+p0SnSA9ShGDz9+TnOcQ9FsU31BfEbHgsMqEFiozgLGezE1IyhPixEP/eJKVl2aoySKmMubPcjDGHXPZIGVRZtZ4SXCkXci4AODnXy26N2rpkqf4Qq4gFKULoVnJM27zolub2c2+eZXxNrsETzpIz2qSkL9QAAAAASUVORK5CYII="
                          alt="facebook"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="http://twitter.com">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAclBMVEUAAAADqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfQDqfRwDYv8AAAAJXRSTlMAb/l2EwjkuMsk3dHGoptjKPHt2LuulZBNRT85NDAdFw2lh2dX/mUM0wAAALJJREFUKM+t0dcSgyAQQNEFRMQee9cU/v8XA4OC7S25Tzt7xoER+ENtHRGuhhmg43ZPmVARTvIJwM2oEU9sNbMU4acrJAZCRqSoz7UwYSoBoFSDj5yDVCBz9IyLV2KPQQpS9DCLg1Ac3EgDsljc5OhzroX6rkN4kTfoPuwEeIXFvd5sLT1BACZeYGwBO7BryK30YJtQYPbuuG37yPOFLbaPtez+YxaPcIi2pHpGNeoo/NgXMxwp+PXS8X4AAAAASUVORK5CYII="
                          alt="twitter"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="http://instagram.com">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAACwVBMVEUAAAD/PQDpAGTxAEjtAFL/dADpR4vmAHToAGv/uAD/hwD/fQDlAH3sAVr/kQD/aADjAIbuAVH/XgDhAI//pgDxAUP/FgD/sAD/SgDdAJ//ugD/AAn+ADX/NQD6ASrkAJX/LgD8AR//BQL/AFD/MAD/IADbALT/KQDiAI3/MAD/mQD/OgDlAIXrAHn7ACr/TwD/bwDfAMr/jAD/RQDzADnpAGf/WwD/AgL/AE3/ABP/CQDjAJ3+AA3/FAD8ARPqAGP/cwD/nADXAKzeAJ/qAGP/cwD/nAD/FADwAUj7ARD/1AD/VAD/VAD+ADrfAJjfAJj/0QDxAT//RADWAK3/RAD/AADzATb+ADr7ABP+AC/9AEb/FAD/tAD/TgD/PwDdAKH0ATb/OAD/TwD9AET/QAD+ADD/AQ//FQD2AS7ZAKnqAJj/xAD/wgDbAKr/AAD6ARn/HgD9AE3/QwD/AEL/rgD/WAD/rwD/WwD9AE7/HwD/AADfAJzuAI//XwD/YgDsAIr+ARr/AC74AST/AQb/BwD/zwD3ASTeAI7/MwD/zQD4ASP/pAD/ACv/qQD+ASj/KgD/ARn1AC34ASf/LwD/mgDvAHn/BwD0ATb/AAT/2gD/hwD/fgD/XwDmAIX/2QDlAHP/IQD/XQD/ABn3AIL7AHn/XgD/HQD/rwD/tAD/HAD/2wDaAKj/AAj/xAD/IgD/CgDdAJ/9AEv2ASn4AR7/AQH/XAD/TgDhAI7jAITsAH7lAHznAHLpAGrqAGDtAVjwAUb9AEPyAT7+ADj0ATT+AC7+ASb+AR7/ART/uQD/pAD/mgD/kAD/hQD/ewD/cAD/WAD/UgD/RwD/QgD/NgD/NAD/LAD/KgD/GQDYALLfAJffAJXoAInxAHnuAVDuAU/9AET9AEH7ARH/AwH/zgD/rgD/rQD/ZwD/ZgD/TQD/PgD/PQC8CZerAAAAq3RSTlMA2UVFPDsH+Pj4+Pj39/f39vb28fHt7Onp3NnU0baonZyTiX5ybmxjVlFLS0pIRkZFRD8/Pjw7OjAqGg8L+/r5+ff29vb29PTz8/Lx8O3r5ubl5eLi4d/c3Nva2tnZ1dTT0c/NzcvLx8G/u7W1raulpaKhoKCgmZmXlpaUkIB8e3t4dnVycG5ra2hkY2JiYGBfV1dWUlFRTUlIR0VFQD89PTY0MiwoIx4UDwqN856xAAAB2klEQVQoz2XJU2MbUAAG0C/Jktp2u9Xa1m5dNdu2bdu2rdpt2Ki2bdv4Fc29zUva83pAvLM9stXEQGeFupq2vtHmwxedOaAW7JGIxQV5OV3ZWZkZ6akpbSLu9rk0+nl9l199/c1isZhMppen62s7EbeVlKlwZwBUBVlwl3HgIlgYCBWP7RC0nOsMm+YrquGV1nEO90VnwWh0ARXgcHL38Tv+iOlMewDXdguYj7nReF5SXFSY35M8C9E/Ac+UTdhQ50HihZRn9eTTU+teRSmEphrBsHY2gLgW4SUQ13OT/QGEp+tDT0bGXrAfk6xzrwKYn6GNlSMhABhNTsr5kL+PTKYatKrnANjW4KYc78KNAGZkqUOziszB+jfK+VK0l0z2YuhW/gdwU35IOaeKbcl062BVxT8AsTXyazTu8UqiAMzLMYBxuTsUHslGTzh+dzotlM4Embw1MCv7AeJhjby+oUnQQgPeBSawHHwPKvL2sR1H7SNAfRPvwoXSG5jOQXIGb/kaCdMieK3kGTjr+Afip0SgFW9RMBA2wNe49dHdx4fNZvv5+fp6fL67Wij9A4W/W/ilQ2XlFZVV1cOy2rrxxmaB6S9QSS/PW5oZL9XV1FqiZ7jenGHjmAhgAoiZoDeT/QKtAAAAAElFTkSuQmCC"
                          alt="instagram"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="http://linkedin.com">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAElBMVEUAhLH////2+/zR6fFottEvm799bY6GAAAAMUlEQVQY02MgHwgKoPAEcfMCBQgYxSRoANcnKCIIJOE8EBBA8ARQeAyMKDwGGvHIBgCHpQW6rT569gAAAABJRU5ErkJggg=="
                          alt="linkedin"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer-bottom">
        <Container>
          <p className="copyright-text">
            Copyright © 2022 Design &amp; Developed by Someone
          </p>
        </Container>
      </section>
      <img src={wave} alt="wave-animate" className="pt-img1 animate animate-wave" />
      <img src={updown} alt="updown-animate" className="pt-img2 animate animate-updown" />
      <img src={rotate} alt="rotate-animate" className="pt-img3 animate animate-rotate" />
      <img src={wave} alt="wave-animate" className="pt-img4 animate animate-wave" />

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
