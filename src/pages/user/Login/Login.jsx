import React, { useState } from "react";
import "./login.scss";
import logo from "../../../assets/img/logo.png";

import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/constants";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginButton = () => {
    setIsLogin(!isLogin);
  };
  const registerButton = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className="login">
      <div className={`login-container${isLogin ? "" : " right-panel-active"}`}>
        <div className="form-container register-item">
          <form action="#">
            <h1>Register hire.</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={() => {}}>Register</button>
            <span>or use your account</span>
            <div className="social-container">
              <Link to="google.vn" className="social">
                <i className="fa-brands fa-square-facebook"></i>
              </Link>
              <a href="#" className="social">
                <i className="fa-brands fa-google"></i>
              </a>

              <a href="#" className="social">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="form-container login-item">
          <form action="#">
            <h1>Login hire.</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label>Remember me</label>
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <button onClick={() => {}}>Login</button>
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
                  registerButton();
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
              <p>if you don't have an account yet, join us and start your journey.</p>
              <button onClick={() => registerButton()} className="ghost" id="register">
                Register <i className="lni lni-arrow-right register" />
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
  );
};

export default Login;
