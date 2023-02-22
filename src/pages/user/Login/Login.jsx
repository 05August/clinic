import React, { useState } from "react";
import "./login.scss";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/constants";
const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const database = [
    {
      username: "1",
      password: "1",
    },
    {
      username: "2",
      password: "2",
    },
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const togglePage = () => {
    setIsLogin(!isLogin);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const { uname, pass } = document.forms[1];
    // Find user login info

    const userData = database.find((user) => user.username === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div>
      {isSubmitted ? (
        <div>User is successfully logged in</div>
      ) : (
        <section className="login">
          <div
            className={`login-container${isLogin ? "" : " right-panel-active"}`}
          >
            <div className="form-container register-item">
              <form action="#">
                <h1>Register hire.</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={() => {}}>Register</button>
                <span>or use your account</span>
                <div className="social-container">
                  <Link to="" className="social">
                    <i className="fa-brands fa-square-facebook"></i>
                  </Link>
                  <Link to="#" className="social">
                    <i className="fa-brands fa-google"></i>
                  </Link>

                  <Link to="#" className="social">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </form>
            </div>
            <div className="form-container login-item">
              <form action="#">
                <h1>Login hire.</h1>
                <input type="email" name="uname" placeholder="Email" required />
                {renderErrorMessage("uname")}

                <input type="password" placeholder="Password" name="pass" />
                {renderErrorMessage("pass")}

                <div className="content">
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                </div>
                <button onClick={(e) => handleLogin(e)}>Login1111</button>
                <span>or use your account</span>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fa-brands fa-google"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="title">
                    Hello <br /> friends
                  </h1>
                  <p>if Yout have an account, login here and have fun</p>
                  <button
                    className="ghost"
                    id="login"
                    onClick={() => {
                      togglePage();
                    }}
                  >
                    Login
                    <i className="lni lni-arrow-left login" />
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="title">
                    Start yout <br /> journy now
                  </h1>
                  <p>
                    if you don't have an account yet, join us and start your
                    journey.
                  </p>
                  <button
                    onClick={() => togglePage()}
                    className="ghost"
                    id="register"
                  >
                    Register1<i className="fa-thin fa-arrow-right"></i>
                    <FontAwesomeIcon icon="fa-thin fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to={ROUTE.HOME}>
            <img src={logo} alt="logo" />
            <div>Back to Home</div>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Login;
