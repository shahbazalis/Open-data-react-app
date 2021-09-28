import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Dashboard from "./dashboard";
import { RouteProps } from "react-router-dom";
interface PrivateRouteProps extends RouteProps {
  Component: any;
}

export default function MainLayout(prop: PrivateRouteProps) {
  return (
    <div>
      <CssBaseline />
      <Dashboard />
      <main>
        <Container maxWidth="lg">
          <prop.Component {...prop} />
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}
