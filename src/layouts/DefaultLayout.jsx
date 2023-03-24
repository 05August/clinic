import React from "react";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Loading from "components/Shared/Loading";
import { Outlet } from "react-router-dom";
import BreadcrumbPage from "components/Layout/Breadcrumb";
import { Skeleton } from "antd";
import { useSelector } from "react-redux";
import PerLoading from "components/Shared/PerLoading";

function DefaultLayout() {
  const skeleton = useSelector((state) => state.globalSlice.skeleton);

  return (
    <>
      <Header />
      <BreadcrumbPage />
      <main className="containerBody">
        <Skeleton
          active={skeleton}
          style={{ display: skeleton ? "table" : "none" }}
          paragraph={{
            rows: 50,
          }}
        />
        <Outlet />
      </main>
      <Footer />
      <Loading />
      <PerLoading />
    </>
  );
}

export default DefaultLayout;
