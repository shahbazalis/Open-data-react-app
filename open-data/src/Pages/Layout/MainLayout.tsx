import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { createStyles, useMediaQuery } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import Topbar from "./topbar";
import SideBar from "./sidebar"
import { RouteProps } from "react-router-dom";
interface PrivateRouteProps extends RouteProps {
  Component: any;
  lbl: string
}
const drawerWidth = 240;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//     toolbar: {
//       paddingRight: 24, // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       padding: "0 8px",
//       ...theme.mixins.toolbar,
//     },
//     appBar: {
//       zIndex: theme.zIndex.drawer + 1,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     menuButton: {
//       marginRight: 36,
//     },
//     menuButtonHidden: {
//       display: "none",
//     },
//     title: {
//       //flexGrow: 1,
//     },
//     drawerPaper: {
//       position: "relative",
//       whiteSpace: "nowrap",
//       width: drawerWidth,
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     drawerPaperClose: {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       height: "100vh",
//       overflow: "auto",
//     },
//     container: {
//       paddingTop: theme.spacing(4),
//       paddingBottom: theme.spacing(4),
//     },
//     paper: {
//       padding: theme.spacing(2),
//       display: "flex",
//       overflow: "auto",
//       flexDirection: "column",
//     },
//     fixedHeight: {
//       height: 240,
//     },
//     signOutButton: {
//       marginLeft: theme.spacing(1),
//     },
//     avatar: {
//       backgroundColor: orange[800],
//       width: "88px",
//       margin: "-13px -24px 0 0",
//       "font-weight": "bold",
//     },
//   })
// );

export default function MainLayout(prop: PrivateRouteProps) {
  const mobile = useMediaQuery('(min-width:600px)');
  //const classes = useStyles();
  const [open, setOpen] = useState(true);
  return (
    <div>
      <CssBaseline />
      <Topbar open={open} openHandler={setOpen} lbl={prop.lbl} />
      <SideBar open={open} openHandler={setOpen}  />
      <main >
        <div  />
        <Container maxWidth="lg" >
          <prop.Component {...prop} />
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}
