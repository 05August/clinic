// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./login.scss";

// const Register = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       name: "",
//       password: "",
//       confirmPassword: "",
//     },

//     onSubmit: async (values, { resetForm }) => {
//       console.log("values:", values);
//       window.alert("Form submitted");
//       resetForm();
//       try {
//         const res = await axios.post(
//           "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/users",
//           {
//             name: values.name,
//             username: values.email,
//             password: values.password,
//           }
//         );
//         console.log("res.data:", res.data);

//         const newUser = [...database, res.data];
//         setDatabase(newUser);
//       } catch (error) {}
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .required(" Required")
//         .min(4, "must be 4 character or more"),
//       email: Yup.string()
//         .required("Required")
//         .matches(
//           /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//           "please enter a validation"
//         ),
//       password: Yup.string()
//         .required("Required")
//         .matches(
//           /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
//           "Regex for password must contain at least eight characters,one number , one special characters"
//         ),

//       confirmPassword: Yup.string()
//         .required("Required")
//         .oneOf([Yup.ref("password"), null], "password must match"),
//     }),
//   });
//   return <div></div>;
// };

// export default Register;
