import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import { Outlet } from "react-router-dom";
import BreadcrumbPage from "../components/Breadcrumb/Breadcrumb";

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
