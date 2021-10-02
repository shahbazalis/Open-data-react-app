import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Dashboard from "./dashboard";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core";
import { RouteProps } from "react-router-dom";
interface PrivateRouteProps extends RouteProps {
  Component: any;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  })
);

export default function MainLayout(prop: PrivateRouteProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Dashboard />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <prop.Component {...prop} />
        </Container>
      </main>
    </div>
  );
}
