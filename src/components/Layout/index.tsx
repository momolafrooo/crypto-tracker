import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

interface LayoutProps {}

const Layout = memo(({}: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
});

export default Layout;
