import React, { useState } from "react";

const Nhap = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const [name, value] = e.target;
    console.log("value:", value);
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleRegister = (e) => {
    console.log("details:", details);
    e.preventDefault();
    console.log("1:", 1);
  };
  return (
    <div>
      <form>
        <h3>name</h3>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <h3>email</h3>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleChange}
        />
        <h3>password</h3>
        <input
          name="password"
          type="text"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={(e) => handleRegister(e)}>Register đăng ký</button>
      </form>
    </div>
  );
};

export default Nhap;
