import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import logo from "assets/img/logo.png";

const PerLoading = () => {
  const isPerLoading = useSelector((state) => state.globalSlice.isPerLoading);

  return (
    <div
      className="loading"
      style={{
        display: isPerLoading ? "block" : "none",
        backgroundColor: "transparent",
        cursor: "wait",
      }}
    >
      <div className="loading-container">
        {/* <Spin tip="Loading" size="large"></Spin> */}
      </div>
    </div>
  );
};

export default PerLoading;
