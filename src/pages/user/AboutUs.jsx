import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

import Animation from "components/Shared/Animation";
import BlogItem from "components/Common/BlogItem";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const dataBlog = [
    {
      img: "https://meditro.themetrades.com/react/static/media/pic1.a3848a11.jpg",
      doctorAvatar: "https://i.postimg.cc/Ss7DCN7n/pic2.jpg",
      postTitle: "In this hospital there are special surgeon",
      date: "21/03/2023",
      doctorName: "John deo",
    },
    {
      img: "https://i.postimg.cc/5952QchD/pic12.jpg",
      doctorAvatar: "https://i.postimg.cc/SxRSPnnp/pic3.jpg",
      postTitle: "Can you get a diflucan prescription online?",
      date: "21/03/2023",
      doctorName: "Peter Parker",
    },
    {
      img: "https://i.postimg.cc/T3g7f9Lj/pic13.jpg",
      doctorAvatar: "https://i.postimg.cc/mk7jBZhL/pic4.jpg",
      postTitle: "In this hospital there are special surgeon",
      date: "21/03/2023",
      doctorName: "John deo",
    },
  ];

  return (
    <>
      <section className="about">
        <Container className="about-container">
          <Row>
            <Col lg={6} className="about-left">
              <div className="about-thumb">
                <ul>
                  <li>
                    <div className="amount-doctor">
                      200+<span>Specialist Doctor</span>
                    </div>
                  </li>
                  <li>
                    <img
                      className="about-thumb1"
                      src="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="about-thumb2"
                      src="https://meditro.themetrades.com/react/static/media/pic-3.fa689b10.jpg"
                      alt=""
                    />
                  </li>
                  <li>
                    <div className="amount-clinic">
                      20+<span>Clinic</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} className="about-right">
              <div className="about-content">
                <h6>About Us</h6>
                <h2>The Great Place Of Medical Hospital Center</h2>
                <p>
                  We provide the special tips and advice's of heath care
                  treatment and high level of best technology involve in the our
                  hospital.
                </p>
              </div>
              <Row className="about-feature">
                <Col lg={6} sm={6} className="feature-item">
                  <div className="feature-container feature1">
                    <div className="icon">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="45"
                        viewBox="0 0 512 512"
                        width="45"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156zm-233.226-81.799c0-17.399 14.155-31.555 31.555-31.555s31.555 14.156 31.555 31.555v4.552h-63.109v-4.552zm-132.074 39.035c0-7.986 6.459-14.483 14.397-14.483h298.464c7.938 0 14.396 6.497 14.396 14.483v241.241h-217.35c-4.628-22.794-24.757-39.999-48.814-39.999s-44.187 17.205-48.815 39.999h-12.278zm61.094 281.24c-16.44 0-29.816-13.458-29.816-29.999s13.376-29.999 29.816-29.999 29.815 13.458 29.815 29.999-13.375 29.999-29.815 29.999zm347.998 0c-16.44 0-29.815-13.458-29.815-29.999s13.375-29.999 29.815-29.999 29.816 13.458 29.816 29.999-13.376 29.999-29.816 29.999zm62.908-39.999h-14.093c-4.628-22.794-24.758-39.999-48.815-39.999s-44.186 17.205-48.814 39.999h-13.02v-101.321h107.932l16.81 21.096z"></path>
                        <path d="m183.629 66.808c5.522 0 10-4.477 10-10v-12.104c0-5.523-4.478-10-10-10s-10 4.477-10 10v12.104c0 5.523 4.477 10 10 10z"></path>
                        <path d="m236.764 94.969c1.934 1.829 4.404 2.736 6.871 2.736 2.652 0 5.299-1.048 7.266-3.127l10.626-11.229c3.796-4.011 3.621-10.341-.391-14.137s-10.341-3.621-14.137.391l-10.626 11.229c-3.796 4.012-3.621 10.341.391 14.137z"></path>
                        <path d="m116.358 94.579c1.967 2.078 4.613 3.126 7.266 3.126 2.467 0 4.938-.907 6.871-2.737 4.012-3.796 4.187-10.125.391-14.137l-10.627-11.229c-3.796-4.011-10.126-4.187-14.137-.39-4.012 3.796-4.187 10.125-.391 14.137z"></path>
                        <path
                          d="m90.896 216.592h184.372v113.287h-184.372z"
                          fill="#b2f0fb"
                        ></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h4>Emergency Help</h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={6} className="feature-item">
                  <div className="feature-container feature2">
                    <div className="icon">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="45"
                        viewBox="0 0 512 512"
                        width="45"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m351.524 124.49h-37.907v-37.907h-44.657v37.907h-37.906v44.657h37.906v37.907h44.657v-37.907h37.907z"
                          fill="#a4fcc4"
                        ></path>
                        <path d="m291.289 279.415c73.114 0 132.597-59.482 132.597-132.597s-59.483-132.596-132.597-132.596-132.598 59.482-132.598 132.596 59.484 132.597 132.598 132.597zm0-245.193c62.086 0 112.597 50.511 112.597 112.597s-50.511 112.597-112.597 112.597c-62.087 0-112.598-50.511-112.598-112.597s50.511-112.597 112.598-112.597z"></path>
                        <path d="m502 267.736c-32.668 0-59.245 26.577-59.245 59.245v13.605h-240.266v-19.048c0-23.625-19.221-42.846-42.846-42.846h-90.398v-17.584c0-32.668-26.577-59.245-59.245-59.245-5.522 0-10 4.478-10 10v275.914c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-39.327h373.51v39.327c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-210.041c0-5.522-4.478-10-10-10zm-342.356 30.957c12.598 0 22.846 10.249 22.846 22.846v19.048h-113.245v-41.894zm-110.399 179.085h-29.245v-254.623c16.812 4.434 29.245 19.77 29.245 37.954zm20-49.327v-67.864h373.51v67.864zm422.755 49.327h-29.245v-150.797c0-18.185 12.434-33.521 29.245-37.954z"></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h4>Qualified Doctors</h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={6} className="feature-item">
                  <div className="feature-container feature3">
                    <div className="icon">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="45"
                        viewBox="0 0 512 512"
                        width="45"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m397.886 191.161c-3.545-4.235-9.852-4.797-14.087-1.252-4.235 3.544-4.797 9.851-1.253 14.086 26.684 31.893 41.165 72.339 40.775 113.888-.886 94.681-79.215 172.782-174.608 174.1-48.125.666-93.326-17.479-127.401-51.087-33.708-33.246-52.272-77.526-52.272-124.685 0-59.98 30.361-115.236 81.216-147.809 51.27-32.838 79.187-66.186 93.348-111.507l2.581-8.26 2.58 8.257c9.333 29.869 25.53 55.364 49.516 77.939 4.02 3.786 10.35 3.593 14.136-.428 3.785-4.021 3.594-10.351-.429-14.136-21.713-20.438-35.736-42.471-44.133-69.341l-12.125-38.802c-1.305-4.175-5.171-7.018-9.545-7.018s-8.24 2.843-9.545 7.018l-12.126 38.807c-12.639 40.45-38.072 70.545-85.045 100.63-56.624 36.268-90.429 97.819-90.429 164.65 0 52.553 20.679 101.891 58.228 138.924 37.248 36.736 86.47 56.867 138.888 56.865.941 0 1.891-.006 2.833-.02 51.527-.712 100.087-21.236 136.733-57.792 36.664-36.573 57.12-84.914 57.6-136.118.432-46.301-15.704-91.371-45.436-126.909z"></path>
                        <path d="m279.576 280.012v-29.712c0-5.523-4.478-10-10-10h-46.783c-5.522 0-10 4.477-10 10v29.712h-29.711c-5.522 0-10 4.477-10 10v46.783c0 5.523 4.478 10 10 10h29.711v29.711c0 5.523 4.478 10 10 10h46.783c5.522 0 10-4.477 10-10v-29.711h29.712c5.522 0 10-4.477 10-10v-46.783c0-5.523-4.478-10-10-10zm19.712 46.783h-29.712c-5.522 0-10 4.477-10 10v29.711h-26.783v-29.711c0-5.523-4.478-10-10-10h-29.711v-26.783h29.711c5.522 0 10-4.477 10-10v-29.712h26.783v29.712c0 5.523 4.478 10 10 10h29.712z"></path>
                        <path
                          d="m369.497 246.666c51.239-.708 92.983-42.352 93.459-93.223.313-33.486-16.989-62.983-43.266-79.911-21.598-13.914-37.772-29.46-45.4-53.873l-6.143-19.659-6.143 19.661c-7.603 24.331-23.627 39.927-45.19 53.738-26.16 16.756-43.48 45.945-43.48 79.151 0 52.43 43.18 94.848 96.163 94.116z"
                          fill="#ffbdbc"
                        ></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h4>Best Professionals</h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={6} className="feature-item">
                  <div className="feature-container feature4">
                    <div className="icon">
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="45"
                        viewBox="0 0 512 512"
                        width="45"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z"
                          fill="#e2c4ff"
                        ></path>
                        <path
                          d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182zm-129.892-50.8c6.792-6.796 15.822-10.539 25.426-10.539s18.635 3.743 25.427 10.539c13.407 13.416 13.997 34.875 1.773 49.001-.638.583-1.266 1.183-1.881 1.799-.616.617-1.214 1.245-1.795 1.882-6.533 5.671-14.791 8.766-23.524 8.766-9.604 0-18.634-3.743-25.427-10.54-14.025-14.035-14.025-36.873.001-50.908zm-239.787 380.799-24.74-24.786 9.327-9.344 14.287 14.313 10.454 10.473zm73.244-10.392c-4.903 4.912-11.42 7.617-18.352 7.617s-13.449-2.705-18.353-7.617l-50.881-50.975c-10.134-10.152-10.134-26.672-.001-36.823l196.578-196.898 87.616 87.767zm177.227-244.657-20.619-20.654 24.634-24.669c3.498.676 7.086 1.021 10.727 1.021 3.325 0 6.606-.288 9.813-.853-1.189 6.75-1.139 13.678.151 20.413zm105.062-9.905c-6.792 6.796-15.823 10.539-25.427 10.539s-18.635-3.743-25.427-10.539c-13.407-13.416-13.998-34.875-1.773-49.001.638-.583 1.266-1.183 1.881-1.799.617-.617 1.215-1.246 1.797-1.884 6.532-5.67 14.789-8.764 23.521-8.764 9.604 0 18.635 3.743 25.427 10.54 14.026 14.035 14.026 36.873.001 50.908z"
                          fill="#020288"
                        ></path>
                      </svg>
                    </div>
                    <div className="content">
                      <h4>Medical Treatment</h4>
                    </div>
                  </div>
                </Col>
              </Row>
              <a className="btn btn-primary shadow" href="/about-us">
                Read More
              </a>
            </Col>
          </Row>
          <Animation
            data={{
              url: "https://i.postimg.cc/JnHm5tzs/wave2.png",
              className: "wave",
              style: { bottom: "20%", left: "18%" },
            }}
          />
          <Animation
            data={{
              url: "https://i.postimg.cc/xjNBsWyb/circle.png",
              className: "updown",
              style: { bottom: "5%", right: "25%" },
            }}
          />
          <Animation
            data={{
              url: "https://i.postimg.cc/SN6SPX78/updown3.png",
              className: "rotate",
              style: { top: "33%", right: "9%" },
            }}
          />
          <Animation
            data={{
              url: "https://i.postimg.cc/WpMfKmnG/wave4.png",
              className: "wave",
              style: { bottom: "10%", right: "1%" },
            }}
          />
          <Animation
            data={{
              url: "https://i.postimg.cc/SN6SPX78/updown3.png",
              className: "updown",
              style: { top: "25%", left: "5%" },
            }}
          />
        </Container>
      </section>
      <section className="testimonial">
        <Container>
          <div className="testimonial__heading">
            <h6>Testimonial</h6>
            <h2>
              See What Are The Patients <br />
              Saying About us
            </h2>
          </div>
          <Row>
            <Col>
              <div className="thump__wrapper">
                <img
                  src="https://i.postimg.cc/c4gBPmz7/pic1.png"
                  alt="background-img"
                />
                <ul>
                  <li>
                    <Link to="">
                      <img
                        src="https://i.postimg.cc/9FDzpgk2/pic2.jpg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://i.postimg.cc/PqWMq5bS/pic3.jpg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://i.postimg.cc/KvT3bsDN/pic4.jpg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://i.postimg.cc/LXL4whP3/pic5.jpg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://i.postimg.cc/DZFRfzDg/pic6.jpg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img
                        src="https://i.postimg.cc/K8SfhHC7/pic7.jpg"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="testimonial__review">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </p>
                </div>
                <div className="client__info">
                  <h5>John Deo</h5>
                  <p>patient</p>
                </div>
                <div className="quote__icon">
                  <FaQuoteLeft />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blog">
        <div className="blog__heading">
          <h6>Latest New</h6>
          <h2>Our Latest News</h2>
        </div>
        <div className="blog__container">
          {dataBlog.map((item, index) => (
            <BlogItem key={`${index}-blog`} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
