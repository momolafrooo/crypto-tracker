import { Container } from "@mui/material";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

interface LayoutProps {}

const Layout = memo(({}: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
});

export default Layout;
