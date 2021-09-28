import { Route, Redirect, RouteProps } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";

interface PrivateRouteProps extends RouteProps {
  Component: any;
  lbl: string;
  isSignout: Boolean;
}

const AuthorizeRoute = (routeProps: PrivateRouteProps) => {
  const { Component, ...rest } = routeProps;
  const routeComponent = () => {
    if (routeProps.isSignout) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return <MainLayout Component={routeProps.Component} />;
    }
  };

  return <Route {...rest} render={routeComponent} />;
};

export default AuthorizeRoute;
