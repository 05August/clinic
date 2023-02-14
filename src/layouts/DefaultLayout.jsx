import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="containerBody">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
