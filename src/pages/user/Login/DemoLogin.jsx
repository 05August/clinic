import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import logo from "../../../assets/img/logo.png";
import { ROUTE } from "../../../constants/constants";
import "./login.scss";
const DemoLogin = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [database, setDatabase] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  ///////////////////////////////////////////// register
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values, { resetForm }) => {
      console.log("values:", values);
      window.alert("Form submitted");
      setIsRegister(true);
      resetForm();
      try {
        ///////////////day code len api
        const res = await axios.post(
          "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/users",
          {
            name: values.name,
            username: values.email,
            password: values.password,
          }
        );

        const newUser = [...database, res.data];
        setDatabase(newUser);
      } catch (error) {}
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(" Required")
        .min(4, "must be 4 character or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "please enter a validation"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Regex for password must contain ... Ex:Toan123!"
        ),

      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "password must match"),
    }),
  });
  /////// database auto update lai du lieu moi khi register
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/users"
        );
        setDatabase(res.data);
      } catch (error) {}
    };
    getTodos();
  }, []);
  console.log("database[0]:", database[0]);
  ///////////////////////////////////logic login
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = database.find((user) => {
      return user.username === emailLogin;
    });
    if (userData) {
      if (userData.password !== passwordLogin) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const togglePage = () => {
    setIsLogin(!isLogin);
  };
  ////////////////tao message khi login dung sai
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
              <form onSubmit={formik.handleSubmit}>
                <h1>Register hire.</h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && (
                  <p className="error"> {formik.errors.name}</p>
                )}

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="error"> {formik.errors.email}</p>
                )}
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <p className="error"> {formik.errors.password}</p>
                )}
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && (
                  <p className="error"> {formik.errors.confirmPassword}</p>
                )}
                <button>register</button>

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
                <input
                  // value={isRegister ? "false" : "true"}
                  type="text"
                  name="uname"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmailLogin(e.target.value)}
                />
                {renderErrorMessage("uname")}

                <input
                  // value={isRegister ? "false" : "true"}
                  name="pass"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPasswordLogin(e.target.value)}
                />
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

                <button onClick={(e) => handleLogin(e)}>Login Ok</button>

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

export default DemoLogin;
