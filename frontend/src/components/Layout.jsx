// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer"; // Add this if you use a header

const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Optional Header */}
     
      
      <main style={{ minHeight: "calc(100vh - 160px)", padding: "20px" }}>
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
