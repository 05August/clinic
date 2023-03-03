import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import logo from "assets/img/logo.png";

const Loading = () => {
  const isLoading = useSelector((state) => state.globalSlice.isLoading);

  return (
    <div className="loading" style={{ display: isLoading ? "block" : "none" }}>
      <div className="loading-container">
        <Spin tip="Loading" size="large">
          <div className="content">
            <img src={logo} alt="logo" />
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default Loading;
