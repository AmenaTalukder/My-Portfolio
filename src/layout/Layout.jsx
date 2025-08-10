import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
