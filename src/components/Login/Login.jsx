import React, { useState } from "react";
import "../Login/Login.css";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginButton = () => {
    setIsLogin(!isLogin);

    console.log("isLogin:", isLogin);
  };
  const registerButton = () => {
    console.log("2:", 2);
    setIsLogin(!isLogin);

    // isLogin ? setIsLogin(false) : setIsLogin(true);
  };

  return (
    <div>
      <div
        className={`container${isLogin ? "" : " right-panel-active"}`}
        id="container"
      >
        <div className="form-container register-container">
          <form action="#">
            <h1>Register hire.</h1> <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={() => registerButton()}>Register</button>
            <span>or use your account</span>
            <div className="social-container">
              <a href="google.vn" className="social">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#" className="social">
                <i class="fa-brands fa-google"></i>
              </a>

              <a href="#" className="social">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="form-container login-container">
          <form action="#">
            <h1>Login hire.</h1> <input type="email" placeholder="Email" />
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
            <button onClick={() => loginButton()}>Login</button>
            <span>or use your account</span>
            <div className="social-container">
              <a href="#" className="social">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#" className="social">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="#" className="social">
                <i class="fa-brands fa-linkedin"></i>
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
              <p>
                if you don't have an account yet, join us and start your
                journey.
              </p>
              <button
                onClick={() => registerButton()}
                className="ghost"
                id="register"
              >
                Register <i className="lni lni-arrow-right register" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
