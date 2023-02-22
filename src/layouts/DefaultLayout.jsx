import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
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
    </>
  );
}

export default DefaultLayout;
