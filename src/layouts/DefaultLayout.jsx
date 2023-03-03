import React from "react";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Loading from "components/Shared/Loading";
import { Outlet } from "react-router-dom";
import BreadcrumbPage from "components/Layout/Breadcrumb";

function DefaultLayout() {
  return (
    <>
      <Header />
      <BreadcrumbPage />
      <main className="containerBody">
        <Outlet />
      </main>
      <Footer />
      <Loading />
    </>
  );
}

export default DefaultLayout;
