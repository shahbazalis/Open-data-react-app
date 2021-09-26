import { Route, Redirect, RouteProps } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MainLayout from "../Pages/Layout/MainLayout";
// screen if you're not yet authenticated.
interface PrivateRouteProps extends RouteProps {
  Component: any;
  lbl: string;
}

const AuthorizeRoute = (routeProps: PrivateRouteProps) => {
  const { Component, ...rest } = routeProps;
  // const isLicence = useSelector((state: any) => state.AuthReduce.isLicence);

  // const [chk_term, setChkTerm] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const chk_term = await getUserProfileProperty("terms");
  //     setChkTerm(chk_term);
  //   })();
  // }, []);

  const routeComponent = (props: any) => {
    // if (routeProps.isSignout) {
    //   return <Redirect to={{ pathname: "/login" }} />;
    // } else if (!routeProps.isUserProfile) {
    //   return <Redirect to={{ pathname: "/userInfo" }} />;
    // } else if (!chk_term) {
    //   return <Redirect to={{ pathname: "/termsconditions" }} />;
    // } else if (!isLicence) {
    //   return <Redirect to={{ pathname: "/license" }} />;
    // } else {
      return (
        <MainLayout Component={routeProps.Component} lbl={routeProps.lbl} />
      );
    // }
  };

  return <Route {...rest} render={routeComponent} />
};

export default AuthorizeRoute;
