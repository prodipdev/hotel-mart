import React from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="px-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
