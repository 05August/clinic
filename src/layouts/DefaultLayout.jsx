import React from "react";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Loading from "components/Shared/Loading";
import { Outlet } from "react-router-dom";
import BreadcrumbPage from "components/Layout/Breadcrumb";
import { Skeleton } from "antd";
import { useSelector } from "react-redux";

function DefaultLayout() {
  const isPerLoading = useSelector((state) => state.globalSlice.isPerLoading);

  return (
    <>
      <Header />
      <BreadcrumbPage />
      <main className="containerBody">
        <Skeleton
          active={isPerLoading}
          style={{ display: isPerLoading ? "table" : "none" }}
          paragraph={{
            rows: 25,
          }}
        />
        <Outlet />
      </main>
      <Footer />
      <Loading />
    </>
  );
}

export default DefaultLayout;
